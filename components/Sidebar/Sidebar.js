"use client";

import React from "react";
import styles from "./Sidebar.module.scss";
import { PiGradientLight } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import * as dispatcher from "../../redux/store/dispatchers";
import { connect } from "react-redux";
import scaleGenLogo from "../../assets/images/logo_white.png";
import Image from "next/image";

const Sidebar = ({ selectedOption, dispatchSelectedOption }) => {
  const handleSelection = (option) => {
    dispatchSelectedOption(option);
  };

  return (
    <div className={styles.Sidebar}>
      <div className={styles.SidebarOption}>
        <div className={styles.SidebarHeader}>
          <div className={styles.SidebarHeaderTitle}>
            <Image className={styles.Logo} src={scaleGenLogo} alt=""></Image>
          </div>

          <MdKeyboardDoubleArrowLeft
            className={styles.SidebarHeaderBackArrow}
          />
        </div>
        <div className={styles.SidebarBtns}>
          {[
            "Question & Answer",
            "Document Summary",
            "Sentiment Analysis",
            "Personalization",
            "Entity Extraction",
            // "PDF Extraction",
            // "Audio Transcription",
          ].map((option) => (
            <button
              key={option}
              className={selectedOption === option ? styles.active : ""}
              onClick={() => handleSelection(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.SidebarAccount}>
        <CiUser className={styles.SidebarUserIcon} />
        <span>Account</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ gradient }) => ({
  selectedOption: gradient.selectedOption,
});

export default connect(mapStateToProps, dispatcher)(Sidebar);
