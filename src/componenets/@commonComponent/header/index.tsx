import CustomButton from "../custombtn";
import CustomInput from "../customInput";
import "./style.scss";
import { MdShoppingCart } from "react-icons/md";
import logoImage from "../../../assets/images/22116291_christmas_2012_new_276-removebg-preview.png";
{
  /* <MdShoppingCart /> */
}

const Header = () => {
  return (
    <div className="header_section">
      <div>
        <img height={70} width={70} src={logoImage} alt="please wait" />
      </div>
      <div className="list">
        <div>Home</div>
        <div>Shop</div>
        <div>About</div>
      </div>

      <div className="signin_shop">
        <div className="search_bar_div">
          <CustomInput
            placeholder="Search..."
            style={{ height: "43.5px", border: "none" }}
          />
          <CustomButton className="btn" text="Login" />
        </div>
        <div>
          <span>signin | signUp</span>
        </div>
        <span>
          <MdShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default Header;
