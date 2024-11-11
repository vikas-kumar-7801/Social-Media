import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Leftbar from "./components/Leftbar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider, { PostListContext } from "./store/post-list-store";
import Rightbar from "./components/Rightbar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Header></Header>
        <Leftbar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}></Leftbar>
        <div className="content">
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        </div>
        <Rightbar/>
      </div>
      {selectedTab === "Create Post" ? <Footer /> : ""}
    </PostListProvider>
  );
}

export default App;
