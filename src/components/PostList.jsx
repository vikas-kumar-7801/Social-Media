import styles from "./PostList.module.css";

import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import Leftbar from "./Leftbar";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <div className={`${styles.postListContainer}`}>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
