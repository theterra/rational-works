import { useEffect, useState } from "react";
import Slider from "react-slick";

import { Link } from "../routes";
import { getConstitutionAPI } from "../api";
import Loader from "./Loader";

import "./slideShow.scss";

const SlideShow = () => {
  const [list] = getSlideData();

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="container" style={{ height: "400px" }}>
      {list.length === 0 ? (
        <Loader />
      ) : (
        <Slider {...settings}>
          {list.map((item, index) => (
            <SliderCard item={item} key={index} />
          ))}
          {/* <SliderCard item={{ pillar_title: [{ text: "Athiesm" }] }} key={"1"} /> */}
        </Slider>
      )}
    </div>
  );
};

const SliderCard = ({ item }) => {
  let imageUrl = item.pillar_image
    ? item.pillar_image.url
    : "/static/assets/images/no-image.jpg";
  return (
    <div className="slideshow__wrapper">
      <div className="slideshow__content">
        <Link href="/constitution">
          <div className="slideshow__title-wrapper">
            <h1 className="slideshow__title">
              {item.pillar_title.length ? item.pillar_title[0].text : ""}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="slideshow__image-box">
        <img src={imageUrl} alt="Image" className="slideshow__image" />
      </div>
    </div>
  );
};

const getSlideData = () => {
  const [list, responseHandler] = useState([]);
  useEffect(() => {
    getConstitutionAPI({})
      .then(response => {
        responseHandler(response.results[0].data.pillars);
      })
      .catch(() => {
        responseHandler([]);
      });
  }, []);

  return [list];
};

export default SlideShow;
