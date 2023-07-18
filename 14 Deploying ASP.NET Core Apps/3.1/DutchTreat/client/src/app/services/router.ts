import { RouterModule } from "@angular/router";
import CheckoutPage from "../pages/CheckoutPage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/LoginPage";
import authActivator from "./authActivator";

const routes = [
  { path: "", component: ShopPage},
  { path: "checkout", component: CheckoutPage, canActivate: [authActivator] },
  { path: "login", component: LoginPage },
  { path: "**", redirectTo: "/" }
];

const router = RouterModule.forRoot(routes,
  {
    useHash: true
  });

export default router;