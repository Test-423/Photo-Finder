import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    showFilter: boolean = false;
    favCheck: boolean = false;
    filterCheck: boolean = false;
    constructor() {
    }

    ngOnInit() {
    }

    setIconColor(prop: string) {
        this[prop] = !this[prop];
    }

}
