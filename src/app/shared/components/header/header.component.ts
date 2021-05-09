import { Component, OnInit } from '@angular/core';
import { ROUTING } from '../../mocks/routing.data';
import { Routing } from '../../interfaces/routing.model';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    readonly routingUrls: Routing[] = ROUTING;
    constructor() { }

    ngOnInit() {
    }

}
