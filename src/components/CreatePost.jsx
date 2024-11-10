import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

import styles from './CreatePost.module.css'

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const views = 1;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";

    if (!userId) {
      alert("Please enter user Id ");
    } else if (!postTitle) {
      alert("Please enter Post Title ");
    } else if (!postBody) {
      alert("Please enter Content ");
    } else if (!tags) {
      alert("Please writes Tags ");
    } else {
      addPost(
        userId,
        postTitle,
        postBody,
        likes,
        dislikes,
        tags,
        views
      );
    }
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <h1>Create Post</h1>
        <br />
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="number"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id {only numbers upto 208}"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of likes
        </label>
        <input
          type="text"
          ref={likesElement}
          className="form-control"
          id="likes"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of dislikes
        </label>
        <input
          type="text"
          ref={dislikesElement}
          className="form-control"
          id="dislikes"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
