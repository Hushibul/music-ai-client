//=== Libraries
import { Link } from "react-router-dom";

//=== Styles
import Styles from "./Footer.module.scss";

//=== Constant Variables
import {
  besound,
  comunities,
  footerMenu,
  info,
  support,
} from "../../../assets/constants/constants";

//=== Icons
import AppleIcon from "../../../assets/images/icons/appleDark.svg";
import FacebookLogo from "../../../assets/images/icons/facebook.svg";
import InstagramLogo from "../../../assets/images/icons/instagram.svg";
import PlayStoreIcon from "../../../assets/images/icons/playstoreDark.svg";
import TwitterLogo from "../../../assets/images/icons/twitter.svg";

interface IFooter {
  id: number;
  title: string;
  path: string;
}

const Footer = () => {
  return (
    <section className={`${Styles.footer}`}>
      <div className={Styles.footer__wrapper}>
        <div
          className={`d-flex flex-column flex-sm-row ${Styles.footer__spacing}`}
        >
          <div className={Styles.footer__left}>
            <p className="text-medium text-center px-5 px-sm-0 text-md-start">
              Bensound is the best place to find royalty-free music that pops
              your videos up!
            </p>

            <div className="d-flex gap-3 gap-md-4 mb-3 mb-md-0 justify-content-center justify-content-md-start align-items-center">
              <a href="twitter.com">
                <img src={TwitterLogo} alt="Twiiter Logo" />
              </a>
              <a href="facebook.com">
                <img src={FacebookLogo} alt="Facebook Logo" />
              </a>
              <a href="instagram.com">
                <img src={InstagramLogo} alt="Instagram Logo" />
              </a>
            </div>
          </div>
          <div className={`${Styles.footer__right} row pb-3`}>
            <div className="col-6 col-md-4 col-lg-3 col-xl-4 col-xxl-2">
              <h4 className="nav-heading mb-3">Menu</h4>

              <ul className="list-unstyled">
                {footerMenu.map((item: IFooter) => (
                  <li key={item.id}>
                    <Link
                      className="text-medium mb-3 text-decoration-none"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-4 col-xxl-2">
              <h4 className="nav-heading mb-3">Besound</h4>

              <ul className="list-unstyled">
                {besound.map((item: IFooter) => (
                  <li key={item.id}>
                    <Link
                      className="text-medium mb-3 text-decoration-none"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-4 col-xxl-2">
              <h4 className="nav-heading mb-3">Info</h4>

              <ul className="list-unstyled">
                {info.map((item: IFooter) => (
                  <li key={item.id}>
                    <Link
                      className="text-medium mb-3 text-decoration-none"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-4 col-xxl-2">
              <h4 className="nav-heading mb-3">Communities</h4>

              <ul className="list-unstyled">
                {comunities.map((item: IFooter) => (
                  <li key={item.id}>
                    <Link
                      className="text-medium mb-3 text-decoration-none"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-4 col-xxl-2">
              <h4 className="nav-heading mb-3">Support</h4>

              <ul className="list-unstyled">
                {support.map((item: IFooter) => (
                  <li key={item.id}>
                    <Link
                      className="text-medium mb-3 text-decoration-none"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-4 col-xxl-2">
              <h4 className="nav-heading mb-3">Info</h4>

              <ul className="list-unstyled">
                {info.map((item: IFooter) => (
                  <li key={item.id}>
                    <Link
                      className="text-medium mb-3 text-decoration-none"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-3 pb-2">
          <p className="text-medium text-center text-md-start m-0">
            Bensound’s Royalty Free Music - Copyright © 2012-2023
          </p>

          <div className="d-flex gap-2 gap-md-4 mt-3 mt-md-0 align-items-center flex-wrap justify-content-center">
            <a
              href="shopify.com"
              className="text-medium fw-bold text-decoration-none"
            >
              @soptiyfy.com
            </a>

            <a
              href="https://www.apple.com/app-store/"
              className="d-flex align-items-center text-decoration-none gap-3"
            >
              <img src={AppleIcon} alt="Apple Icon" />
              <span className="text-small ">Apple Store</span>
            </a>
            <a
              href="google-play.comhttps://play.google.com/store/"
              className="d-flex align-items-center text-decoration-none gap-3"
            >
              <img src={PlayStoreIcon} alt="Apple Icon" />
              <span className="text-small ">Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
