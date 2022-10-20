import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://klike.net/uploads/posts/2021-12/1638345229_2.jpg" />
      {props.message}
      <div>
        <span>Like</span> {props.likeCounter}
      </div>
    </div>
  );
};

export default Post;
