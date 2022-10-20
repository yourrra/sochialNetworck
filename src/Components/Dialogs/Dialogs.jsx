import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  let DialogElement = props.state.DialogsData.map((Dialog) => (
    <DialogsItem name={Dialog.name} id={Dialog.id} />
  ));

  let MessageElement = props.state.MessagesData.map((Message) => (
    <MessageItem message={Message.message} id={Message.id} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{DialogElement}</div>
      <div className={classes.messages}>{MessageElement}</div>
    </div>
  );
};

export default Dialogs;
