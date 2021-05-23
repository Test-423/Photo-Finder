import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageComponent implements OnInit, OnChanges {

    readonly search: Search = SEARCH;

    @Input() readonly data: Images[];

    images: Images[];
    tags: Array<string[]>;
    isActive: boolean = false;

    constructor(
        private favService: FavImagesService,
        private searchService: SearchImagesService,
        private changeDetector: ChangeDetectorRef
    ) {
    }

    favClick(item: Images) {
        item.isFav = !item.isFav;
        item.isFav ? this.favService.setItem(item) : this.favService.delItem(item);
    }

    // click() {
    //     this.searchService.searchKeyword('bus').subscribe(data => {
    //         if (data) {
    //             console.log(data)
    //             this.dataChunk = data.slice(0, 10);
    //             this.changeDetector.detectChanges();
    //         }
    //     });
    // }

    ngOnInit() {
        this.isActive = !this.isActive;
    }


    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.data);
        this.changeDetector.detectChanges();
    }

}