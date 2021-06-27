import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-kemasukan-permohonan",
  templateUrl: "./kemasukan-permohonan.component.html",
  styleUrls: ["./kemasukan-permohonan.component.scss"],
})
export class KemasukanPermohonanComponent implements OnInit, OnDestroy {
  private chart1: any;
  private chart2: any;
  private chart3: any;

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      idpermohonan: "235453",
      nombor: "0127365564",
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      start: "2011/04/25",
      salary: "$320,800",
    },
    {
      idpermohonan: "326754",
      nombor: "01126352635",
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      start: "2011/07/25",
      salary: "$170,750",
    },
    {
      idpermohonan: "879976",
      nombor: "0197687656",
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      start: "2009/01/12",
      salary: "$86,000",
    },
    {
      idpermohonan: "345432",
      nombor: "0176546576",
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      start: "2012/03/29",
      salary: "$433,060",
    },
    {
      idpermohonan: "343423",
      nombor: "0127656876",
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      start: "2008/11/28",
      salary: "$162,700",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {
    this.getCharts();
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
      this.getChart3();
    });
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
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
    });
  }

  getChart1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("mohon1", am4charts.XYChart);

    chart.data = [
      {
        country: "USA",
        visits: 2025,
      },
      {
        country: "China",
        visits: 1882,
      },
      {
        country: "Japan",
        visits: 1809,
      },
      {
        country: "Germany",
        visits: 1322,
      },
      {
        country: "UK",
        visits: 1122,
      },
      {
        country: "France",
        visits: 1114,
      },
      {
        country: "India",
        visits: 984,
      },
      {
        country: "Spain",
        visits: 711,
      },
      {
        country: "Netherlands",
        visits: 665,
      },
      {
        country: "Russia",
        visits: 580,
      },
      {
        country: "South Korea",
        visits: 443,
      },
      {
        country: "Canada",
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
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("mohon2", am4charts.PieChart);

    // Set data
    let selected;
    let types = [
      {
        type: "Fossil Energy",
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
        type: "Green Energy",
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
      let qwert = event.target.dataItem.dataContext as any;
      if (qwert.id != undefined) {
        selected = qwert.id;
      } else {
        selected = undefined;
      }
      chart.data = generateChartData();
    });

    this.chart2 = chart;
  }

  getChart3() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("mohon3", am4charts.XYChart);

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    for (var i = 0; i < 10; i++) {
      createSeries("value" + i, "Series #" + i);
    }

    // Create series
    function createSeries(s, name) {
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value" + s;
      series.dataFields.dateX = "date";
      series.name = name;

      let segment = series.segments.template;
      segment.interactionsEnabled = true;

      let hoverState = segment.states.create("hover");
      hoverState.properties.strokeWidth = 3;

      let dimmed = segment.states.create("dimmed");
      dimmed.properties.stroke = am4core.color("#dadada");

      segment.events.on("over", function (event) {
        processOver(event.target.parent.parent.parent);
      });

      segment.events.on("out", function (event) {
        let asdf = event.target.parent.parent.parent as any;
        processOut();
      });

      let data = [];
      let value = Math.round(Math.random() * 100) + 100;
      for (var i = 1; i < 100; i++) {
        value += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 30 + i / 5
        );
        let dataItem = { date: new Date(2018, 0, i) };
        dataItem["value" + s] = value;
        data.push(dataItem);
      }

      series.data = data;
      return series;
    }

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.scrollable = true;

    // setTimeout(function() {
    //   chart.legend.markers.getIndex(0).opacity = 0.3;
    // }, 3000)
    chart.legend.markers.template.states.create(
      "dimmed"
    ).properties.opacity = 0.3;
    chart.legend.labels.template.states.create(
      "dimmed"
    ).properties.opacity = 0.3;

    chart.legend.itemContainers.template.events.on("over", function (event) {
      processOver(event.target.dataItem.dataContext);
    });

    chart.legend.itemContainers.template.events.on("out", function (event) {
      processOut();
    });

    function processOver(hoveredSeries) {
      hoveredSeries.toFront();

      hoveredSeries.segments.each(function (segment) {
        segment.setState("hover");
      });

      hoveredSeries.legendDataItem.marker.setState("default");
      hoveredSeries.legendDataItem.label.setState("default");

      chart.series.each(function (series) {
        let zxc = series as any;
        if (zxc != hoveredSeries) {
          zxc.segments.each(function (segment) {
            segment.setState("dimmed");
          });
          series.bulletsContainer.setState("dimmed");
          series.legendDataItem.marker.setState("dimmed");
          series.legendDataItem.label.setState("dimmed");
        }
      });
    }

    function processOut() {
      chart.series.each(function (series) {
        let mnb = series as any;
        mnb.segments.each(function (segment) {
          segment.setState("default");
        });
        series.bulletsContainer.setState("default");
        series.legendDataItem.marker.setState("default");
        series.legendDataItem.label.setState("default");
      });
    }

    document.getElementById("button").addEventListener("click", function () {
      processOver(chart.series.getIndex(3));
    });

    this.chart3 = chart;
  }
}
