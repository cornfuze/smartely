import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: []
})
export class Tab2Page {

  constructor(private router: Router) {}

  navigateToSleepQuality() {
    this.router.navigate(['/sleepquality']);
  }

  navigateToStepAnalysis() {
    this.router.navigate(['/stepanalysis']);
  }
}
