import {Link} from "../routes";
import { linkResolver } from "../helpers";

const FeaturedPost = ({ featuredPost }) => {
  if(!featuredPost.data) return null;
  const data = featuredPost.data;
  console.log(JSON.stringify(data));
  return (
    <div className="blog__feature">
      <div className="blog__feature--container">
        <Link href={linkResolver(featuredPost)}>
          <div className="blog__feature__content">
            <h2 className="blog__feature__title">
              {data.title.length ? data.title[0].text : ""}
            </h2>
            <p className="blog__feature__desc">
              {data.summary.length ? data.summary[0].text : ""}
            </p>
            <span>
              <span className="read__more">Read more</span>
              <span>&rarr;</span>
            </span>
          </div>
        </Link>
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
