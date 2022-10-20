import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.PostsData.map((PostEl) => (
    <Post
      message={PostEl.message}
      likeCounter={PostEl.likeCounter}
      id={PostEl.id}
    />
  ));
  return (
    <div className={classes.postBlock}>
      <div>
        My post
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>New Post</button>
          </div>
        </div>
        <div className={classes.posts}>{postElement}</div>
      </div>
    </div>
  );
};

export default MyPosts;
