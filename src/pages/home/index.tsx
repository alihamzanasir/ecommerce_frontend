import "./style.scss";
import Header from "../../componenets/@commonComponent/header";
import homeImage from "../../assets/images/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import Categories from "./categories";
import Card from "../../componenets/@commonComponent/card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
      <Header />
      <div style={{ height: "600px" }}>
        <img src={homeImage} height={"100%"} width={"100%"} alt="please wait" />
      </div>

      <div className="categories">
        {categories?.map((item) => (
          <div className="categories-item">{item}</div>
        ))}
      </div>
      <div className="card_section">
        {Array.from({ length: 20 }, () => (
          <div>
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
