import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss";

const Layout = props => {
  return (
    <div className={props.circle ? "circle-wrapper" : ""}>
      <Header
        hideNavigation={props.hideNavigation}
        shadowLine={props.shadowLine}
      />
      {props.showVerticalTitle && (
        <div className="vertical">
          <h4 className="vertical__title">
            <span>Rational Works</span>
          </h4>
        </div>
      )}
      <div
        style={{ paddingTop: props.paddingTop, overflow: "hidden", height: '100%' }}
        id="wrapper"
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
