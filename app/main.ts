import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {API_PROVIDERS} from './components/api';

import {AppComponent} from './app';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, API_PROVIDERS]);
