import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://shop.familyn.com/pub/media/wysiwyg/imageslider/slider-1-index17.jpg",
    caption: "First Slide",
  },
  {
    url: "https://shop.familyn.com/pub/media/wysiwyg/imageslider/slider-2-index17.jpg",
    caption: "Second Slide",
  },
  {
    url: "https://shop.familyn.com/pub/media/wysiwyg/imageslider/slider-3-index17.jpg",
    caption: "Third Slide",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img
                src={fadeImage.url}
                alt={"No  internet"}
                style={{ width: "100%", height: "75vh" }}
              />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
