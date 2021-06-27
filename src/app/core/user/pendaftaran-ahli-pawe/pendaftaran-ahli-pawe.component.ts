import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

@Component({
  selector: "app-pendaftaran-ahli-pawe",
  templateUrl: "./pendaftaran-ahli-pawe.component.html",
  styleUrls: ["./pendaftaran-ahli-pawe.component.scss"],
})
export class PendaftaranAhliPaweComponent implements OnInit, OnDestroy {
  private chart1: any;
  private chart2: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("udaf1", am4charts.XYChart);

    chart.data = [
      {
        country: "Selangor",
        visits: 2025,
      },
      {
        country: "Sarawak",
        visits: 1882,
      },
      {
        country: "Kedah",
        visits: 1809,
      },
      {
        country: "Sabah",
        visits: 1322,
      },
      {
        country: "Pahang",
        visits: 1122,
      },
      {
        country: "Terengganu",
        visits: 1114,
      },
      {
        country: "Pulau Pinang",
        visits: 984,
      },
      {
        country: "Negeri SembPerak",
        visits: 711,
      },
      {
        country: "Negeri Sembilan",
        visits: 665,
      },
      {
        country: "Kelantan",
        visits: 580,
      },
      {
        country: "Melaka",
        visits: 443,
      },
      {
        country: "Perlis",
        visits: 441,
      },
    ];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
      am4core.array.each(chart.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
      });
      chart.invalidateRawData();
    }, 2000);

    categoryAxis.sortBySeries = series;

    this.chart1 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("udaf2", am4charts.PieChart);

    // Set data
    let selected;
    let types = [
      {
        type: "Wanita",
        percent: 70,
        color: chart.colors.getIndex(0),
        subs: [
          {
            type: "Oil",
            percent: 15,
          },
          {
            type: "Coal",
            percent: 35,
          },
          {
            type: "Nuclear",
            percent: 20,
          },
        ],
      },
      {
        type: "Lelaki",
        percent: 30,
        color: chart.colors.getIndex(1),
        subs: [
          {
            type: "Hydro",
            percent: 15,
          },
          {
            type: "Wind",
            percent: 10,
          },
          {
            type: "Other",
            percent: 5,
          },
        ],
      },
    ];

    // Add data
    chart.data = generateChartData();

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "type";
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.slices.template.propertyFields.isActive = "pulled";
    pieSeries.slices.template.strokeWidth = 0;

    function generateChartData() {
      let chartData = [];
      for (var i = 0; i < types.length; i++) {
        if (i == selected) {
          for (var x = 0; x < types[i].subs.length; x++) {
            chartData.push({
              type: types[i].subs[x].type,
              percent: types[i].subs[x].percent,
              color: types[i].color,
              pulled: true,
            });
          }
        } else {
          chartData.push({
            type: types[i].type,
            percent: types[i].percent,
            color: types[i].color,
            id: i,
          });
        }
      }
      return chartData;
    }

    pieSeries.slices.template.events.on("hit", function (event) {
      let tgif = event.target.dataItem.dataContext as any;
      if (tgif.id != undefined) {
        selected = tgif.id;
      } else {
        selected = undefined;
      }
      chart.data = generateChartData();
    });
    this.chart2 = chart;
  }
}
