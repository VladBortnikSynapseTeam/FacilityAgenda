import { Component, Input, OnInit } from '@angular/core';
import { IFacilityItemList } from '../../interfaces/model';


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
