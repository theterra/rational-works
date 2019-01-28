import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* <h2 className="footer__title">#RATIONAL WORKS</h2> */}
        <div className="footer__navigation">
          <div className="footer__sub-part">
            <h2 className="footer__sub-part--title">Head Office</h2>
            <p className="footer__sub-part--desc">
              Rational Works
              <br />
              Address: via privata branda castiglioni 2/1, milan, lombardy 20156, it
            </p>
          </div>
          <div className="footer__sub-part">
            <h2 className="footer__sub-part--title">Contact us</h2>
            Email:&nbsp;
            <a
              className="btn text__white"
              href="mailto:rationalworks@yahoo.com"
              target="_top"
            >
              rationalworks@yahoo.com
            </a>
          </div>
          <div className="footer__sub-part">
            <h2 className="footer__sub-part--title">Founder</h2>
            <a
              className="btn text__white"
              href="https://www.linkedin.com/in/sr7ram/"
              target="_blank"
            >
              Sriram Veerabrahmam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
