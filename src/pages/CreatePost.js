import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title: </label>
          <input placeholder="Title..." />
        </div>
        <div className="inputGp">
          <label>Post: </label>
          <textarea placeholder="Post..."></textarea>
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
