import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Location } from '@angular/common';


@Component({
  selector: 'app-jamu',
  templateUrl: './jamu.page.html',
  styleUrls: ['./jamu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JamuPage implements OnInit {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }


  ngOnInit() {
  }

}
