import { useEffect, useState } from "react";
import { getConstitutionAPI } from "../api";
import { Link } from "../routes";

const Card = ({ item, isFiveBlock, index }) => {
  let imageUrl = item.pillar_image
    ? item.pillar_image.url
    : "/static/assets/images/no-image.jpg";

  return (
    <div
      className={`principles__list__item principles__list__item--${
        isFiveBlock ? "large" : "small"
      }`}
    >
      <Link href="/constitution">
        <div className="principles__list__item__image--box">
          <div
            className="principles__list__item__image"
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
          />
          <h3 className="principles__list__title">
            {item.pillar_title.length ? item.pillar_title[0].text : ""}
          </h3>
        </div>
      </Link>
    </div>
  );
};

const PillarCards = () => {
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

  const fiveBlocks = list.slice(0, 5);
  const fourBlocks = list.slice(5);

  return (
    <div className="principles__list">
      <div className="principles__list__block--five">
        {fiveBlocks.map((item, index) => (
          <Card isFiveBlock={index === 0} item={item} key={index} />
        ))}
      </div>
      <div className="principles__list__block--four">
        {fourBlocks.map((item, index) => (
          <Card item={item} key={`four${index}`} />
        ))}
      </div>
    </div>
  );
};

export default PillarCards;
