import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fav-page',
    templateUrl: './fav-page.component.html',
    styleUrls: ['./fav-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
