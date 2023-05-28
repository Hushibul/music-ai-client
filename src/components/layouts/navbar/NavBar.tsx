import Styles from "./NavBar.module.scss";

import SearchIcon from "../../../assets/images/icons/search.svg";
import BrandLogo from "../../../assets/images/logo/BrandLogo.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className={`${Styles.navbar} shadow-sm d-flex`}>
      <Link className={Styles.navbar__brandLogo} to={"/"}>
        <img className="img-fluid" src={BrandLogo} alt="Brand Logo" />
      </Link>

      <div
        className={`${Styles.navbar__searchbar} shadow-sm d-none d-md-flex align-items-center justify-content-between`}
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-4 py-1"
          type="search"
          placeholder="Artist, track or release"
        />

        <img
          src={SearchIcon}
          alt="Search Icon"
          className={Styles.navbar__searchbar_searchIcon}
        />
      </div>

      <div className="d-flex gap-3 align-items-center ms-auto me-3">
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
