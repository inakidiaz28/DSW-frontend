import { Component } from '@angular/core';

@Component({
  selector: 'app-array-adder',
  standalone: true,
  imports: [],
  templateUrl: './array-adder.component.html',
  styleUrl: './array-adder.component.css'
})
export class ArrayAdderComponent {
  coleccion:any= [1,2,3,4,5];

  agregarElemento (){
    this.coleccion.push("x");
  }
}
