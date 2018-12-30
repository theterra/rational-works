import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import classnames from "classnames";

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
        <div className="nav--left">
          <Link href="/">
            <img className="nav__logo" src="/static/assets/images/logo.png" />
          </Link>
        </div>
        <div className="nav--right">
          <Link href="/blog">
            <a className="btn">Blog</a>
          </Link>
          <a>Faqs</a>
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
