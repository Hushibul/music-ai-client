import Classes from "./NavBar.module.scss";

import BrandLogo from "../../../assets/images/logo/BrandLogo.svg";
import SearchIcon from "../../../assets/images/icons/search.svg";
import ButtonPrimary from "../../base/ButtonPrimary";

const NavBar = () => {
  return (
    <div className={`${Classes.navbar} shadow-sm`}>
      <div className={`d-flex align-items-center py-3`}>
        <img
          src={BrandLogo}
          alt="Brand Logo"
          className={`${Classes.navbar__brandLogo} ms-1 ms-md-5`}
        />

        <div
          className={`shadow-sm d-none d-md-flex align-items-center justify-content-between ms-1 ms-lg-5 py-2 px-md-3 ${Classes.navbar__searchbar}`}
        >
          <input
            type="text"
            placeholder="Artist, track or release"
            className="border-0 w-md-auto"
          />
          <img src={SearchIcon} alt="search-icon" className="me-3" />
        </div>

        <div
          className={`d-flex gap-1 gap-md-2 ms-1 ms-sm-5 ms-md-auto me-md-2 me-lg-5`}
        >
          <ButtonPrimary color="light" title="Sign In" textColor="dark" />
          <ButtonPrimary color="red" title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
