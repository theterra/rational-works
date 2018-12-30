import Link from "next/link";
import { linkResolver } from "../helpers";

const FeaturedPost = ({ featuredPost }) => {
  const data = featuredPost.data;
  console.log(JSON.stringify(data));
  return (
    <div className="blog__feature">
      <div className="blog__feature--container">
        <div className="blog__feature__content">
          <h2 className="blog__feature__title">
            {data.title.length ? data.title[0].text : ""}
          </h2>
          <p className="blog__feature__desc">
            {data.summary.length ? data.summary[0].text : ""}
          </p>
          <Link href={linkResolver(featuredPost)}>
            <span>
              <span className="read__more">Read more</span>
              <span>&rarr;</span>
            </span>
          </Link>
        </div>
        <div className="blog__feature__image-box">
          <div
            className="blog__feature__image"
            style={{
              backgroundImage: "url(/static/assets/images/mask.jpg)"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
