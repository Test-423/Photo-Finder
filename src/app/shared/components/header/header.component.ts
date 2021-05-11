import { Component, OnInit } from '@angular/core';
import { ROUTING } from '../../mocks/routing.data';
import { Routing } from '../../interfaces/routing.model';
@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    readonly routingUrls: Routing[] = ROUTING;

    activePage: number = 0;
    constructor() { }

    ngOnInit() {
    }

}
