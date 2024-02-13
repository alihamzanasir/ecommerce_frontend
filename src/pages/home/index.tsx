import "./style.scss";
import homeImage from "../../assets/images/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import MostViwedProducts from "./mostViwedProducts";
import Slider from "../../componenets/@commonComponent/slider";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import CustomButton from "../../componenets/@commonComponent/custombtn";

const Home = () => {
  const [scrolltotop, setScrollToTop] = useState(false);

  const categories = [
    "Groceries & Pets",
    "Health & Beauty",
    "Women's Fashion",
    "Electronic Devices",
    "Automotive & Motorbike",
    "Laundry & Household",
    "Sports & Outdoor",
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const locationY = window.scrollY;
      if (locationY > 150) {
        setScrollToTop(true);
      } else setScrollToTop(false);
    });
  }, []);

  function handleScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="home_main_page">
      <div
        className={scrolltotop ? "scrollToTop" : "scrollNone"}
        onClick={handleScroll}
      >
        <AiOutlineArrowUp />
      </div>

      <div style={{ height: "600px" }}>
        <img src={homeImage} height={"100%"} width={"100%"} alt="please wait" />
      </div>

      <div className="categories">
        {categories?.map((item) => (
          <div className="categories-item">{item}</div>
        ))}
      </div>

      <MostViwedProducts />
      <div className="back_image">
        <CustomButton
          text="Shop now"
          style={{ height: "50px", width: "200px" }}
        />
      </div>
      <div
        style={{
          marginBottom: "2rem",
          marginLeft: "6rem",
          marginRight: "6rem",
        }}
      >
        <div className="title" style={{ marginBottom: "2rem" }}>
          Popular <span>Products</span>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
