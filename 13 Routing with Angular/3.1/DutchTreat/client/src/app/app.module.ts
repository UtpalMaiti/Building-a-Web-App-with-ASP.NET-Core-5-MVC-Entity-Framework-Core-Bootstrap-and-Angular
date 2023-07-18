import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app';
import { ProductListView } from "./views/productListView";
import { CartView } from './views/cartView';
import CheckoutPage from './pages/CheckoutPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';

import Store from './store';
import router from "./services/router";

import AuthActivator from './services/authActivator';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListView,
    CartView,
    ShopPage,
    CheckoutPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    router
  ],
  providers: [
    Store,
    AuthActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
