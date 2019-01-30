import { Link } from "../routes";
import Head from "next/head";

import Layout from "../components/Layout";
// import PillarCards from "../components/PillarCards";
import MetaContent from "../components/MetaContent";
import { getContentUrl } from "../components/common/getContentUrl";

import "./index.scss";
import SlideShow from "../components/SlideShow";

import TwitterCard from "../components/TwitterCard";

const Index = () => {
  const [contentUrl] = getContentUrl();
  const scrollToView = id => {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <Layout circle paddingTop={"7rem"} showVerticalTitle>
      <MetaContent
        contentType={"article"}
        contentTitle={"Be a rationalist"}
        contentDescription={
          "1% people run the world while other 99% follows it. We help you to be in that 1%."
        }
        contentImage={"/static/assets/images/logo.png"}
        contentUrl={contentUrl}
      />

      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <header className="header">
        <div className="header__content">
          <div className="header__content--left">
            <p className="header__content__text header__content__text--large">
              1% people run the world while other 99% follows it.
              <br />
              <span className="highlight">We help you to be in that 1%</span>
            </p>
            <p className="header__content__text header__content__text--small">
              We are an Organisation that helps people change their perception
              towards how to lead life. We define purpose of life. We explain
              people how the Universe Works. We show people how the goals and
              dreams are manifested
            </p>
            <div>
              <a
                className="btn btn--next"
                onClick={() => scrollToView("#about")}
              >
                Learn more<span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="header__content--right">
            <div className="show__images">
              <div className="show__images__item" />
            </div>
          </div>
        </div>
        {/* <h1 className="header__title-left">#rational</h1>
        <h1 className="header__title-top">works</h1> */}
      </header>

      <section className="section-left">
        <div className="content" id="about">
          <div className="content__desc">
            <div className="content__item">
              <p className="content__item--head">
                How do you change their Perception?
              </p>
              <p className="content__item--sub">
                By making them familiar with Rationalism.
              </p>
            </div>
            <div className="content__item">
              <p className="content__item--head">
                What is <span className="highlight">Rationalism</span>?
              </p>
              <p className="content__item--sub">
                Rationalism is a way to lead your life. You can choose to follow
                it or not. There is no right or wrong in this world. No matter
                whatever you do, there are a set of people who will always
                criticise. So, it’s upto you to decide how to lead your life. I
                am presenting you a different way to lead life. Now it’s your
                turn to follow it or not.
              </p>
            </div>
          </div>
          {/* <div className="content__bloat">
            <ul className="content__bloat__list">
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Atheism</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Law of Attraction</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Positivity</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Objectivism</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Happiness</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Discipline</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Fearless</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Social</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Behaviour</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Healthy</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Determination</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Service</span>
                </Link>
              </li>
              <li className="content__bloat__list__item">
                <Link href="/constitution">
                  <span className="highlight__hover">Freedom</span>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* <section className="section-principles">
        <div className="principles">
          <PillarCards />
        </div>
      </section> */}

      <section className="section-principles">
        <div className="principles">
          <SlideShow />
        </div>
      </section>

      <section className="section-quotes">
        <div className="quotes">
          <div className="quotes__item">
            <div className="quotes__item__text">
              Strength does not come from physical capacity It comes from an
              indomitable will
            </div>
          </div>
          <div className="quotes__item">
            <div className="quotes__item__text">
              It takes no time for the universe to manifest
            </div>
          </div>
          <div className="quotes__item">
            <div className="quotes__item__text">
              Falling down is an accident. Staying down is a choice.
            </div>
          </div>
          <div className="quotes__item">
            <div className="quotes__item__text">
              Hard work beats talent when talent doesn’t work hard
            </div>
          </div>
          {/* <div className="quotes__item" style={{ opacity: 0, minHeight: 0 }}>
            <div className="quotes__item__text" />
          </div> */}
        </div>
      </section>
      <section className="section-twitter" id="twitter">
        <TwitterCard />
      </section>
      {/* <section className="section-questions">
        <div className="questions">
          <div className="questions__item">
            <div className="questions__item--text" />
            <div className="questions__item--icon" />
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Index;
