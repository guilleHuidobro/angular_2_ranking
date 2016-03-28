import {
  Component
}
from 'angular2/core';
import {
  RouteConfig, ROUTER_DIRECTIVES, Location, Router
}
from 'angular2/router';

import {
  CardComponent
}
from './components/card.component';
import {
  RankingComponent
}
from './components/ranking.component';
import {
  AccountLoginComponent
}
from './components/account-login.component';
import {ApiService} from '../app/components/api.service';

@
Component({
  selector: 'my-app',
  template: `
  <div class="ui inverted segment">
  <div class="ui inverted secondary pointing menu">
    <a  [routerLink]="['Card']" [class.active]="getLinkStyle('/card')" class="item">
      Home
    </a>
    <a  [routerLink]="['Ranking']" [class.active]="getLinkStyle('/ranking')" class="item">
      Ranking
    </a>
    <a [routerLink]="['Login']" [class.active]="getLinkStyle('/login')" class="item">
      Logins
    </a>
    <a (click)="logOut()" class="item">
      Log out
    </a>
  </div>
</div>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ApiService],
})@ RouteConfig([

  {
    path: '/card',
    name: 'Card',
    component: CardComponent,
    useAsDefault: true
  }, {
    path: '/ranking',
    name: 'Ranking',
    component: RankingComponent
  }, {
    path: '/login',
    name: 'Login',
    component: AccountLoginComponent
  }
])
export class AppComponent {

  router: Router;
  location: Location;

  constructor(router: Router, location: Location,private _apiService: ApiService) {
    this.router = router;
    this.location = location;
  }

  getLinkStyle(path) {

    if (path === this.location.path()) {
      return true;
    }
    else if (path.length > 0) {
      return this.location.path().indexOf(path) > -1;
    }
  }

    /**
     * Logout click callback.
     */
    onLogout() {
        this._apiService.logoutAccount(success => {
            if (success) {
                this.router.navigate(['Card']);
            }
        });
    }
}
