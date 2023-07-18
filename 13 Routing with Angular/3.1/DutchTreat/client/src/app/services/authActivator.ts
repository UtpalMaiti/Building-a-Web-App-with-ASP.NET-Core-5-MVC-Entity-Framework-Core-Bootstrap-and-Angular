import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import Store from "../store";

@Injectable()
export default class AuthActivator implements CanActivate {

  constructor(private store: Store, private router: Router) {
  }

  canActivate(route, state): boolean {
    if (this.store.loginRequired) {
      this.router.navigate(["login"]);
      return false;
    } else {
      return true;
    }
  }
}