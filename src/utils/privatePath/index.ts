import Home from "../../pages/home";
import About from "../../pages/about";
import Success from "../../pages/success";
import Details from "../../pages/details";
import Cart from "../../pages/cart";
import Checkout from "../../pages/checkout";
import Profile from "../../pages/profile";
import AdminPage from "../../pages/adminPage";
interface typeCheck {
  path: string;
  Element: React.ComponentType<any>;
}

export const privatePath: typeCheck[] = [
  { path: "/home", Element: Home },
  { path: "/AdminPage", Element: AdminPage },
  { path: "/about", Element: About },
  { path: "/details", Element: Details },
  { path: "/profile", Element: Profile },
  { path: "/cart", Element: Cart },
  { path: "/checkout", Element: Checkout },
  { path: "/success", Element: Success },
];
