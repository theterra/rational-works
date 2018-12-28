import Head from "next/head";
import Link from "next/link";

import "./index.scss";

const Index = () => {
  return (
    <div className="circle-wrapper">
      <header className="header">
        <nav className="nav">
          <div className="nav--left">
            {/* <img className="nav__logo" src="/static/assets/images/logo.png"/> */}
          </div>
          <div className="nav--right">
            <a>About</a>
            <Link href="/blog">
              <a className="btn">Blog</a>
            </Link>
            <a>Faqs</a>
            <a>Terms and Conditions</a>
          </div>
        </nav>
        <div className="header__content">
          <div className="header__content--left">
            <p className="header__content__text header__content__text--large">
              1% people run the world while other 99% follows it.<br/> <span className="highlight">We help you to
              be in that 1%</span>
            </p>
            <p className="header__content__text header__content__text--small">
              We are an Organisation that helps people change their perception
              towards how to lead life. We define purpose of life. We explain
              people how the Universe Works. We show people how the goals and
              dreams are manifested
            </p>
            <div>
              <a className="btn btn--next">
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
        <div className="content">
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
              <p className="content__item--head">What is Rationalism?</p>
              <p className="content__item--sub">
                Rationalism is a way of life. To be a Rationalist You must
                follow our Constitution. Our Constitution Comprises of 13
                Independent Pillars.
              </p>
            </div>
          </div>
          <div className="content__bloat">
            <ul className="content__bloat__">
              <li />
            </ul>
          </div>
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
          <div className="quotes__item" style={{ opacity: 0 }}>
            <div className="quotes__item__text" />
          </div>
        </div>
      </section>

      <section className="section-questions">
        <div className="questions">
          <div className="questions__item">
            <div className="questions__item--text" />
            <div className="questions__item--icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
