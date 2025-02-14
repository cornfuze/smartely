import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.page.html',
  styleUrls: ['./lifestyle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LifestylePage implements OnInit {

   constructor(private router: Router) {}
  
    navigateToJamu() {
      this.router.navigate(['/jamu']);
    }
    navigateToRecomendation() {
      this.router.navigate(['/recomendation']);
    }

  ngOnInit() {
  }

}
