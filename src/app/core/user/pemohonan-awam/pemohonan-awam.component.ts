import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import swal from "sweetalert2";
import { FormGroup } from "@angular/forms";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-pemohonan-awam",
  templateUrl: "./pemohonan-awam.component.html",
  styleUrls: ["./pemohonan-awam.component.scss"],
})
export class PemohonanAwamComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;

  private chart1: any;
  private chart2: any;

  constructor(private router: Router, private zone: NgZone) {}

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
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("uawam1", am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;

    // Add data
    chart.data = [
      {
        country: "USA",
        visits: 4025,
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
      {
        country: "Brazil",
        visits: 395,
      },
      {
        country: "Italy",
        visits: 386,
      },
      {
        country: "Taiwan",
        visits: 338,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";

    let columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    this.chart1 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    /**
     * Define data for each year
     */
    let chartData = {
      "1995": [
        { sector: "Agriculture", size: 6.6 },
        { sector: "Mining and Quarrying", size: 0.6 },
        { sector: "Manufacturing", size: 23.2 },
        { sector: "Electricity and Water", size: 2.2 },
        { sector: "Construction", size: 4.5 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
        { sector: "Transport and Communication", size: 9.3 },
        { sector: "Finance, real estate and business services", size: 22.5 },
      ],
      "1996": [
        { sector: "Agriculture", size: 6.4 },
        { sector: "Mining and Quarrying", size: 0.5 },
        { sector: "Manufacturing", size: 22.4 },
        { sector: "Electricity and Water", size: 2 },
        { sector: "Construction", size: 4.2 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 14.8 },
        { sector: "Transport and Communication", size: 9.7 },
        { sector: "Finance, real estate and business services", size: 22 },
      ],
      "1997": [
        { sector: "Agriculture", size: 6.1 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 20.9 },
        { sector: "Electricity and Water", size: 1.8 },
        { sector: "Construction", size: 4.2 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 13.7 },
        { sector: "Transport and Communication", size: 9.4 },
        { sector: "Finance, real estate and business services", size: 22.1 },
      ],
      "1998": [
        { sector: "Agriculture", size: 6.2 },
        { sector: "Mining and Quarrying", size: 0.3 },
        { sector: "Manufacturing", size: 21.4 },
        { sector: "Electricity and Water", size: 1.9 },
        { sector: "Construction", size: 4.2 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 14.5 },
        { sector: "Transport and Communication", size: 10.6 },
        { sector: "Finance, real estate and business services", size: 23 },
      ],
      "1999": [
        { sector: "Agriculture", size: 5.7 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 20 },
        { sector: "Electricity and Water", size: 1.8 },
        { sector: "Construction", size: 4.4 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 15.2 },
        { sector: "Transport and Communication", size: 10.5 },
        { sector: "Finance, real estate and business services", size: 24.7 },
      ],
      "2000": [
        { sector: "Agriculture", size: 5.1 },
        { sector: "Mining and Quarrying", size: 0.3 },
        { sector: "Manufacturing", size: 20.4 },
        { sector: "Electricity and Water", size: 1.7 },
        { sector: "Construction", size: 4 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.3 },
        { sector: "Transport and Communication", size: 10.7 },
        { sector: "Finance, real estate and business services", size: 24.6 },
      ],
      "2001": [
        { sector: "Agriculture", size: 5.5 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 20.3 },
        { sector: "Electricity and Water", size: 1.6 },
        { sector: "Construction", size: 3.1 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.3 },
        { sector: "Transport and Communication", size: 10.7 },
        { sector: "Finance, real estate and business services", size: 25.8 },
      ],
      "2002": [
        { sector: "Agriculture", size: 5.7 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 20.5 },
        { sector: "Electricity and Water", size: 1.6 },
        { sector: "Construction", size: 3.6 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.1 },
        { sector: "Transport and Communication", size: 10.7 },
        { sector: "Finance, real estate and business services", size: 26 },
      ],
      "2003": [
        { sector: "Agriculture", size: 4.9 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 19.4 },
        { sector: "Electricity and Water", size: 1.5 },
        { sector: "Construction", size: 3.3 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.2 },
        { sector: "Transport and Communication", size: 11 },
        { sector: "Finance, real estate and business services", size: 27.5 },
      ],
      "2004": [
        { sector: "Agriculture", size: 4.7 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 18.4 },
        { sector: "Electricity and Water", size: 1.4 },
        { sector: "Construction", size: 3.3 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.9 },
        { sector: "Transport and Communication", size: 10.6 },
        { sector: "Finance, real estate and business services", size: 28.1 },
      ],
      "2005": [
        { sector: "Agriculture", size: 4.3 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 18.1 },
        { sector: "Electricity and Water", size: 1.4 },
        { sector: "Construction", size: 3.9 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 15.7 },
        { sector: "Transport and Communication", size: 10.6 },
        { sector: "Finance, real estate and business services", size: 29.1 },
      ],
      "2006": [
        { sector: "Agriculture", size: 4 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 16.5 },
        { sector: "Electricity and Water", size: 1.3 },
        { sector: "Construction", size: 3.7 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 14.2 },
        { sector: "Transport and Communication", size: 12.1 },
        { sector: "Finance, real estate and business services", size: 29.1 },
      ],
      "2007": [
        { sector: "Agriculture", size: 4.7 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 16.2 },
        { sector: "Electricity and Water", size: 1.2 },
        { sector: "Construction", size: 4.1 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 15.6 },
        { sector: "Transport and Communication", size: 11.2 },
        { sector: "Finance, real estate and business services", size: 30.4 },
      ],
      "2008": [
        { sector: "Agriculture", size: 4.9 },
        { sector: "Mining and Quarrying", size: 0.3 },
        { sector: "Manufacturing", size: 17.2 },
        { sector: "Electricity and Water", size: 1.4 },
        { sector: "Construction", size: 5.1 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 15.4 },
        { sector: "Transport and Communication", size: 11.1 },
        { sector: "Finance, real estate and business services", size: 28.4 },
      ],
      "2009": [
        { sector: "Agriculture", size: 4.7 },
        { sector: "Mining and Quarrying", size: 0.3 },
        { sector: "Manufacturing", size: 16.4 },
        { sector: "Electricity and Water", size: 1.9 },
        { sector: "Construction", size: 4.9 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 15.5 },
        { sector: "Transport and Communication", size: 10.9 },
        { sector: "Finance, real estate and business services", size: 27.9 },
      ],
      "2010": [
        { sector: "Agriculture", size: 4.2 },
        { sector: "Mining and Quarrying", size: 0.3 },
        { sector: "Manufacturing", size: 16.2 },
        { sector: "Electricity and Water", size: 2.2 },
        { sector: "Construction", size: 4.3 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 15.7 },
        { sector: "Transport and Communication", size: 10.2 },
        { sector: "Finance, real estate and business services", size: 28.8 },
      ],
      "2011": [
        { sector: "Agriculture", size: 4.1 },
        { sector: "Mining and Quarrying", size: 0.3 },
        { sector: "Manufacturing", size: 14.9 },
        { sector: "Electricity and Water", size: 2.3 },
        { sector: "Construction", size: 5 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 17.3 },
        { sector: "Transport and Communication", size: 10.2 },
        { sector: "Finance, real estate and business services", size: 27.2 },
      ],
      "2012": [
        { sector: "Agriculture", size: 3.8 },
        { sector: "Mining and Quarrying", size: 0.3 },
        { sector: "Manufacturing", size: 14.9 },
        { sector: "Electricity and Water", size: 2.6 },
        { sector: "Construction", size: 5.1 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 15.8 },
        { sector: "Transport and Communication", size: 10.7 },
        { sector: "Finance, real estate and business services", size: 28 },
      ],
      "2013": [
        { sector: "Agriculture", size: 3.7 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 14.9 },
        { sector: "Electricity and Water", size: 2.7 },
        { sector: "Construction", size: 5.7 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.5 },
        { sector: "Transport and Communication", size: 10.5 },
        { sector: "Finance, real estate and business services", size: 26.6 },
      ],
      "2014": [
        { sector: "Agriculture", size: 3.9 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 14.5 },
        { sector: "Electricity and Water", size: 2.7 },
        { sector: "Construction", size: 5.6 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.6 },
        { sector: "Transport and Communication", size: 10.5 },
        { sector: "Finance, real estate and business services", size: 26.5 },
      ],
    };

    // Create chart instance
    let chart = am4core.create("uawam2", am4charts.PieChart);

    // Add data
    chart.data = [
      { sector: "Agriculture", size: 6.6 },
      { sector: "Mining and Quarrying", size: 0.6 },
      { sector: "Manufacturing", size: 23.2 },
      { sector: "Electricity and Water", size: 2.2 },
      { sector: "Construction", size: 4.5 },
      { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
      { sector: "Transport and Communication", size: 9.3 },
      { sector: "Finance, real estate and business services", size: 22.5 },
    ];

    // Add label
    chart.innerRadius = 100;
    let label = chart.seriesContainer.createChild(am4core.Label);
    label.text = "1995";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 50;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "size";
    pieSeries.dataFields.category = "sector";

    // Animate chart data
    let currentYear = 1995;
    function getCurrentData() {
      let qaw = label as any;
      qaw.text = currentYear;
      let data = chartData[currentYear];
      currentYear++;
      if (currentYear > 2014) currentYear = 1995;
      return data;
    }

    function loop() {
      //chart.allLabels[0].text = currentYear;
      let data = getCurrentData();
      for (var i = 0; i < data.length; i++) {
        chart.data[i].size = data[i].size;
      }
      chart.invalidateRawData();
      chart.setTimeout(loop, 4000);
    }

    loop();
    this.chart2 = chart;
  }

  navigatePage(path: String) {
    if (path == "back") {
      return this.router.navigate(["/user/pemohonan/pemohonan"]);
    }
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
          this.registerForm.reset();
        }
      });
  }
}
