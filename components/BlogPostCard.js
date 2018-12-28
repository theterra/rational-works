import { Date } from "prismic-dom";
import moment from "moment";
import Router from "next/router";

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
      <div className="blog__posts__image-box">
        <div
          className="blog__posts__image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
          onClick={() => routeToPost(post)}
        />
      </div>
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
          {data.summary.length ? data.summary[0].text : ""}
        </p>
      </div>
      <div className="read__more" onClick={() => routeToPost(post)}>
        Read more<span>&rarr;</span>
      </div>
    </div>
  );
};

export default BlogPostCard;