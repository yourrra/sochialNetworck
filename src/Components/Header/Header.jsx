import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.headerH2}>SocialNetwork</h2>
      <img
        className={classes.headerImg}
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
      />
      <div className={classes.headerSearch}>
        {/* <textarea placeholder="search"></textarea> */}
        <input
          className={classes.searchStyle}
          type="text"
          placeholder="search"
        />
      </div>
    </header>
  );
};

export default Header;
