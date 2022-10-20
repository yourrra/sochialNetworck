import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.profileBlock}>HeadProfile</div>
      <div className={classes.profileBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
