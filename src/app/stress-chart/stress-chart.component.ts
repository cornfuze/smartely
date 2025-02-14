import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import {IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-stress-chart',
  templateUrl: './stress-chart.component.html',
  styleUrls: ['./stress-chart.component.scss'],
  imports: [IonContent],
})
export class StressChartComponent implements AfterViewInit {
  public chart: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('stressChart', {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
        datasets: [
          {
            label: 'Stress Level (%)',
            data: [30, 45, 60, 25, 50, 35, 70], 
            backgroundColor: 'rgba(250, 233, 3, 0.6)', 
            borderColor: 'rgb(255, 231, 11)',
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
            max: 100,
            title: {
              display: false,
              text: 'Stress Level (%)',
              font: { size: 14 },
            },
            ticks: {
              font: { size: 10 },
              stepSize: 20, 
            },
            grid: {
              display: false,
            },
          },
          x: {
            title: {
              display: false,
              text: 'Day',
              font: { size: 14 },
            },
            ticks: {
              font: { size: 10 },
            },
            grid: {
              display: false, // Hilangkan garis grid
            },
          },
        },
      },
    });
  }
}