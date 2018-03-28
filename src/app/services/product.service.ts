import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResponseVO } from '../shared/vo/ResponseVO';
import { ProductVO } from '../shared/vo/ProductVO';
import { CustomHttpService } from './customHttp.service';


@Injectable()
export class ProductService {

  constructor(private _customHttpService: CustomHttpService) {
  }

  getAllProduct(): Observable<ResponseVO<ProductVO>> {
    const url = 'http://localhost:8080/product/productList';
    const body = '';
    return this._customHttpService.post(url, body);
  }
}
