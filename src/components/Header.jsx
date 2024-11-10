import { IoIosSearch } from "react-icons/io";

import { LuHome } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiStore2Line } from "react-icons/ri";
import { MdOutlineGroups } from "react-icons/md";

import { IoAppsSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";



import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.box1}`}>
        <a href="" className={`${styles.logoContainerAnchor}`}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/495/985/non_2x/facebook-social-media-logo-icon-free-png.png"
            alt="Logo"
            className={styles.logoImage}
          />
        </a>

        <div className={`${styles.searchContainer}`}>
          <span className={`${styles.searchIcon}`}>
            <IoIosSearch />
          </span>
          <input
            type="search"
            className={`${styles.searchInput}`}
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>

      <div className={`${styles.box2}`}>
        <a href="#" className={`${styles.home} `}>
          <LuHome />
        </a>
        <a href="#" className={`${styles.friends} `}>
          <SlPeople />
        </a>
        <a href="#" className={`${styles.video} `}>
          <MdOutlineOndemandVideo />
        </a>
        <a href="#" className={`${styles.store} `}>
          <RiStore2Line />
        </a>
        <a href="#" className={`${styles.people} `}>
          <MdOutlineGroups />
        </a>
      </div>

      <div className={`${styles.box3}`}>
        <a href="#" className={`${styles.app} `}>
          <IoAppsSharp />
        </a>
        <a href="#" className={`${styles.messenger} `}>
          <FaFacebookMessenger />
        </a>
        <a href="#" className={`${styles.bell} `}>
          <GoBellFill />
        </a>
        <a href="#" className={`${styles.profile} `}> 
          🧑‍💼
        </a>
      </div>
    </header>
  );
};

export default Header;
