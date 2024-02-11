import React from "react";
import "./style.scss";
import CustomInput from "../customInput";
import CustomButton from "../custombtn";
const Footer = () => {
  return (
    <div className="mainDiv">
      <div className="flex-1">
        <div className="flexDiv">
          <div>
            <div className="title"> DOOGEE</div>
            <div>TearDown</div>
            <div>News</div>
            <div>Patners</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
          <div>
            <div className="title">Social</div>
            <div>Facebook</div>
            <div>Twiter</div>
            <div>Youtube</div>
          </div>
          <div>
            <div className="title">Service</div>
            <div>Compare</div>
            <div>Download</div>
            <div>Feedback</div>
            <div>BugReport</div>
          </div>

          <div>
            <div className="title">Activity</div>
            <div>Infulence</div>
            <div>Affiliate</div>
            <div>Co-branding</div>
            <div>Honor</div>
            <div>Giveaway</div>
          </div>
        </div>
        <div>
          <div>Newsletter Subscription</div>
          <div className="search_bar_div">
            <CustomInput
              placeholder="Subscribe to our newsletter"
              className={"input"}
            />
            <CustomButton
              text="Subcribe"
              style={{ width: "50%", height: "50px", borderRadius: "unset" }}
            />
          </div>
        </div>
      </div>
      <div className="copyright_verify">
        Copyright@ 2018 DOOGEE.ALL right reserved.
      </div>
    </div>
  );
};

export default Footer;
