import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  selected:Product;
  constructor() { }

  ngOnInit() {

  }

}
