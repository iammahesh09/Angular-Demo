import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';

@Component({
  	selector: 'app-product-list',
  	templateUrl: './product-list.component.html',
  	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

	products: any;

	constructor(private _productService: ProductService) {

	}

	ngOnInit() {
		this._productService.getProductData().subscribe(
			resp => this.products = resp['data'],
			err => console.log("Service not loading")
		)
	}


	

}
