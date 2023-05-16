import Styles from "./NavBar.module.scss";

import BrandLogo from "../../../assets/images/logo/BrandLogo.svg";
import SearchIcon from "../../../assets/images/icons/search.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className={`${Styles.navbar} shadow-sm d-flex`}>
      <img
        className={Styles.navbar__brandLogo}
        src={BrandLogo}
        alt="Brand Logo"
      />

      <div
        className={`${Styles.navbar__searchbar} shadow-sm d-flex align-items-center justify-content-between`}
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-4 py-1 d-none d-md-block"
          type="text"
          placeholder="Artist, track or release"
        />

        <img src={SearchIcon} alt="Search Icon" className="me-md-4" />
      </div>

      <div className="d-flex gap-3 align-items-center ms-md-auto me-3">
        <Link to={"#sign-in"}>
          <button className="button-light">Sign In</button>
        </Link>
        <Link to={"#get-started"}>
          <button className="button-red">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
