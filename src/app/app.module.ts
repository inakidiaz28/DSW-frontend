import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Modules
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductComponent,
    ProgressBarComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
