import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private facilityAgendaService: FacilityAgendaService) { }
  sidebarData = [];
  ngOnInit(): void {
    this.isLoaderActive = true;
    this.facilityAgendaService.getUserToken()
    .pipe(takeUntil(this.destroy$))
    .subscribe(facilityData => {
      environment.token = facilityData.meta.token;
      enviromentProd.token = facilityData.meta.token;
      this.isLoaderActive = false;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
