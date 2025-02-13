import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'monday',
        loadComponent: () =>
          import('../monday/monday.page').then((m) => m.MondayPage),
      },
      {
        path: 'stepanalysis',
        loadComponent: () =>
          import('../step-analysis/step-analysis.page').then((m) => m.StepAnalysisPage),
      },
      {
        path: 'sleepquality',
        loadComponent: () =>
          import('../sleepquality/sleepquality.page').then((m) => m.SleepqualityPage),
      },
      {
        path: 'stresslevel',
        loadComponent: () =>
          import('../stresslevel/stresslevel.page').then((m) => m.StresslevelPage),
      },
      {
        path: 'spo',
        loadComponent: () =>
          import('../spo/spo.page').then((m) => m.SpoPage),
      },
      {
        path: 'location',
        loadComponent: () =>
          import('../location/location.page').then((m) => m.LocationPage),
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('../faq/faq.page').then((m) => m.FaqPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
