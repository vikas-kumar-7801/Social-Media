import { MdHome } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import styles from "./Leftbar.module.css";



const Leftbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className={`${styles.Leftbar}`}
      style={{ width: "180px" }}>

      
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}>
          <a
            href="#"
            className={`nav-link text-black ${
              selectedTab === "Home" && "active text-white"
            }`}
            aria-current="page">
            <span className="bi pe-none me-2" width="16" height="16">
              <MdHome/>
            </span>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Create Post");
          }}>
          <a
            href="#"
            className={`nav-link text-black ${
              selectedTab === "Create Post" && "active text-white"
            }`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <IoIosCreate/>
            </span>
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Leftbar;
