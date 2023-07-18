import { Component } from "@angular/core";
import Store from "../store";

@Component({
  selector: "cart",
  templateUrl: "cartView.html",
  styleUrls: [ "cartView.css" ]
})
export class CartView {
  constructor(public store: Store) {
  }
}
