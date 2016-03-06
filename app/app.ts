import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CardComponent} from './components/card.component';
import {RankingComponent} from './components/ranking.component';


@Component({
  selector: 'my-app',
  template: `
  <div class="ui inverted segment">
  <div class="ui inverted secondary pointing menu">
    <a  [routerLink]="['Card']" class="active item">
      Home
    </a>
    <a  [routerLink]="['Ranking']" class="item">
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
export class AppComponent { }
