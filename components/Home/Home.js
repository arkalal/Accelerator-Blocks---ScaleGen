import React from "react";
import styles from "./Home.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
