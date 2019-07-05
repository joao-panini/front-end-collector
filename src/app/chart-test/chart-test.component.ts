import { Component, OnInit, } from '@angular/core';
import { ChartTestService} from "./chart-test.service";
import { Chart } from "chart.js";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
  
})
export class ChartTestComponent implements OnInit {
  

  constructor(private chartData: ChartTestService){ }


  chartName = document.getElementById('canvas');
  wvi:Object;
  ameacas = [];
  chart: Chart;

  
  ngOnInit() {
    
    this.chartData.getWVI().subscribe(response => {
      this.wvi = response;
      
      let ameaca = [];
      for(let i=0; i <= 12;i++){
        this.ameacas[i] = response[i].numAmeacas;
      }
      console.log(this.ameacas);
    });
    console.log(this.ameacas)
    

    this.chart = new Chart('canvas', {
      type: 'line',
          data: {
            labels: ['a','b'],
            datasets: [
              { 
                data: [+this.ameacas[1]],
                borderColor: "#3cba9f",
                fill: false
              },
              { 
                data: [this.ameacas[2]],
                borderColor: "#ffcc00",
                fill: false
              },
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

        
        console.log(this.chart.data);


  };
}
