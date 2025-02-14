import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StressChartComponent } from '../stress-chart/stress-chart.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-stresslevel',
  templateUrl: './stresslevel.page.html',
  styleUrls: ['./stresslevel.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, StressChartComponent]
})
export class StresslevelPage implements OnInit {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
