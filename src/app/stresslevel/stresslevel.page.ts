import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stresslevel',
  templateUrl: './stresslevel.page.html',
  styleUrls: ['./stresslevel.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class StresslevelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
