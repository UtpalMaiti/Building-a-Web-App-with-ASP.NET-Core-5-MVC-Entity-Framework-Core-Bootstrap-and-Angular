import { Component } from "@angular/core";
import { Router } from "@angular/router";
import Store from "../store";

@Component({
  templateUrl: "LoginPage.html"
})
export default class LoginPage {

  constructor(private store: Store, private router: Router) { }

  public creds = {
    username: "",
    password: ""
  };

  public errorMessage = "";

  onLogin() {
    this.store.login(this.creds)
      .subscribe(() => {
        if (this.store.order.items.length > 0) {
          this.router.navigate(["/checkout"]);
        } else {
          this.router.navigate(["/"]);
        }
      }, () => this.errorMessage = "Failed to login");
  }

}
