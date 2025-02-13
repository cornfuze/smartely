import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'step-analysis',
    loadComponent: () => import('./step-analysis/step-analysis.page').then( m => m.StepAnalysisPage)
  },  {
    path: 'monday',
    loadComponent: () => import('./monday/monday.page').then( m => m.MondayPage)
  },


];
