import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PieChartData } from './../../shared/PieChartData';
import {Chart } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  data: PieChartData[];  
  url = 'http://localhost:51888/getExpPerCat';  
  Category = [];  
  Amount = [];  
  chart = [];  
  constructor(private httpClient: HttpClient) { }  
  
   ngOnInit() {  
    this.httpClient.get(this.url).subscribe((result: PieChartData[]) => {  
      result.forEach(x => {  
        this.Category.push(x.Category);  
        this.Amount.push(x.Amount);  
      });  
     this  
      this.chart = new Chart('canvas', {  
        type: 'pie',  
        data: {  
          labels: this.Category,  
          datasets: [  
            {  
              data: this.Amount,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: true  
          },  
          scales: {  
            xAxes: [{  
              display: false  
            }],  
            yAxes: [{  
              display: false  
            }],  
          }  
        }  
      });  
    });  
  }
}
