import { Date } from "prismic-dom";
import moment from "moment";
import {Router} from "../routes";

import { linkResolver } from "../helpers";

import "./blogPosts.scss";

const routeToPost = data => {
  return Router.push(linkResolver(data));
};

const BlogPostCard = ({ post = {} }) => {
  const data = post.data || {};
  const primaryImage = data && data.body.find(item => item.type === "image");
  const imageUrl = primaryImage
    ? primaryImage.url
    : "/static/assets/images/no-image.png";
  return (
    <div className="blog__posts__item">
      <div className="blog__posts__item--wrapper">
        <div className="blog__posts__image-box">
          <div
            className="blog__posts__image"
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
            onClick={() => routeToPost(post)}
          />
        </div>

        <div className="padding--2">
        <div className="blog__posts__meta">
          <span className="date">
            {moment(Date(post.last_publication_date)).format("MMM DD YYYY")}
          </span>
        </div>
        <div className="blog__posts__content">
          <h3 className="blog__posts__title" onClick={() => routeToPost(post)}>
            {data.title.length ? data.title[0].text : ""}
          </h3>
          <p className="blog__posts__desc" onClick={() => routeToPost(post)}>
            {data.summary.length ? data.summary[0].text.substr(0,140) : ""}
          </p>
        </div>
        <div onClick={() => routeToPost(post)}>
          <span className="read__more">Read more</span>
          <span>&rarr;</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
