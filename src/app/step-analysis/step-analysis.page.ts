import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonIcon, IonCardContent, IonGrid, IonRow } from '@ionic/angular/standalone';

interface ChartData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-step-analysis',
  templateUrl: './step-analysis.page.html',
  styleUrls: ['./step-analysis.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCardContent, IonIcon, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StepAnalysisPage implements OnInit {
  chartData: ChartData[] = [
    { name: '1', value: 100 },
    { name: '2', value: 150 },
    { name: '3', value: 250 },
    { name: '4', value: 200 },
    { name: '5', value: 100 },
    { name: '6', value: 90 },
    { name: '7', value: 100 },
    { name: '8', value: 80 },
    { name: '9', value: 120 },
    { name: '10', value: 150 },
    { name: '11', value: 180 },
    { name: '12', value: 100 },
    { name: '13', value: 90 },
    { name: '14', value: 100 },
    { name: '15', value: 80 }
  ];

  constructor() { }

  ngOnInit() {
  }
}
