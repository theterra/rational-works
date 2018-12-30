import Header from "./Header";
import Footer from './Footer';
import "./layout.scss";

const Layout = props => {
  return (
    <div className={props.circle ? "circle-wrapper" : ""}>
      <Header hideNavigation={props.hideNavigation}/>
      <div style={{ paddingTop: props.paddingTop}} id="wrapper">{props.children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
