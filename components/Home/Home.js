import React from "react";
import styles from "./Home.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import ReduxProvider from "../../redux/ReduxProvider";

const Home = () => {
  return (
    <div className={styles.Home}>
      <ReduxProvider>
        <Sidebar />
      </ReduxProvider>

      <ReduxProvider>
        <Content />
      </ReduxProvider>
    </div>
  );
};

export default Home;
