
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
import 'rxjs/add/operator/map';
import { Response, RequestMethod, ResponseType, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class CustomHttpService {
    constructor(private httpClient: HttpClient) { }


    post(url: string, body: string): Observable<any> {
        return this.httpClient.post(url, body)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
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
}
