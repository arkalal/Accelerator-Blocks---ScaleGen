"use client";

import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { PiGradientLight } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import * as dispatcher from "../../redux/store/dispatchers";
import { connect } from "react-redux";

const Sidebar = ({ dispatchSelectedOption }) => {
  const [selected, setSelected] = useState("Question & Answer");

  const handleSelection = (option) => {
    setSelected(option);
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
              className={selected === option ? "active" : ""}
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

export default connect(null, dispatcher)(Sidebar);
