import "./style.scss";
import Header from "../../componenets/@commonComponent/header";
import homeImage from "../../assets/images/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import Footer from "../../componenets/@commonComponent/footer";
import MostViwedProducts from "./mostViwedProducts";
import Slider from "../../componenets/@commonComponent/slider";
const Home = () => {
  const categories = [
    "Groceries & Pets",
    "Health & Beauty",
    "Women's Fashion",
    "Electronic Devices",
    "Automotive & Motorbike",
    "Laundry & Household",
    "Sports & Outdoor",
  ];

  return (
    <div>
      <div style={{ height: "600px" }}>
        <img src={homeImage} height={"100%"} width={"100%"} alt="please wait" />
      </div>

      <div className="categories">
        {categories?.map((item) => (
          <div className="categories-item">{item}</div>
        ))}
      </div>
      {/* <div className="card_section"> */}

      {/* </div> */}
      <MostViwedProducts />
      <div
        style={{
          marginBottom: "2rem",
          marginLeft: "6rem",
          marginRight: "6rem",
        }}
      >
        <div className="title">
          Popular <span>Products</span>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
