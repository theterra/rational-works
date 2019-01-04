import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import PrismicDOM from "prismic-dom";

import { getBlogPostAPI, getBlogPostsAPI } from "../api";
import linkResolver from "../helpers";
import htmlSerializer from "../helpers/htmlSerializer";

import BlogPostCard from "../components/BlogPostCard";
import Layout from "../components/Layout";
import MetaContent from "../components/MetaContent";
import { getContentUrl } from "../components/common/getContentUrl";
import "./post.scss";

const shareHandler = () => {
  if (FB) {
    FB.ui(
      {
        method: "share",
        display: "popup",
        href: window.location.href
      },
      function(response) {}
    );
  }
};

const twitterShareHandler = e => {
  e.preventDefault();
  var twitterWindow = window.open(
    "https://twitter.com/share?url=" + document.URL,
    "twitter-popup",
    "height=350,width=600"
  );
  if (twitterWindow.focus) {
    twitterWindow.focus();
  }
  return false;
};

const BlogPost = props => {
  const [contentUrl] = getContentUrl();

  const articleRef = useRef();
  const [translateYaxes, isFixed] = shareButtonController(articleRef);
  const shareStyle = {
    transform: `translateY(${translateYaxes}px)`
  };
  const shareFixed = classnames("article__share__wrapper", {
    "article__share__wrapper--fixed": isFixed,
    "article__share__wrapper--absolute": !isFixed
  });

  const { suggestedPosts, postData } = props;
  const post = postData.data;
  const title = post.title.length ? post.title[0].text : "";
  const summary = post.summary.length ? post.summary[0].text : "";
  const primaryImage = post && post.body.find(item => item.type === "image");
  const imageUrl = primaryImage
    ? primaryImage.url
    : "/static/assets/images/no-image.png";

  return (
    <Layout paddingTop={"4rem"} hideNavigation shadowLine>
      <MetaContent
        contentType={"article"}
        contentTitle={title}
        contentDescription={summary}
        contentImage={imageUrl}
        contentUrl={contentUrl}
      />
      <section className="article">
        <div className="article--container" ref={articleRef}>
          <h1 className="article__title">{title}</h1>
          <p className="article__summary">{summary}</p>
          <div className="article__content">
            <div
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(
                  post.body,
                  linkResolver,
                  htmlSerializer
                )
              }}
            />
          </div>
        </div>
      </section>

      <section className="article__related__posts">
        <section className="blog__posts">
          {/* <p>More articles</p> */}
          <div className="blog__posts--container">
            {Array.isArray(suggestedPosts) &&
              suggestedPosts.map((post, index) => (
                <BlogPostCard key={index} post={post} />
              ))}
          </div>
        </section>
      </section>
      <aside className="article__share">
        <div className={shareFixed} style={shareStyle}>
          <ul className="article__share__list">
            <li className="article__share__list__item">
              <button className="share__button" onClick={shareHandler}>
                <span>
                  <svg viewBox="0 0 30 30" width="30px" height="30px">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
                  </svg>
                </span>
              </button>
            </li>
            <li className="article__share__list__item">
              <button className="share__button" onClick={twitterShareHandler}>
                <span>
                  <svg viewBox="0 0 30 30" width="30px" height="30px">
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </Layout>
  );
};

BlogPost.getInitialProps = async context => {
  // we get the slug of the post so that we can
  // query the API with it
  const { slug } = context.query;
  const response = await getBlogPostAPI(slug);
  const suggestedPosts = await getBlogPostsAPI({ pageSize: 3 });
  return {
    postData: response[0],
    suggestedPosts: suggestedPosts.results
  };
};

const shareButtonController = ref => {
  const [translateYaxes, translateHandler] = useState(150);
  const [isFixed, positionHandler] = useState(true);
  useEffect(() => {
    const listener = () => {
      const currentTop = window.pageYOffset;
      const height = innerheight(ref);

      if (currentTop > height - 150) {
        positionHandler(false);
        translateHandler(height);
      } else {
        positionHandler(true);
        translateHandler(150);
      }
    };
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return [translateYaxes, isFixed];
};

const innerheight = el => {
  let height = el.current.clientHeight;
  let style = getComputedStyle(el.current);
  height -= parseInt(style.paddingTop) + parseInt(style.paddingBottom);
  return height;
};

export default BlogPost;
