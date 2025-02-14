import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-step-chart',
  templateUrl: './step-chart.component.html',
  styleUrls: ['./step-chart.component.scss'],
  imports: [IonContent],
})
export class StepChartComponent implements AfterViewInit {
  public chart: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('stepChart', {
      type: 'bar', 
      data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'], // Label jam
        datasets: [
          {
            label: 'Steps',
            data: [50, 110, 290, 80, 50, 150, 195, 78, 100], 
            backgroundColor: 'rgba(54, 149, 212, 0.6)', 
            borderColor: 'rgb(47, 167, 247)', 
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              font: {
                size: 2,
              },
            },
            ticks: {
              font: {
                size: 10,
              },
            },
            grid: {
              display: false,
            },
          },
          x: {
            title: {
              display: true,
              font: {
                size: 2,
              },
            },
            ticks: {
              font: {
                size: 10,
              },
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}