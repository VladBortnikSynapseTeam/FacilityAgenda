import { environment } from '../environments/environment';

export function Init() {
  if (window['ApiUrl']) {
    environment.appUrl = window['ApiUrl'];
  }
  if (window['WebAPIBaseUrl']) {
    environment.webApiUrl = window['WebAPIBaseUrl'];
  }
  if (window['LoginAppUrl']) {
    environment.loginAppUrl = window['LoginAppUrl'];
  }
  if (window['Token']) {
    environment.token = window['Token'];
  }
}
