import { useEffect, useState } from "react";
import Slider from "react-slick";

import { Link } from "../routes";
import { getConstitutionAPI } from "../api";

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
    <div className="container">
      <Slider {...settings}>
        {list.map((item, index) => (
          <SliderCard item={item} key={index} />
        ))}
      </Slider>
    </div>
  );
};

const SliderCard = ({ item }) => {
  let imageUrl = item.pillar_image
    ? item.pillar_image.url
    : "/static/assets/images/no-image.jpg";
  return (
    <Link href="/constitution">
      <div className="slideshow__wrapper">
        <img src={imageUrl} alt="Image" className="slideshow__image" />
        <h1 className="slideshow__title">
          {item.pillar_title.length ? item.pillar_title[0].text : ""}
        </h1>
      </div>
    </Link>
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
