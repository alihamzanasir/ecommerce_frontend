import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import CustomButton from "../../componenets/@commonComponent/custombtn";
import { CiLocationOn } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { TbBrandCashapp } from "react-icons/tb";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import MultiActionAreaCard from "../../componenets/@commonComponent/metrailUiCard";
import Card from "@mui/material/Card";
import CustomAlert from "../../componenets/@commonComponent/alert";
import "./style.scss";
import RatingReview from "./ratingReview";
import SpecificationTable from "./specification";
import { useState } from "react";
import CountrySelect from "../../componenets/@commonComponent/autoComplete";
import Slider from "../../componenets/@commonComponent/slider";
import Header from "../../componenets/@commonComponent/header";
const Details = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(true);
  };
  return (
    <div className="main_detail_page">
      <Box>
        <Grid container columns={24}>
          <Grid xl={16} md={16} className="img_details">
            <div className="img-container">
              <img
                src="https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=360&t=st=1706791307~exp=1706791907~hmac=0f788586820fee03fa3991696227e03cd6f90f40ec4e50e6d9752880e9ac794e"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="details">
              <div className="product_title">Cloverfield Chair</div>
              <div className="price">
                <span>Rs 139.00</span>
                Rs 155.00
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod.
              </div>
              <div className="rating">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <span>225 Rating</span>
                <span>|</span>
                <span>54 Answer Questions</span>
              </div>
              <div className="brand_Name">
                <span>Brand : </span>No Brand & Organisation from No Brand
              </div>
              <div className="varinats_title">Variants</div>
              <div className="variants">
                {Array.from({ length: 5 }, () => (
                  <div className="variants_image">
                    <img
                      src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448752.jpg?w=360&t=st=1706793248~exp=1706793848~hmac=eee1df404e54b33a305c267705810308d9e28aa9bae21c0af7f3d657db1ba5d7"
                      height={"100%"}
                      width={"100%"}
                    />
                  </div>
                ))}
              </div>
              <div className="Quantity">
                <div className="Quantity_text">Quantity</div>
                <div className="increase_decrease">
                  <div className="btn">+</div>
                  <div>1</div>
                  <div className="btn">-</div>
                </div>
              </div>
              <div className="add_btn">
                <CustomButton
                  onClick={() => setOpen(true)}
                  text="Buy"
                  style={{ width: "50%", height: "50px" }}
                />
                <CustomButton
                  text="Add to cart"
                  style={{ width: "50%", height: "50px" }}
                />
              </div>
            </div>
          </Grid>
          <Grid xl={8} md={8} className="cart_information">
            <div>
              <div>
                <div className="deliver_text">Deliver</div>
                <div className="location">
                  <span>
                    <CiLocationOn />
                  </span>
                  <CountrySelect />
                </div>
                <div className="delivery">
                  <div className="delivery_config">
                    <span>
                      <TbTruckDelivery />
                    </span>
                    <div>Free Delivery</div>
                    <div> 6 Feb - 11 Feb</div>
                  </div>
                  <div className="free_text">Free</div>
                </div>
                <div className="deliver_info">
                  Enjoy free shipping promotion with minimum spend of{" "}
                  <span>Rs. 599</span> from Discount 4u.
                </div>
                <div className="avail_delivery">
                  <span>
                    <TbBrandCashapp />
                  </span>
                  Cash on Delivery Available
                </div>
                <div className="avail_delivery">
                  <span>
                    {" "}
                    <MdOutlineEventAvailable />
                  </span>
                  200 products are available
                </div>
                <div className="avail_delivery">
                  <span>
                    {" "}
                    <AiTwotoneSafetyCertificate />
                  </span>
                  Warranty not available
                </div>
                <div className="response">
                  <div className="respose_childItem">
                    Positive Rating
                    <div>86%</div>
                  </div>
                  <div className="respose_childItem">
                    Ship on Time
                    <div>100%</div>
                  </div>
                  <div className="respose_childItem">
                    Chat Response
                    <div>99%</div>
                  </div>
                </div>
              </div>
            </div>

            <CustomButton
              text="Add to wishList"
              style={{ width: "100%", height: "50px", marginTop: "2rem" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container columns={24}>
          <Grid xl={18} md={18}>
            <SpecificationTable />
            <RatingReview />
          </Grid>
          <Grid xl={6} md={6} className="side_card">
            <div className="feature_product_heading">Feature Products</div>
            <Card>
              {Array.from({ length: 10 }, () => (
                <MultiActionAreaCard
                  image="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448752.jpg?w=360&t=st=1706793248~exp=1706793848~hmac=eee1df404e54b33a305c267705810308d9e28aa9bae21c0af7f3d657db1ba5d7"
                  title="Lizard"
                  content=" Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica"
                />
              ))}
            </Card>
          </Grid>
        </Grid>
      </Box>
      <CustomAlert
        vertical="top"
        horizontal="left"
        open={open}
        setOpen={setOpen}
      />
      <div className="title" style={{ marginTop: "2rem" }}>
        Popular <span>Products</span>
      </div>
      <Slider />
    </div>
  );
};

export default Details;
