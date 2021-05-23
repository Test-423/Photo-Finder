import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class MainPageService {
    currentUrl: string = '';

    constructor(private readonly http: HttpClient) { }


    getData() {
        return this.http.get(this.currentUrl)
    }
}