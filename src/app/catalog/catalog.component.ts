import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {CatalogService} from '../providers/catalog.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
Products:Array<Product>;
selected:Product;
  constructor(private service:CatalogService) { }

  ngOnInit() {
    //Load data from backend service
    //this.Products=
    this.service.getAll().subscribe(
      result =>this.Products=result
    );
  }
OnSelect(prod:Product){
console.log(prod.Description);
this.selected=prod;
}
}
