import styles from "./Rightbar.module.css";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Rightbar = ({ selectedTab, setSelectedTab }) => {
  const { profileName, IMAGE_URLS } = useContext(PostListContext);
  const combinedProfiles = profileName.map((name, index) => ({
    name: name,
    imageUrl: IMAGE_URLS[index],
  }));

  return (
    <div className={`${styles.Rightbar}`}>
      <ul className="nav nav-pills flex-column mb-auto">
        <h5>Contacts</h5>
        {combinedProfiles.map((item, index) => (
          <li
            className="nav-item" key={index }>
            <a
              href="#"
              className={`nav-link text-black`}
              aria-current="page">
              <span className="bi pe-none me-2" width="16" height="16">
                <img src={item.imageUrl} alt="Image" className={`${styles.profileImage}`} />
              </span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rightbar;
