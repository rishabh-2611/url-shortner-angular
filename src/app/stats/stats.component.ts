import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from "../common.service";
import { environment } from "../../environments/environment";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  inputShortUrl : String
  shortUrl: String
  longUrl : String
  visitCount: Number
  visit:[{
    timestamp: any
  }]
  webUrl = environment.webUrl;

  getDateTime(value) {
    var day = new Date(value);
    return (
      ("0" + day.getDate()).slice(-2) +
      "-" +
      ("0" + (Number(day.getMonth())+1)).slice(-2) +
      "-" +
      day.getFullYear() +
      " " +
      ("0" + day.getHours()).slice(-2) +
      ":" +
      ("0" + day.getMinutes()).slice(-2)
    );
  }

  constructor(private commonService: CommonService, private route: ActivatedRoute) {
    this.route.params.subscribe( params =>{
      this.inputShortUrl = params.shortUrl;
      if (this.inputShortUrl) {
        this.commonService.getStats(this.inputShortUrl).subscribe(res => {
          if (res.isSuccess) {
            this.shortUrl = this.webUrl + this.inputShortUrl;
            this.longUrl = res.longUrl;
            this.visitCount = res.visit.length;
            this.visit = res.visit;


            this.lineChartData = [
              {
                data: this.visit.map(a => a.timestamp)
              }
            ];
        
            this.lineChartLabels = this.visit.map(
              a => this.getDateTime(Number(a.timestamp))
            );

            console.log(this.visit)
          } else {
            // alert();
          }
        });
      }
      console.log(this.shortUrl);
    });
  }

  ngOnInit() {
  }

  public lineChartData: ChartDataSets[] = [{ data: [], label: "" }];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        // {
        //   id: "y-axis-0",
        //   position: "left"
        // }
      ]
    },
    annotation: {}
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: "#e9f3fc",
      borderColor: "#84c7f1",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";

  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {}

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {}
}
