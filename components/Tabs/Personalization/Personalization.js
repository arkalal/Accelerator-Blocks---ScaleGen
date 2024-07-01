import React from "react";
import styles from "./Personalization.module.scss";

const Personalization = () => {
  return (
    <div className={styles.Personalization}>
      <h2>Personalization</h2>
      <div className={styles.formGroup}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Target Audience</label>
        <input type="text" placeholder="Enter description of audience here" />
      </div>
      <div className={styles.formGroup}>
        <label>Response</label>
        <textarea readOnly></textarea>
      </div>
      <div className={styles.formActions}>
        <button>Clear</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Personalization;
