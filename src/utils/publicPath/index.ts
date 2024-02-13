import About from "../../pages/about";
import Details from "../../pages/details";
import Home from "../../pages/home";
import Signin from "../../pages/Signin/index";
import SignUp from "../../pages/signup";
import Forgot from "../../pages/Forgot"
import Ottp from "../../pages/Ottp"
import Confarmpassword from "../../pages/Confarmpassword"

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
  { path: "/Forgot", Element: Forgot },
  { path: "/Ottp", Element: Ottp },
  { path: "/Confarmpassword", Element: Confarmpassword },
];
