import { Component, OnInit} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector:'card-view',
    templateUrl:'./views/card.html'
})
export class CardComponent implements OnInit{
    
    ngOnInit(){
            jQuery('.card').transition('tada');
    }

}

