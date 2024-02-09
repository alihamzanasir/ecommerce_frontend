import About from "../../pages/about";
import Details from "../../pages/details";
import Home from "../../pages/home";
import Signin from "../../pages/signin";
import SignUp from "../../pages/signup";

interface TypeCheck {
  path: string;
  Element: React.ComponentType<any>;
}

export const publicPath: TypeCheck[] = [
  { path: "/home", Element: Home },
  { path: "/about", Element: About },
  { path: "/details", Element: Details },
  { path: "/signin", Element: Signin },
  { path: "/signup", Element: SignUp },
];
