import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import { FaComment } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import style from "./Post.module.css";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card post-card" style={{ width: "37rem" }}>
      <div className="card-body">
        <div className={`${style.profileContainer}`}>
          <img src="data:image/png;base64,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" alt="" class={`${style.profile}`} />
          <div className={`${style.profileNameConatiner}`}>
            <h6>user{post.userId}</h6>
            <p>{post.reactions.dislikes} minutes ago</p>
          </div>
          <span
            className="text-black deleteButton"
            onClick={() => deletePost(post.id)}>
            x
          </span>
        </div>
        <h5 className="card-title">
          <br />
          {post.title}
          <br />
          {post.tags.map((tags, index) => (
            <span className={`${style.hashtag} badge text-primary`} key={index}>
              #{tags}
            </span>
          ))}
        </h5>
        <img
          /* src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_ri9E8XxXRafeIMA4QGosabTMk_wP7pTDQ&s" */
          src={post.image}
          alt=""
          className={`${style.contentImg}`}
          loading="lazy" 
        />
        <br />
        <br />
        <p className="card-text">{post.body}</p>
        <br />
        <span className="badge text-bg-success">
          👍 {post.reactions.likes}
        </span>
        <span className="badge text-bg-danger reactions">
          <FaComment /> {post.reactions.dislikes}
        </span>
        &nbsp;
        <span className="badge text-bg-danger reactions">
          <IoEyeSharp /> {post.views}
        </span>
      </div>
    </div>
  );
};

export default Post;
