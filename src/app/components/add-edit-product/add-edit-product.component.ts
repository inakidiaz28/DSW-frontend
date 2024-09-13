import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ingrediente } from 'src/app/interfaces/ingrediente.js';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  codIngrediente: number;
  operacion: string = 'Agregar '

  constructor(private fb:FormBuilder, private _productService: ProductService, private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
       descripcion: ['',Validators.required],
       stock: [null,Validators.required],
    })
    this.codIngrediente= Number (aRouter.snapshot.paramMap.get('codIngrediente'));

    
   }

  ngOnInit(): void {
    if(this.codIngrediente != 0){
      this.operacion = 'Editar '
      this.getIngrediente(this.codIngrediente);
    }
  }

  getIngrediente(codIngrediente:number){
    this.loading = true;
    this._productService.getIngrediente(codIngrediente).subscribe((data:Ingrediente)=>{
      console.log(data)
      this.loading = false;
      this.form.setValue({
        descripcion: data.descripcion,
        stock: data.stock
      })
    })
  }


  addIngrediente(){
    const ingrediente: Ingrediente = {
      descripcion: this.form.value.descripcion,
      stock: this.form.value.stock
      }
    this.loading= true;
    if(this.codIngrediente !== 0){
      ingrediente.codIngrediente= this.codIngrediente;
      this._productService.updateIngrediente(this.codIngrediente, ingrediente).subscribe(() =>{
        this.toastr.success(`El ingrediente ${ingrediente.descripcion} fue modificado con éxito`, 'Ingrediente modificado')
        this.loading = false;
        this.router.navigate(['/']) 
        
      })
    } else{
      this._productService.saveIngrediente(ingrediente).subscribe(() => {
        console.log('INGREDIENTE AGREGADO')
        this.toastr.success(`El ingrediente ${ingrediente.descripcion} fue registrado con éxito`, 'Ingrediente Registrado')
        this.loading = false;
        this.router.navigate(['/'])

  
        })
         
    }

    }
  }
