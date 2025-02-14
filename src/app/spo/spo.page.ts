import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-spo',
  templateUrl: './spo.page.html',
  styleUrls: ['./spo.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule]
})
export class SpoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
