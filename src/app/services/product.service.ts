import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResponseVO } from '../shared/vo/ResponseVO';
import { ProductVO } from '../shared/vo/ProductVO';
import { CustomHttpService } from './customHttp.service';
import { API_CONSTANTS } from '../shared/ApiConstants';


@Injectable()
export class ProductService {

  constructor(private _customHttpService: CustomHttpService) {
  }

  getAllProduct(): Observable<ResponseVO<ProductVO>> {
    const url = API_CONSTANTS.GET_ALL_PRODUCT_DATA;
    const body = '';
    return this._customHttpService.post2(url, body);
  }
}
