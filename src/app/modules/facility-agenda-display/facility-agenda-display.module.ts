import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityAgendaDisplayRoutingModule } from './facility-agenda-display-routing.module';
import { FacilityAgendaDisplayComponent } from './containers/facility-agenda-display.component';
import { ConferenceDashboardComponent } from './components/conference-dashboard/conference-dashboard.component';
import { ConferenceListComponent } from './components/conference-list/conference-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConferenceItemComponent } from './components/conference-item/conference-item.component';
import { FacilityAgendaService } from './services/facility-agenda.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    FacilityAgendaDisplayComponent,
    ConferenceDashboardComponent,
    ConferenceListComponent,
    SidebarComponent,
    ConferenceItemComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FacilityAgendaDisplayRoutingModule,
    HttpClientModule
  ],
  providers: [FacilityAgendaService]
})
export class FacilityAgendaDisplayModule { }
