import "./style.scss";
import { Rate } from "antd";
const Card = () => {
  return (
    <div className="Card">
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
      <Rate className="rating" allowHalf defaultValue={2.5} />
      <div className="flexDiv">
        Colors:
        {Array.from({ length: 3 }, () => (
          <div className="colors"></div>
        ))}
      </div>
      <div className="price">PKR:400$
      <span className="previous-price">PKR:600$</span>
      </div>
    </div>
  );
};

export default Card;
