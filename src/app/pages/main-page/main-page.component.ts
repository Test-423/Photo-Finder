import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Images } from 'src/app/shared/interfaces/images.data';
import { IMAGES } from 'src/app/shared/mocks/images.data';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageComponent {

    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    pageEvent: PageEvent;

    activePageDataChunk = [];

    readonly imagesMass: Images[] = IMAGES;
    length: number = this.imagesMass.length;

    constructor() {
        this.activePageDataChunk = this.imagesMass.slice(0, this.pageSize);
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }

    onPageChanged(e) {
        let firstCut = e.pageIndex * e.pageSize;
        let secondCut = firstCut + e.pageSize;
        this.activePageDataChunk = this.imagesMass.slice(firstCut, secondCut);
    }
}