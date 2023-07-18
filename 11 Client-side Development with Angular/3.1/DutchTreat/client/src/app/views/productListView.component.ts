import { Component } from "@angular/core";

@Component({
  selector: "product-list",
  templateUrl: "productListView.component.html"
})
export class ProductListView {
  public products = [{
    title: "Some Product",
    price: 19.99
  }, {
    title: "Another Product",
    price: 9.99
  }];

}