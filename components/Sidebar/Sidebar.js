"use client";

import React from "react";
import styles from "./Sidebar.module.scss";
import { PiGradientLight } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import * as dispatcher from "../../redux/store/dispatchers";
import { connect } from "react-redux";

const Sidebar = ({ selectedOption, dispatchSelectedOption }) => {
  const handleSelection = (option) => {
    dispatchSelectedOption(option);
  };

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
          {[
            "Question & Answer",
            "Document Summary",
            "Sentiment Analysis",
            "Personalization",
            "Entity Extraction",
            "PDF Extraction",
            "Audio Transcription",
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
        <CiUser />
        <span>Account</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ gradient }) => ({
  selectedOption: gradient.selectedOption,
});

export default connect(mapStateToProps, dispatcher)(Sidebar);
