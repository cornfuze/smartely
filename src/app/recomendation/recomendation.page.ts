import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.page.html',
  styleUrls: ['./recomendation.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RecomendationPage implements OnInit {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
