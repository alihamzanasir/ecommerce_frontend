import CustomButton from "../custombtn";
import CustomInput from "../customInput";
import "./style.scss";
import { MdShoppingCart } from "react-icons/md";
import BasicMenu from "./menu";
import logoImage from "../../../assets/images/22116291_christmas_2012_new_276-removebg-preview.png";
import MTextFied from "../../textField";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import CustomTabs from "./tabs";

{
  /* <MdShoppingCart /> */
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const Header = () => {
  return (
    <div className="header_section">
      <Link to={"/home"}>
        <img height={70} width={70} src={logoImage} alt="please wait" />
      </Link>
      <div className="list">
        <CustomTabs />
      </div>

      <div className="signin_shop">
        <div className="search_bar_div">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div>
          {/* <span>signin | signUp</span> */}
          <BasicMenu />
        </div>
        <span>
          <MdShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default Header;
