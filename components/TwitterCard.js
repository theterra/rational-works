import { useEffect } from "react";
import "./twitterCard.scss";

const loadCustomTwitterCss = async () => {
  const widgetCSS = ` .timeline-Widget{border-radius: 0 !important;}`;
  let w = await document.getElementById("twitter-widget-0");
  if (w && w.contentDocument) {
    w = w.contentDocument;
    const s = document.createElement("style");
    s.innerHTML = widgetCSS;
    s.type = "text/css";
    w.head.appendChild(s);
  }
};

const TwitterCard = () => {
  useEffect(() => {
    setTimeout(() => {
      loadCustomTwitterCss();
    }, 100);
  }, []);

  return (
    <div className="twitter">
      <div className="twitter__wrapper">
        <div className="twitter__content">
          <div className="twitter__title--wrapper">
            <h3 className="twitter__title">
              To get hour to hour motivational pills <br />
              Please follow us on twitter&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
              </svg>
            </h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 30 30"
            style={{ enableBackground: "new 0 0 30 30" }}
            width="480px"
            height="480px"
            className="twitter__icon"
          >
            <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295  c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215  c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439  c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23  c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705  c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396  c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
          </svg>
        </div>
        <div className="twitter__timeline--wrapper">
          <a
            className="twitter-timeline"
            href="https://twitter.com/RationalWorks"
            data-width="500"
            data-height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
