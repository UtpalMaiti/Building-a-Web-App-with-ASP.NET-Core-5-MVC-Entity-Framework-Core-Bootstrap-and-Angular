import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import Store from './store';

import { ProductListView } from "./views/productListView";
import { CartView } from './views/cartView';

@NgModule({
  declarations: [
    AppComponent,
    ProductListView,
    CartView
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
