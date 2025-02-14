import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-monday',
  templateUrl: './monday.page.html',
  styleUrls: ['./monday.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class MondayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
