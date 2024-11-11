import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
  fetching: false,
  IMAGE_URLS: [],
  profileName: [],
});

const profileName = [
  "Oliver Smith",
  "Emma Johnson",
  "Liam Williams",
  "Sophia Brown",
  "Noah Jones",
  "Ava Garcia",
  "Elijah Miller",
  "Isabella Davis",
  "James Martinez",
  "Mia Rodriguez",
  "Benjamin Hernandez",
  "Amelia Lopez",
  "Lucas Gonzalez",
  "Charlotte Wilson",
];

const IMAGE_URLS = [
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1921/1081",
  "https://picsum.photos/1922/1082",
  "https://picsum.photos/1923/1083",
  "https://picsum.photos/1924/1084",
  "https://picsum.photos/1925/1085",
  "https://picsum.photos/1926/1086",
  "https://picsum.photos/1927/1087",
  "https://picsum.photos/1928/1088",
  "https://picsum.photos/1929/1089",
  "https://picsum.photos/1930/1090",
  "https://picsum.photos/1931/1091",
  "https://picsum.photos/1932/1092",
  "https://picsum.photos/1933/1093",
  "https://picsum.photos/1934/1094",
  "https://picsum.photos/1935/1095",
  "https://picsum.photos/1936/1096",
  "https://picsum.photos/1937/1097",
  "https://picsum.photos/1938/1098",
  "https://picsum.photos/1939/1099",
  "https://picsum.photos/1940/1100",
  "https://picsum.photos/1941/1101",
  "https://picsum.photos/1942/1102",
  "https://picsum.photos/1943/1103",
  "https://picsum.photos/1944/1104",
  "https://picsum.photos/1945/1105",
  "https://picsum.photos/1946/1106",
  "https://picsum.photos/1947/1107",
  "https://picsum.photos/1948/1108",
  "https://picsum.photos/1949/1109",
];

const imageMergeApi = (allPosts) => {
  for (let i = 0; i < allPosts.length; i++) {
    Object.assign(allPosts[i], { image: `${IMAGE_URLS[i]}` });
  }
  return allPosts;
};

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = imageMergeApi(action.payload.posts);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (
    userId,
    postTitle,
    postBody,
    likes,
    dislikes,
    tags,
    views
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: {
          likes: likes || 0,
          dislikes: dislikes || 0,
        },
        userId: userId,
        tags: tags,
        views,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
        fetching,
        IMAGE_URLS,
        profileName,
      }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
