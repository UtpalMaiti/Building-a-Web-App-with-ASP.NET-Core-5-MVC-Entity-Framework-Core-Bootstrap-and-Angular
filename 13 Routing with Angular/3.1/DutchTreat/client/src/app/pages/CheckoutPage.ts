﻿import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Store from '../store';

@Component({
  templateUrl: "CheckoutPage.html",
  styleUrls: ['CheckoutPage.css']
})
export default class CheckoutPage implements OnInit {

  constructor(public store: Store, private router: Router) {
  }

  ngOnInit() {
    if (this.store.order.items.length === 0) {
      this.router.navigate(["/"]);
    }
  }

  onCheckout() {
    this.store.errorMessage = "";
    this.store.checkout()
      .subscribe(() => {
        this.store.clearOrder();
        this.router.navigate(["/"]);
        alert("Order Complete...");
      }, () => this.store.errorMessage = "Failed to checkout");
  }
}