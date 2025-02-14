import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { Location } from '@angular/common';
import { SleepQualityChartComponent } from '../sleep-quality-chart/sleep-quality-chart.component';



@Component({
  selector: 'app-spo',
  templateUrl: './spo.page.html',
  styleUrls: ['./spo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,SleepQualityChartComponent]
})
export class SpoPage implements OnInit {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
