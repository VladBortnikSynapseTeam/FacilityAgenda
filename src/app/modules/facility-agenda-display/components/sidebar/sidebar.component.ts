import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IrenderFacilityItem, IRenderMenuType } from '../../interfaces/model';
import { FacilityAgendaService } from '../../services/facility-agenda.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  options: any;
  menus: IRenderMenuType[] = [];
  renderMenuArray: IRenderMenuType[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  config: any;
  constructor(
    public facilityAgendaService: FacilityAgendaService
  ) { }

  ngOnInit(): void {
    this.config = this.mergeConfig(this.options);
    if(!this.facilityAgendaService.sidebarItems$.value.length){
      this.facilityAgendaService.getSidebarFacility()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res)=> {
        this.menus = this.getData(res.data);
      })
    }
  }

  public toggleSidebar(): void {
    this.facilityAgendaService.toogle()
  }

  public getData(items: IrenderFacilityItem[]) {
    const newItems: IRenderMenuType[] = [];
    items.forEach(item => {
        const findIndex = newItems.findIndex(i => i.name === item.attributes.facilityCategory);
        if (findIndex !== -1) {
            const newSub = {
                name: item.attributes.name,
                url: '#'
            }
            const parentItem = newItems[findIndex].submenu;
            parentItem.push(newSub);

            newItems[findIndex].submenu = parentItem;
        } else {
            newItems.push({
                name: item.attributes.facilityCategory,
                iconType: 'BUILDING',
                active: false,
                submenu: [
                    {
                        name: item.attributes.name,
                        url: '#'
                    }
                ]
            })
        }
    });

    return newItems;
}

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

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
