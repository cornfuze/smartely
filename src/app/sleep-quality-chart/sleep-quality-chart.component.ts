import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sleep-quality-chart',
  templateUrl: './sleep-quality-chart.component.html',
  styleUrls: ['./sleep-quality-chart.component.scss'],
  imports: [IonContent],
})
export class SleepQualityChartComponent implements AfterViewInit {
  public chart: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('sleepChart', {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Label hari
        datasets: [
          {
            label: 'Sleep Quality (%)',
            data: [75, 80, 65, 90, 70, 85, 95], // Data persentase tidur
            backgroundColor: 'rgba(204, 42, 190, 0.6)', // Warna bar
            borderColor: 'rgb(235, 54, 226)', // Warna border bar
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
            max: 100, // Maksimal persentase 100%
            title: {
              display: false,
              font: { size: 2},
            },
            ticks: {
              font: { size: 10 },
              stepSize: 20, // Interval 20%
            },
            grid: {
              display: false, // Hilangkan garis grid
            },
          },
          x: {
            title: {
              display: false,
              font: { size: 2 },
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