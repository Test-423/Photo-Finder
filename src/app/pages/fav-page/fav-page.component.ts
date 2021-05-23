import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';


import { FavImagesService } from 'src/services/fav-images.service';

import { Images } from 'src/app/shared/interfaces/images.model';
import { IMAGES } from 'src/app/shared/mocks/images.data';
import { SEARCH } from 'src/app/shared/mocks/main-page.data';
import { Search } from 'src/app/shared/interfaces/main-page.model';

@Component({
    selector: 'app-fav-page',
    templateUrl: './fav-page.component.html',
    styleUrls: ['./fav-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FavImagesService]
})
export class FavPageComponent implements OnInit {

    readonly imagesMass = JSON.parse(localStorage.getItem('fav-images') || '0');
    readonly search: Search = SEARCH;

    pageSize: number = this.search.pageSize;
    pageSizeOptions: number[] = this.search.pageSizeOptions;
    showExtraBtns: boolean = this.search.showExtraBtns;

    length: number = 0;
    dataChunk: Images[] = [];
    pageEvent: PageEvent;


    constructor(private favService: FavImagesService) {
        this.dataChunk = this.imagesMass.slice(0, this.pageSize);
        this.length = this.imagesMass.length;
    }

    favClick(item: Images) {
        item.isFav = !item.isFav;
        if (item.isFav === true) {
            this.favService.setItem(item);
        } else {
            this.favService.delItem(item);
        }
        return item.isFav
    }

    setPageSizeOptions(setPageSizeOptionsInput: string): void {
        if (setPageSizeOptionsInput) {
            this.search.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }

    onPageChanged(elem): void {
        let firstCut = elem.pageIndex * elem.pageSize;
        let secondCut = firstCut + elem.pageSize;
        this.dataChunk = this.imagesMass.slice(firstCut, secondCut);
    }

    ngOnInit() {
    }

}
