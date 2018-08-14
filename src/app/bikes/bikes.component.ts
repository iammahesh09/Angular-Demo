import { Component, OnInit } from '@angular/core';
import { BikeService } from '../services/bike.service';
import { Bike } from '../models/bike';
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  bikes: any;

  constructor(private _bikeService: BikeService) { }

  ngOnInit() {
    this._bikeService.getBikes().subscribe(
      res => this.bikes = res,
      error => console.log(error)
    )
  }

}
