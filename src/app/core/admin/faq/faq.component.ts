import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit, OnDestroy {
  private chart1: any;

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

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("faq1", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "cara mendapatkan borang permohonan",
        litres: 501.9,
      },
      {
        country: "Perbezaan kategori/premis",
        litres: 301.9,
      },
      {
        country: "tempoh masa lulus",
        litres: 201.1,
      },
      {
        country: "kriteria yang diperlukan",
        litres: 165.8,
      },
    ];

    chart.innerRadius = 50;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    this.chart1 = chart;
  }
}
