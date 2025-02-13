import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Location } from '@angular/common';


@Component({
  selector: 'app-step-analysis',
  templateUrl: './step-analysis.page.html',
  styleUrls: ['./step-analysis.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule]
})
export class StepAnalysisPage implements OnInit {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }


  ngOnInit() {
  }

}
