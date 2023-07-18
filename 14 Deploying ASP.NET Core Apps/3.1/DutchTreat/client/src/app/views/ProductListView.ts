import { Component, OnInit } from "@angular/core";
import Store from "../store";

@Component({
  selector: "product-list",
  templateUrl: "./ProductListView.html",
  styleUrls: ["./ProductListView.css"]
})
export class ProductListView implements OnInit {

  constructor(public store: Store) { 
  }

  async ngOnInit() {
    this.store.loadProducts()
      .subscribe();
  }


}