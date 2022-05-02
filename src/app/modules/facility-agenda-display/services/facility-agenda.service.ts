import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IUserLoginResponse{
  meta: {
    token:string
  }
}

export interface IFacilityItemList{
  data: [IFacilityItem]
}

export interface IFacilityItem{
  attributes: {
    startTime: string;
    endTime: string;
    assetDescription: string
  },
  id: number,
}

@Injectable({
  providedIn: 'root'
})
export class FacilityAgendaService {
  public sidebarShow$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  public toogle(value?: boolean): void {
    (value !== undefined) ? this.sidebarShow$.next(value) : this.sidebarShow$.next(!this.sidebarShow$.value);
  }

  public getUserToken (){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let userLoginInfo = {
      Username: "optimo",
      Password: "12345"
    }
    let JSONUserInfo = JSON.stringify(userLoginInfo);
    return this.http.post<IUserLoginResponse>('http://139.99.208.167:7777/V4/RestAPI/OPTIMO/api/V4.1/users/login', JSONUserInfo, httpOptions)
  }
  public getFacilityItems(isoDate: string){
    console.log(isoDate);
    const HTTP_HEADERS = {
      headers: new HttpHeaders({token: environment.token})
    }
    const params = {
      ['filters.assetID']:20,
      include: "privateEventAgenda.PrivateEventInstance",
      fromDate: `${isoDate}T00:00:00`,
      toDate: `${isoDate}T23:59:59`,
      ['page.number']: 1,
      ['page.size']: 100 
    }
    //To check Items render 
    /*return this.http.get<IFacilityItemList>('http://139.99.208.167:7777/V4/RestAPI/OPTIMO/api/v4.1/assets/diary-agenda',HTTP_OPTIONS)*/
    return this.http.get<IFacilityItemList>('http://139.99.208.167:7777/V4/RestAPI/OPTIMO/api/v4.1/assets/diary-agenda',{headers: HTTP_HEADERS.headers, params: params})
  }

  public getSidebarFacility(){
    const HTTP_HEADERS = {
      headers: new HttpHeaders({token: environment.token})
    }
    return this.http.get('http://139.99.208.167:7777/V4/RestAPI/OPTIMO/api/v4.1/assets?fields=Name,Venue.Id,Venue.Name,Facility.FacilityCategoryId,Facility.FacilityCategory&include=Venue&filters.assetClassId=1&filters.activeStatus=1', HTTP_HEADERS)
  }
}
