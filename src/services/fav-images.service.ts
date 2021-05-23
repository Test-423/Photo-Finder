import { Injectable } from '@angular/core';
import { Images } from 'src/app/shared/interfaces/images.model';


@Injectable({
    providedIn: 'root'
})
export class FavImagesService {

    images: Images[] = [];

    constructor() {
        this.testStorage();
    }

    testStorage() {
        if (!localStorage.getItem('fav-images')) {
            localStorage.setItem('fav-images', JSON.stringify(this.images));
        }
    }

    setItem(item: Images) {
        this.images = JSON.parse(localStorage.getItem('fav-images'));
        if (!this.images.find(elem => elem.url === item.url)) {
            this.images.push(item);
        }
        localStorage.setItem('fav-images', JSON.stringify(this.images));
    }
    delItem(item: Images) {
        this.images = JSON.parse(localStorage.getItem('fav-images')).filter((elem: Images) => elem.url !== item.url);
        localStorage.setItem('fav-images', JSON.stringify(this.images));
    }
}
