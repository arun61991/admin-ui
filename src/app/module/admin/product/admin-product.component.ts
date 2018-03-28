import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductVO } from '../../../shared/vo/ProductVO';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html'
})
export class AdminProductComponent {

  productVOList: ProductVO[] = [];
  constructor(private _productService: ProductService) {
    this.getAllProduct();
  }

  getAllProduct() {
    this._productService.getAllProduct().subscribe(
      data => {
        this.productVOList = data.data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
