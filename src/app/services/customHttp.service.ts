
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
import 'rxjs/add/operator/map';
import { Response, RequestMethod, ResponseType, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
import { LocalStorageService } from './localstorage.service';


@Injectable()
export class CustomHttpService {
    constructor(private httpClient: HttpClient,
        private _localStorageService: LocalStorageService) { }


    post(url: string, body: string): Observable<any> {
        return this.httpClient.post(url, body)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    post2(url: string, body: string): Observable<any> {
        const requestOptions = this.getRequestOptions();
console.log('xxxxxxxxxxxxxxxx');
        return this.httpClient.post(url, body, requestOptions)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => {

                return Observable.throw(error);
            });
    }

    getRequestOptions() {
        console.log('xxxxxxxxxxxxxxxx');
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=UTF-8')
        .set('Accept', 'application/json')
        .set('Authorization', this._localStorageService.getItem('Authorization'));

        const requestOptions = {
            headers: headers
        };
        return requestOptions;
    }

    get(url: string): Observable<any> {

        return this.httpClient.get(url)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => {

                return Observable.throw(error);
            });
    }



    postLoginRequest(url, body) {
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0');

        const requestOptions = {
            headers: headers
        };

        return this.httpClient.post(url, body, requestOptions)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => {
                if (error.error.error === 'invalid_grant') {

                }
                return Observable.throw(error);
            });
    }
}
