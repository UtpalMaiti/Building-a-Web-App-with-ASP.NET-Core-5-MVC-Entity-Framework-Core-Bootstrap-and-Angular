import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LoginResults } from "./LoginResults";
import { Order, OrderItem } from "./Order";
import { Product } from "./Product";

@Injectable()
export default class Store {

  order = new Order();
  products: Observable<Product[]>;
  token = "";
  tokenExpiration = new Date();
  errorMessage = "";

  constructor(private http: HttpClient) { }

  loadProducts() {

    // If we've loaded the products, just return
    if (this.products) return new Observable();

    // Otherwise load the products
    return this.http.get<Observable<Product[]>>("/api/products")
      .pipe(map(result => this.products = result));
  }

  addToOrder(product: Product) {
    let item: OrderItem = this.order.items.find(item => item.productId === product.id);

    if (item) {
      item.quantity++;
    } else {
      item = new OrderItem();
      item.productId = product.id;
      item.productArtId = product.artId;
      item.productArtist = product.artist;
      item.productCategory = product.category;
      item.productTitle = product.title;
      item.productSize = product.size;
      item.quantity = 1;
      item.unitPrice = product.price;
      this.order.items.push(item);
    }

  }

  get loginRequired(): boolean {
    return this.token.length === 0 || this.tokenExpiration > new Date();
  }

  login(creds) {
    return this.http.post<LoginResults>("/account/createtoken", creds)
      .pipe(map(result => {
        this.token = result.token;
        this.tokenExpiration = result.expiration;
      })); 
  }

  clearOrder() {
    this.order = new Order();
  }

  checkout() {

    const headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    return this.http.post("/api/orders", this.order, {
      headers: headers
    });

  }
}