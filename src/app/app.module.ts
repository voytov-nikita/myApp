import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsComponent } from './components/errors/errors.component';
import {FormsModule} from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorsComponent,
    FilterProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
