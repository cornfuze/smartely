import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'stepanalysis',
    loadComponent: () => import('./step-analysis/step-analysis.page').then( m => m.StepAnalysisPage)
  },
  {
    path: 'monday',
    loadComponent: () => import('./monday/monday.page').then( m => m.MondayPage)
  },
  {
    path: 'sleepquality',
    loadComponent: () => import('./sleepquality/sleepquality.page').then( m => m.SleepqualityPage)
  },
  {
    path: 'stresslevel',
    loadComponent: () => import('./stresslevel/stresslevel.page').then( m => m.StresslevelPage)
  },
  {
    path: 'spo',
    loadComponent: () => import('./spo/spo.page').then( m => m.SpoPage)
  },
  {
    path: 'location',
    loadComponent: () => import('./location/location.page').then( m => m.LocationPage)
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.page').then( m => m.FaqPage)
  },


];
