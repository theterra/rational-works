import Head from "next/head";

import "./app.scss";

const Index = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          rel="stylesheet"
        />
      </Head>
      <header className="header">
        <nav className="nav">
          <div className="nav--left">
            {/* <img className="nav__logo" src="/static/assets/images/logo.png"/> */}
          </div>
          <div className="nav--right">
            <a>About</a>
            <a>Blog</a>
            <a>Faqs</a>
            <a>Terms and Conditions</a>
          </div>
        </nav>
        <div className="header__content">
          <div className="header__content--left">
            We are an Organisation that helps people change their perception
            towards how to lead life. We define purpose of life. We explain
            people how the Universe Works. We show people how the goals and
            dreams are manifested.
          </div>
          <div className="header__content--right">
            <div>
              1% people run the world while other 99% follows it. We help you to
              be in that 1%.
            </div>
            <div>
              <a className="btn btn--next">
                Learn more<span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <h1 className="header__title-left">#rational</h1>
        <h1 className="header__title-top">works</h1>
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
          <div className="content__bloat" />
        </div>
      </section>

      <section className="section-principles">
        <div className="principles__container">
          <div className="principles__item">
            <div className="principles__title">13 Independent Pillars</div>
          </div>
          {Array.from(Array(13)).map(item => {
            return (
              <div className="principles__item">
                <div
                  className="principles__item__logo-box"
                  style={{
                    backgroundImage: "url(/static/assets/images/universe.jpg)"
                  }}
                >
                  {/* <img
                   
                    className="principles__item__logo"
                   /> */}
                </div>
                <h4 className="principles__item__header">
                  <span className="principles__item__header--text">
                    Atheism
                  </span>
                </h4>
                <div className="principles__item__content">
                  Rationalism is a way of life. To be a Rationalist You must
                  follow our Constitution. Our Constitution Comprises of 8
                  Independent Pillars
                </div>
              </div>
            );
          })}
          <div className="principles__item" />
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
          <div className="quotes__item" style={{opacity: 0}}>
          <div className="quotes__item__text"></div>
          </div>
        </div>
      </section>

      <section className="section-questions">
            <div className="questions">
                <div className="questions__item">
                    <div className="questions__item--text"></div>
                    <div className="questions__item--icon"></div>
                </div>
            </div>
      </section>
    </div>
  );
};

export default Index;
