import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import { Init } from './Init';
import {environment} from '../environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

Init();

platformBrowserDynamic().bootstrapModule(AppModule);
