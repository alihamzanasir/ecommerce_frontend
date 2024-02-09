import Header from "../../componenets/@commonComponent/header";
import Footer from "../../componenets/@commonComponent/footer";
import CustomInput from "../../componenets/@commonComponent/customInput";
import "./style.scss";
import MiniDrawer from "../../componenets/@commonComponent/sideBar";
import MTextFied from "../../componenets/textField";
import MostViwedProducts from "./mostViwedProducts";
import PopularProducts from "./popularProducts";
const AdminPage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="main">
          <MiniDrawer />
        </div>
        <div>
          <MostViwedProducts />
          <PopularProducts />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
