import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Product [] = [
  {id: 1,name: 'hambuerguesa simple',description:'cheddar y 220gramos angus',price:6000,stock:20 },
  {id: 2,name: 'hambuerguesa doble',description:'cheddar y 2 medallones',price:8000,stock:10 }]


  constructor(private _productService:ProductService) { }
   

  ngOnInit(): void {
    this.getListIngredientes();
  }

  getListIngredientes(){
    this._productService.getListIngredientes().subscribe((data) => {
      console.log(data);
    })
  }

}