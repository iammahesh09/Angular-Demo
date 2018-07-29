import { Component, OnInit } from '@angular/core';
import { MobileService } from '../shared/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
	products:any;
	constructor(private _mobileService: MobileService) { }

  	ngOnInit() {
			this._mobileService.getProductsData().subscribe(
				res => this.products = res,
				error => console.log(error)

		)
  	}

	

}
