import { NavLink } from "react-router-dom";
import Classes from "./NavBar.module.scss";

import { menu, quickAccess } from "../../../assets/constants/constants";

import AppleLogo from "../../../assets/images/icons/apple.svg";
import PlayStoreLogo from "../../../assets/images/icons/google-play.svg";
import FacebookLogo from "../../../assets/images/icons/facebook.svg";
import TwitterLogo from "../../../assets/images/icons/twitter.svg";
import InstagramLogo from "../../../assets/images/icons/twitter.svg";
import VimeLogo from "../../../assets/images/icons/vime.svg";

interface INav {
  id: number;
  title: string;
  image?: string;
  path: string;
}

const SideBar = () => {
  return (
    <div className={`${Classes.sidebar} shadow-sm d-none d-md-block`}>
      <nav className="flex-column">
        <h3 className="subtitle d-block my-4">Menu</h3>

        {menu.map((item: INav) => (
          <NavLink
            key={item.id}
            className="d-flex align-items-center gap-3 ms-2 text-decoration-none mb-3"
            to={item.path}
          >
            <img src={item.image} alt="item_icon" />
            <span className="text-medium">{item.title}</span>
          </NavLink>
        ))}

        <div className="d-flex flex-column gap-5">
          <div>
            <h3 className="subtitle my-4">Quick Access</h3>
            {quickAccess.map((item: INav) => (
              <NavLink
                key={item.id}
                className="d-flex align-items-center gap-3 ms-2 text-decoration-none mb-3"
                to={item.path}
              >
                <img src={item.image} alt="item_icon" />
                <span className="text-medium">{item.title}</span>
              </NavLink>
            ))}
          </div>
          <div className="">
            <div className={`${Classes.sidebar__social} ms-2`}>
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
            <div className="d-flex gap-4 ms-3 mt-5 align-items-center">
              <img src={FacebookLogo} alt="Facebook_Logo" />
              <img src={TwitterLogo} alt="Twitter Logo" />
              <img src={InstagramLogo} alt="Instagram Logo" />
              <img src={VimeLogo} alt="Vime Logo" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
