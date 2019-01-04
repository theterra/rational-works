import PrismicDOM from "prismic-dom";
import Layout from "../components/Layout";
import { getConstitutionAPI } from "../api";
import { linkResolver } from "../helpers";

import "./constitution.scss";

const Elements = PrismicDOM.RichText.Elements;
const htmlSerializer = (type, element, content, children) => {
  switch (type) {
    case Elements.paragraph:
      return `<p class="const__list__paragraph">${children.join("")}</p>`;
    case Elements.strong:
      return `<strong>${children.join("")}</strong>`;
    case Elements.em:
      return `<em>${children.join("")}</em>`;
  }
};

const Constitution = ({ data }) => {
  const pillars = data && data.pillars;
  return (
    <Layout circle paddingTop={"4rem"} showVerticalTitle>
      <div>
        <h1 className="const__title">Constitution</h1>
        <div className="const">
          <div className="const__list">
            {Array.isArray(pillars) &&
              pillars.map((item, index) => {
                console.log("<<<<<<<<>>>>>>>>>", item);
                let content = PrismicDOM.RichText.asHtml(
                  item.pillar_content,
                  linkResolver,
                  htmlSerializer
                );
                let title = item.pillar_title.length
                  ? item.pillar_title[0].text
                  : "";
                let imageUrl = item.pillar_image
                  ? item.pillar_image.url
                  : "/static/assets/images/no-image.jpg";

                let formattedContent = (
                  <div className="const__list__content">
                    <h3 className="const__list__title">
                      <span className="highlight__hover">
                        {title.toLowerCase()}
                      </span>
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                );

                let formattedImage = (
                  <div className="const__list__image-box">
                    <div
                      className="const__list__image"
                      style={{
                        backgroundImage: `url(${imageUrl})`
                      }}
                    />
                  </div>
                );
                const isTextRight = index % 2 == 0;

                return (
                  <div className="const__list__item" key={index}>
                    <div
                      className={`const__list__item--${isTextRight ? 60 : 40} ${
                        isTextRight ? "const__list__item--content-order" : "const__list__item--image-order"
                      }`}
                    >
                      {isTextRight ? formattedContent : formattedImage}
                    </div>
                    <div
                      className={`const__list__item--${
                        !isTextRight ? 60 : 40
                      } ${!isTextRight ? "const__list__item--content-order" : "const__list__item--image-order"}`}
                    >
                      {!isTextRight ? formattedContent : formattedImage}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Constitution.getInitialProps = async () => {
  const response = await getConstitutionAPI({});
  console.log(">>>>>>", JSON.stringify(response.results[0].data));
  return {
    data: response.results[0].data
  };
};

export default Constitution;
