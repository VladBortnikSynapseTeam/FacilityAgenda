import { Component, Input, OnInit } from '@angular/core';
import { IFacilityItem } from '../../services/facility-agenda.service';

@Component({
  selector: 'app-conference-item',
  templateUrl: './conference-item.component.html',
  styleUrls: ['./conference-item.component.scss']
})
export class ConferenceItemComponent implements OnInit {
  @Input() item!: IFacilityItem;
  itemDate!: Date;
  timeNow = new Date();
  constructor() {}

  ngOnInit(): void {
    console.log(this.item)
    this.itemDate = new Date(this.item.attributes.startTime);
  }

}
