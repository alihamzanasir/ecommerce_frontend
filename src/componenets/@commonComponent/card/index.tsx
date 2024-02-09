import "./style.scss";
import Rating from "@mui/material/Rating";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
  const colors = ["#636363", "green", "#E7E5E3"];
  const navigate: any = useNavigate();
  const handleClick = () => {
    navigate("/details");
  };
  return (
    <Card className="Card" onClick={handleClick}>
      <div className="Card-img">
        <img
          height={"100%"}
          width={"100%"}
          src="https://img.freepik.com/free-photo/levitating-women-s-bag-display_23-2149817613.jpg?w=360&t=st=1703769489~exp=1703770089~hmac=9553744dbe91ecd39bc6a9b0967e9614d0673f060b5d1330e730b621183fac7c"
        />
      </div>
      <div className="discription">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, sequi.
      </div>
      <Rating
        name="read-only"
        style={{ color: "#636363" }}
        value={2}
        readOnly
      />
      <div className="flexDiv">
        Colors:
        {colors.map((item) => (
          <div className="colors" style={{ background: item }}></div>
        ))}
      </div>
      <div className="price">
        PKR:400$
        <span className="previous-price">PKR:600$</span>
      </div>
    </Card>
  );
};

export default ProductCard;
