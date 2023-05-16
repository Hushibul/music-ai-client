import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.scss";

import { menu, quickAccess } from "../../../assets/constants/constants";

import AppleLogo from "../../../assets/images/icons/apple.svg";
import PlayStoreLogo from "../../../assets/images/icons/google-play.svg";
import FacebookLogo from "../../../assets/images/icons/facebook.svg";
import TwitterLogo from "../../../assets/images/icons/twitter.svg";
import InstagramLogo from "../../../assets/images/icons/instagram.svg";
import VimeLogo from "../../../assets/images/icons/vime.svg";

interface INav {
  id: number;
  title: string;
  image?: string;
  path: string;
}

const SideBar = () => {
  return (
    <nav
      className={`${Styles.sidebar} sideNavbar d-none flex-column d-md-flex`}
    >
      <div>
        <div>
          <h3
            className={`${Styles.sidebar__paddings} nav-heading text-uppercase d-block my-4`}
          >
            Menu
          </h3>

          {menu.map((item: INav) => (
            <NavLink
              key={item.id}
              className="d-flex align-items-center gap-3 ps-3 text-decoration-none py-2"
              to={item.path}
            >
              <img
                className={Styles.sidebar__paddings}
                src={item.image}
                alt="item_icon"
              />
              <span className="nav-link">{item.title}</span>
            </NavLink>
          ))}
        </div>

        <div>
          <h3
            className={`${Styles.sidebar__paddings} nav-heading text-uppercase my-4`}
          >
            Quick Access
          </h3>
          {quickAccess.map((item: INav) => (
            <NavLink
              key={item.id}
              className="d-flex align-items-center nav-link gap-3 ps-3 text-decoration-none py-2"
              to={item.path}
            >
              <img
                className={Styles.sidebar__paddings}
                src={item.image}
                alt="item_icon"
              />
              <span className="nav-link">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <div
          className={`${Styles.sidebar__social} ${Styles.sidebar__paddings} ms-2`}
        >
          <a
            href="https://www.apple.com/app-store/"
            className="d-flex gap-3 align-items-center mb-3"
          >
            <img src={AppleLogo} alt="Apple_Logo" />
            <span>App Store</span>
          </a>
          <a
            href="https://play.google.com/store"
            className="d-flex gap-3 align-items-center mb-3"
          >
            <img src={PlayStoreLogo} alt="GooglePlay_Logo" />
            <span>Play Store</span>
          </a>
        </div>
        <hr />
        <div
          className={`${Styles.sidebar__paddings} d-flex gap-4 ms-2 mt-4 pb-3 align-items-center`}
        >
          <img src={FacebookLogo} alt="Facebook_Logo" />
          <img src={TwitterLogo} alt="Twitter Logo" />
          <img src={InstagramLogo} alt="Instagram Logo" />
          <img src={VimeLogo} alt="Vime Logo" />
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
