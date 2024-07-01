import React from "react";
import styles from "./Sidebar.module.scss";
import { PiGradientLight } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.SidebarOption}>
        <div className={styles.SidebarHeader}>
          <div className={styles.SidebarHeaderTitle}>
            <PiGradientLight />
            <span>gradient</span>
          </div>

          <MdKeyboardDoubleArrowLeft />
        </div>

        <div className={styles.SidebarBtns}>
          <button>Question & Answer</button>
          <button>Document Summary</button>
          <button>Sentiment Analysis</button>
          <button>Personalization</button>
          <button>Entity Extraction</button>
          <button>PDF Extraction</button>
          <button>Audio Transcription</button>
        </div>
      </div>

      <div className={styles.SidebarAccount}>
        <CiUser />
        <span>Account</span>
      </div>
    </div>
  );
};

export default Sidebar;
