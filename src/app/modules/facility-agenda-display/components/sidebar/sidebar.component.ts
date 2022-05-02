import { Component, Input, OnInit } from '@angular/core';
import { FacilityAgendaService } from '../../services/facility-agenda.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(
    public facilityAgendaService: FacilityAgendaService
  ) { }

  ngOnInit(): void {
    this.config = this.mergeConfig(this.options);
  }

  public toggleSidebar(): void {
    this.facilityAgendaService.toogle();

  }

  options: any;
  menus: any[] = [
    { 
      name: 'Test 1',
      iconType: 'BUILDING',
      active: false,
      submenu: [
        { name: 'Test 11', url: '#' },
        { name: 'Test 12', url: '#' },
      ]
    }
  ];
  config: any;
  

  mergeConfig(options: any) {
    const config = {
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }

    this.menus[index].active = !this.menus[index].active;
  }
}
