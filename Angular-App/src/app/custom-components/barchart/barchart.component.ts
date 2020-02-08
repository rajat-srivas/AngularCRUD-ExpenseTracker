import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Chart} from 'chart.js';
import { BarChartData } from './../../shared/BarChartData';



@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  data: BarChartData[];  
  url = 'http://localhost:51888/getExpPerMonth';  
  Months = [];  
  Amount = [];  
  barchart = [];  
  constructor(private http: HttpClient) { }  
  
  ngOnInit() {  
    this.http.get(this.url).subscribe((result: BarChartData[]) => {  
      result.forEach(x => {  
        this.Months.push(x.Month);  
        this.Amount.push(x.Amount);  
      });  
      this  
      this.barchart = new Chart('canvas1', {  
        type: 'bar',  
        data: {  
          labels: this.Months,  
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
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }
}
