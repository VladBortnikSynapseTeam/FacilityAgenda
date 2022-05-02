import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferenceDashboardComponent } from './components/conference-dashboard/conference-dashboard.component';
import { FacilityAgendaDisplayComponent } from './containers/facility-agenda-display.component';

const routes: Routes = [
  {
    path: '',
    component: FacilityAgendaDisplayComponent,
    children: [
      {
        path: '',
        component: ConferenceDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityAgendaDisplayRoutingModule { }
