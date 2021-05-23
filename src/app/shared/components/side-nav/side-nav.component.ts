import { Component, OnInit } from '@angular/core';
import { FILTER } from '../../mocks/filter.data';
import { Filter } from '../../interfaces/filter.model';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    showFilter: boolean = true;

    filterMass: Filter[] = FILTER;

    constructor() {
    }

    ngOnInit() {
    }

}
