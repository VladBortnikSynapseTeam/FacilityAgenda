import { Component, Input, OnInit } from '@angular/core';
import { FacilityAgendaService } from '../../services/facility-agenda.service';
import { IFacilityItemList,IFacilityItem } from '../../services/facility-agenda.service';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss']
})
export class ConferenceListComponent implements OnInit {
  
  @Input() facilityItems!: IFacilityItemList;

  constructor() { }

  ngOnInit(): void {
    
  }

}
