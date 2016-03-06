import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location , Router} from 'angular2/router';

import {CardComponent} from './components/card.component';
import {RankingComponent} from './components/ranking.component';


@Component({
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
  </div>
</div>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  {path: '/card',   name: 'Card', component: CardComponent, useAsDefault: true},
  {path: '/ranking', name: 'Ranking', component: RankingComponent}
])
export class AppComponent {
  
      router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {

        if(path === this.location.path()){
            return true;
        }
        else if(path.length > 0){
            return this.location.path().indexOf(path) > -1;
        }
    }
}
