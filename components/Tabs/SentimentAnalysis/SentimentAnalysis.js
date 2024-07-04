import React from "react";
import styles from "./SentimentAnalysis.module.scss";
import { FaPlus } from "react-icons/fa6";

const SentimentAnalysis = () => {
  return (
    <div className={styles.SentimentAnalysis}>
      <div className={`${styles.formGroup} ${styles.SentAnalysDocument}`}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>

      <div className={styles.formActions}>
        <button>Clear</button>
        <button>Submit</button>
      </div>

      <div className={`${styles.formGroup} ${styles.SentAnalysTraining}`}>
        <label>Training Examples (optional)</label>
        <button>
          {" "}
          <FaPlus /> Add new example
        </button>
      </div>

      <div className={`${styles.formGroup} ${styles.SentAnalysResponse}`}>
        <label>Response</label>
        <div></div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
