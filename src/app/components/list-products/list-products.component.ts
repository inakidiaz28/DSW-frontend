import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Product [] = [
  {id: 1,name: 'hambuerguesa simple',description:'cheddar y 220gramos angus',price:6000,stock:20 },
  {id: 2,name: 'hambuerguesa doble',description:'cheddar y 2 medallones',price:8000,stock:10 }]
  constructor() { }

  ngOnInit(): void {
  }

}
