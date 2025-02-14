import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BatteryChartComponent } from '../battery-chart/battery-chart.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [BatteryChartComponent],
})
export class Tab3Page {
  constructor(private location: Location) {}

goBack() {
  this.location.back();
}
}
