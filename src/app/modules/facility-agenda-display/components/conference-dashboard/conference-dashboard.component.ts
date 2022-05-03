import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { interval, of, Subject } from 'rxjs';
import { IFacilityItemList } from '../../interfaces/model';
import { FacilityAgendaService } from '../../services/facility-agenda.service';


@Component({
  selector: 'app-conference-dashboard',
  templateUrl: './conference-dashboard.component.html',
  styleUrls: ['./conference-dashboard.component.scss']
})
export class ConferenceDashboardComponent implements OnInit {
  public today = of(new Date());
  thisDate = new Date();
  public loader = false;
  private destroyComponent = new Subject();
  isLoaderActive = true;
  facilityItems!: IFacilityItemList;
  constructor(
    private facilityAgendaService: FacilityAgendaService,
  ) {}

  ngOnInit() {
    this.today = interval(1000).pipe(takeUntil(this.destroyComponent), map(() => new Date()));
    this.getFacilityList()
  }

  public getFacilityList(){
    this.isLoaderActive = true;
    let isoDate = this.thisDate.toISOString().toString().slice(0,10)
    this.facilityAgendaService.getFacilityItems(isoDate)
    .pipe(takeUntil(this.destroyComponent))
    .subscribe(facilityItemsResponse => {
      this.isLoaderActive = false;
      this.facilityItems = facilityItemsResponse;
    })
  }

  

  public refreshConferenceData(): void {
    console.log('refresh data');
    this.loader = true;
    let isoDate = this.thisDate.toISOString().toString().slice(0,10)
    this.facilityAgendaService.getFacilityItems(isoDate)
    .pipe(takeUntil(this.destroyComponent))
    .subscribe(facilityItemsResponse => {
      this.facilityItems = facilityItemsResponse;
    })
    
    setTimeout(()=>{this.loader = false},800)
  }

  public openSidebar(): void {
    this.facilityAgendaService.toogle(true);
  }

  ngOnDestroy() {
    this.destroyComponent.next(true);
    this.destroyComponent.complete();
  }
}
