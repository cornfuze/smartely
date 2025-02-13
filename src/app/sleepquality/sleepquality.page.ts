import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sleepquality',
  templateUrl: './sleepquality.page.html',
  styleUrls: ['./sleepquality.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SleepqualityPage implements OnInit {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
