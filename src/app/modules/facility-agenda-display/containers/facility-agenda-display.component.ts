import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environment as enviromentProd } from 'src/environments/environment.prod';
import { FacilityAgendaService } from '../services/facility-agenda.service';

@Component({
  selector: 'app-facility-agenda-display',
  templateUrl: './facility-agenda-display.component.html',
  styleUrls: ['./facility-agenda-display.component.scss']
})
export class FacilityAgendaDisplayComponent implements OnInit {
  isLoaderActive = false;
  constructor(private facilityAgendaService: FacilityAgendaService) { }
  sidebarData = [];
  ngOnInit(): void {
    this.isLoaderActive = true;
    this.facilityAgendaService.getUserToken()
    .subscribe(facilityData => {
      environment.token = facilityData.meta.token;
      enviromentProd.token = facilityData.meta.token;
      this.isLoaderActive = false;
    })
  }

}
