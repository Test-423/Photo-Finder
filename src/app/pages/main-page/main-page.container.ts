import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
//import { PageEvent } from '@angular/material/paginator';


import { FavImagesService } from "src/services/fav-images.service";

import { Images } from 'src/app/shared/interfaces/images.model';
import { Search } from 'src/app/shared/interfaces/main-page.model';
import { IMAGES } from 'src/app/shared/mocks/images.data';
import { SEARCH } from 'src/app/shared/mocks/main-page.data';
import { fromEvent } from 'rxjs';
import { SearchImagesService } from 'src/services/search-images.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'main-page',
    template: `
        <app-main-page
        [data]="data$ | async"
        [value]="value"
        (onSearch)="search($event)"
        ></app-main-page>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageContainer implements OnInit {
    data$: Observable<Images[]>;
    value: string = "car";

    constructor(private searchService: SearchImagesService, private cd: ChangeDetectorRef) {
        this.search(this.value);
    }

    public ngOnInit(): void { }

    search(value) {
        this.data$ = this.searchService.searchKeyword(value);
    }
}