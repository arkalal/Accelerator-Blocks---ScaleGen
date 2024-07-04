import React from "react";
import styles from "./Personalization.module.scss";

const Personalization = () => {
  return (
    <div className={styles.Personalization}>
      <div className={`${styles.formGroup} ${styles.PersonaliseDocument}`}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>

      <div className={styles.PersonaliseTargetAudience}>
        <label>Target Audience</label>

        <div className={styles.PersonTargetBox}>
          <div className={`${styles.PersonaliseTarget}`}>
            <input
              type="text"
              placeholder="Enter description of audience here"
            />
          </div>

          <div className={styles.formActions}>
            <button>Clear</button>
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className={`${styles.formGroup} ${styles.PersonaliseResponse}`}>
        <label>Response</label>
        <div></div>
      </div>
    </div>
  );
};

export default Personalization;
