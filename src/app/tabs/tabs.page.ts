import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, notificationsOutline, documentTextOutline, timeOutline, home , notifications, documentText, time} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  selectedTab: string = 'tab2';

  constructor() {
    addIcons({ homeOutline, notificationsOutline, documentTextOutline, timeOutline, home, notifications, documentText, time });
  }
  tabChanged(event: any) {
    this.selectedTab = event.tab;
  }
}
