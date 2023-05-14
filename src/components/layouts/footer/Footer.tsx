import Styles from "./Footer.module.scss";
import {
  footerMenu,
  besound,
  comunities,
  support,
  info,
} from "../../../assets/constants/constants";
import { Link } from "react-router-dom";

import TwitterLogo from "../../../assets/images/icons/twitter.svg";
import FacebookLogo from "../../../assets/images/icons/facebook.svg";
import InstagramLogo from "../../../assets/images/icons/instagram.svg";

interface IFooter {
  id: number;
  title: string;
  path: string;
}

const Footer = () => {
  return (
    <footer className={`${Styles.footer} d-flex flex-column flex-sm-row`}>
      <div className={Styles.footer__left}>
        <p className="text-medium text-center text-md-start">
          Bensound is the best place to find royalty-free music that pops your
          videos up!
        </p>

        <div className="d-flex gap-3 justify-content-center justify-content-md-start align-items-center">
          <img src={TwitterLogo} alt="Twiiter Logo" />
          <img src={FacebookLogo} alt="Facebook Logo" />
          <img src={InstagramLogo} alt="Instagram Logo" />
        </div>
      </div>
      <div className={`${Styles.footer__right} row`}>
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
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
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
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
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
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
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
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
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
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
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
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
    </footer>
  );
};

export default Footer;
