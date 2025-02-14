import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-battery-chart',
  templateUrl: './battery-chart.component.html',
  styleUrls: ['./battery-chart.component.scss'],
  imports: [IonContent],
})
export class BatteryChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('batteryChart', {
      type: 'line',
      data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'], 
        datasets: [
          {
            label: 'Battery Usage (%)', 
            data: [80, 70, 85, 70, 90, 50, 40, 20, 55], 
            borderColor: 'rgb(27, 176, 82)',
            borderWidth: 2,
            fill: false,
            tension: 0.3
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              font: {
                size: 10,
              },
            },
            title: {
              display: true,
              font: {
                size: 2,
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 10,
              },
            },
            title: {
              display: true,
              font: {
                size: 2,
              },
            },
          },
        },
      },
    });
  }
  
}