import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div>
      {" "}
      <NavLink
        to={path}
        className={(dialogData) =>
          dialogData.isActive ? classes.active : classes.item
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogsItem;
