import { Component, OnInit } from "@angular/core";
import Store from "../store";

@Component({
  selector: "product-list",
  templateUrl: "./productListView.html",
  styleUrls: ["./productListView.css"]
})
export class ProductListView implements OnInit {

  constructor(public store: Store) {
  }

  ngOnInit() {
    this.store.loadProducts()
      .subscribe();
  }


}