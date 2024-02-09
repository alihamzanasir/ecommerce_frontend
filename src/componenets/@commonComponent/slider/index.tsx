import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Card from "../card";

function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginLeft: "1rem",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginRight: "1rem",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {Array.from({ length: 10 }, () => (
          <div style={{ width: "300px" }}>
            <Card />
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default Slider;
