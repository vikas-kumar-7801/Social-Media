import { MdHome } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaSunPlantWilt } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./Leftbar.module.css";

const Leftbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className={`${styles.Leftbar}`}>
      <ul className="nav nav-pills flex-column ">
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
              <MdHome />
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
              <IoIosCreate />
            </span>
            Create Post
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <SlPeople />
            </span>
            Friends
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <FaRegClock />
            </span>
            Memories
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <FaRegBookmark />
            </span>
            Saved
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <MdOutlineGroups />
            </span>
            Groups
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <MdOutlineLiveTv />
            </span>
            Vedio
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <CiShop />
            </span>
            Marketplace
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <MdOutlineDynamicFeed />
            </span>
            Feeds
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <IoStatsChartOutline />
            </span>
            Ads Manager
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className="bi pe-none me-2" width="16" height="16">
              <FaSunPlantWilt />
            </span>
            Climate Science Center
          </a>
        </li>
        <li
          onClick={() => {
            alert("Contruction Under Process");
          }}>
          <a href="#" className={`nav-link text-black`}>
            <span className={`bi pe-none me-2`} width="16" height="16">
              <IoIosArrowDown />
            </span>
            See more
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Leftbar;
