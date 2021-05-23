import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "node_modules/rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { Images } from 'src/app/shared/interfaces/images.model';
import { of } from 'rxjs/internal/observable/of';

export interface FlickrPhoto {
    farm: string; //iconfarm
    id: string; //id
    secret: string;
    server: string; //server
    title: string; //desc
    owner: string; //nsid
    pageUrl: string;
    tags: string;
}

export interface FlickrOutput {
    photos: {
        photo: FlickrPhoto[];
    }
}

export interface FlickrTags {
    _content: string;
}


export interface FlickrTagsOutput {
    photo: {
        tags: {
            tag: FlickrTags[];
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class SearchImagesService {

    flickrKey = '71798ad62058a52b4b8c00f6e17e31de';

    constructor(private http: HttpClient) {

    }

    searchKeyword(keyword: string): Observable<any> {
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        const params = `api_key=${this.flickrKey}&text=${keyword}&format=json&extras=tags&nojsoncallback=1&per_page=12&page=1`;
        return this.http.get(url + params).pipe(map((res: FlickrOutput) => {
            const urlArr = [];
            res.photos?.photo.forEach((ph: FlickrPhoto) => {
                const photoObj = {
                    url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`,
                    pageUrl: `https://www.flickr.com/photos/${ph.owner}/${ph.id}`,
                    title: ph.title,
                    ownerProfile: `https://www.flickr.com/photos/${ph.owner}/`,
                    ownerPhoto: `https://farm${ph.farm}.staticflickr.com/${ph.server}/buddyicons/${ph.owner}_s.jpg`,
                    tags: ph.tags.split(" "),
                    isFav: false,
                    id: ph.id
                };
                // this.getTags(ph.id).
                //     toPromise().
                //     then(res => {
                //         photoObj.tags = res;
                //         console.log(`Get tag - ${ph.id}`)
                //     }).
                //     catch((err) => console.log('Error: %s', err));
                urlArr.push(photoObj);
            });
            console.log("End");
            return urlArr;
        }));
    }
    getTags(id: string) {
        const url = `https://www.flickr.com/services/rest/?method=flickr.tags.getListPhoto&`;
        const params = `api_key=${this.flickrKey}&photo_id=${id}&format=json&nojsoncallback=1`;

        return this.http.get(url + params).pipe(map((res: FlickrTagsOutput) => {
            const tagsArr = [];

            res.photo.tags.tag.forEach((tag: FlickrTags) => {
                tagsArr.push(tag._content);
            });
            return tagsArr;
        }));
    }
}

