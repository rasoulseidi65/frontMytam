import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-content-dahboard',
  templateUrl: './content-dahboard.component.html',
  styleUrls: ['./content-dahboard.component.scss']
})
export class ContentDahboardComponent implements OnInit {
  flagNews:boolean=true;
  flagArticle:boolean=true;
  flagMember:boolean=true;
  public pieChartLabels = [' مقدار فروش', ' تعداد مشتری', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  constructor() { }
  ngOnInit() {
  }
  closeCard(data:any){
    if(data=='news')
    {
    this.flagNews=!this.flagNews;
    }
    if(data=='article')
    {
      this.flagArticle=!this.flagArticle;

    }
    if(data=='member')
    {
      this.flagMember=!this.flagMember;

    }
    console.log(this.flagArticle+"+"+this.flagMember+"+"+this.flagNews)
  }
}
