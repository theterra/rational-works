import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import classnames from "classnames";

import ActiveLink from "./ActiveLink";

import "./header.scss";

const Header = props => {
  const navRef = useRef();
  const [hideNav, fixNav] = hideNavBar(navRef, props.hideNavigation);

  const navStyle = classnames("nav", {
    hidden: hideNav,
    nav__fix: fixNav
  });

  return (
    <>
      <nav className={navStyle} ref={navRef}>
        <Link href="/">
          <img className="nav__logo" src="/static/assets/images/logo.png" />
        </Link>
        <div className="nav__links">
          <ActiveLink href="/blog">Blog</ActiveLink>
        </div>
        <div className="nav--right">
          <ul className="nav__share__links">
            <li className="nav__share__links__item">
              <a className="share__button" href="https://www.facebook.com/RationalWorks/" target="__blank">
                <span>
                  <svg viewBox="0 0 30 30" width="30px" height="30px">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav__share__links__item">
              <a className="share__button" href="https://twitter.com/RationalWorks" target="__blank">
                <span>
                  <svg viewBox="0 0 30 30" width="30px" height="30px">
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
    </>
  );
};

const hideNavBar = (ref, hideNavigation) => {
  const [hideNav, navHandler] = useState(false);
  const [fixNav, fixNavHandler] = useState(false);

  useEffect(() => {
    let prevTop = window.pageYOffset;
    let scrollDelta = 5;
    let scrollOffset = 50;
    let scroll = false;
    console.log(window.location.pathname);
    const listener = () => {
      const currentTop = window.pageYOffset;
      if (!scroll && hideNavigation) {
        scroll = true;
        requestAnimationFrame(() => {
          if (prevTop - currentTop > scrollDelta) {
            navHandler(false);
          } else if (
            currentTop - prevTop > scrollDelta &&
            currentTop > scrollOffset
          ) {
            navHandler(true);
          }
          prevTop = currentTop;
          scroll = false;
        });
      }

      if (currentTop > ref.current.offsetHeight) {
        fixNavHandler(true);
        document.querySelector("#wrapper").style.marginTop = -ref.current
          .offsetHeight;
      } else {
        fixNavHandler(false);
        document.querySelector("#wrapper").style.marginTop = 0;
      }
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return [hideNav, fixNav];
};

export default Header;
