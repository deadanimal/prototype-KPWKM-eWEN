import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  OnDestroy,
} from "@angular/core";

import * as mapboxgl from "mapbox-gl";
import { environment } from "src/environments/environment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import swal from "sweetalert2";

@Component({
  selector: "app-profiling-pemetaan",
  templateUrl: "./profiling-pemetaan.component.html",
  styleUrls: ["./profiling-pemetaan.component.scss"],
})
export class ProfilingPemetaanComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  private chart1: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.getCharts();
  }

  ngAfterViewInit() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    const INITIAL_VIEW_STATE = {
      latitude: 3.139,
      longitude: 101.6869,
      zoom: 4,
      maxZoom: 16,
      bearing: 0,
      pitch: 0,
    };

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      // Note: deck.gl will be in charge of interaction and event handling
      interactive: true,
      center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
      zoom: INITIAL_VIEW_STATE.zoom,
      bearing: INITIAL_VIEW_STATE.bearing,
      pitch: INITIAL_VIEW_STATE.pitch,
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("ktpeta1", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    for (var i = 1; i < 500; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i, 0, 0, 0, 0), value: visits });
    }

    chart.data = data;

    let popup = chart.openPopup(
      "<div>Click on plot area to add points<br>Drag bullets to change values<br>Double click on bullet to remove</div>"
    );
    popup.top = 60;
    popup.right = 30;
    popup.defaultStyles = false;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    //series.tooltipText = "{valueY}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.fillOpacity = 0.5;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.behavior = "none";

    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;

    let newSeries;
    let addingPointsDisabled = false;

    addSeries();

    function addSeries() {
      newSeries = chart.series.push(new am4charts.LineSeries());
      newSeries.data = [];
      newSeries.dataFields.dateX = "date";
      newSeries.dataFields.valueY = "newValue";
      newSeries.interpolationDuration = 0;

      let bullet = newSeries.bullets.push(new am4charts.CircleBullet());
      bullet.draggable = true;

      bullet.events.on("dragged", function (event) {
        let bullet = event.target;

        let x = bullet.pixelX;
        //x = dateAxis.getX(bullet.dataItem, "dateX"); //  uncomment this line if you want to allow draggin bullets only along y axis

        bullet.moveTo({ x: x, y: bullet.pixelY }, undefined, undefined, true);
        bullet.dataItem.valueY = valueAxis.yToValue(bullet.pixelY);
        bullet.dataItem.dataContext.newValue = bullet.dataItem.valueY;

        // remove the following three lines if you want to allow draggin bullets only along y axis
        bullet.dataItem.dateX = dateAxis.xToValue(bullet.pixelX);
        bullet.dataItem.dataContext.date = bullet.dataItem.dateX;
        dateAxis.postProcessSeriesDataItem(bullet.dataItem);
      });

      bullet.events.on("down", function (event) {
        addingPointsDisabled = true;

        let cod = series.tooltipX as any;
        let doc = series.tooltipY as any;
        chart.cursor.triggerMove({ x: cod, y: doc }, "hard"); // sticks cursor to the point
      });

      bullet.events.on("dragstop", function (event) {
        let bullet = event.target;

        let rex = series.tooltipX as any;
        let xer = series.tooltipY as any;
        chart.cursor.triggerMove({ x: rex, y: xer }, "none"); // enables mouse following again

        addingPointsDisabled = false;
      });

      bullet.events.on("doublehit", function (event) {
        addingPointsDisabled = false;
        let dataItem = event.target.dataItem;
        let dataContext = dataItem.dataContext;
        newSeries.data.splice(newSeries.data.indexOf(dataContext), 1);
        newSeries.invalidateData();

        let toy = series.tooltipX as any;
        let yot = series.tooltipY as any;
        chart.cursor.triggerMove({ x: toy, y: yot }, "none"); // enables mouse following again
      });
    }

    let interaction = am4core.getInteraction();

    interaction.events.on("up", function (event) {
      if (newSeries && !addingPointsDisabled && chart.cursor.visible) {
        let hui = series.tooltipDataItem as any;
        let date = hui.dateX;
        let point = am4core.utils.documentPointToSprite(
          event.pointer.point,
          chart.seriesContainer
        );
        let value = valueAxis.yToValue(point.y);
        if (value > valueAxis.min && value < valueAxis.max) {
          newSeries.data.push({ date: date, newValue: value });
          sortData();
          newSeries.invalidateData();
        }
      }
    });

    function sortData() {
      newSeries.data.sort(function (a, b) {
        let atime = a.date.getTime();
        let btime = b.date.getTime();

        if (atime < btime) {
          return -1;
        } else if (atime == btime) {
          return 0;
        } else {
          return 1;
        }
      });
    }
    this.chart1 = chart;
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Anda pasti?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Pasti",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        if (result.value) {
          this.register();
        }
      });
  }

  register() {
    swal
      .fire({
        title: "Berjaya",
        text: "Maklumat anda telah dihantar",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Tutup",
      })
      .then((result) => {
        if (result.value) {
        }
      });
  }
}
