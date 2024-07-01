import React from "react";
import styles from "./SentimentAnalysis.module.scss";

const SentimentAnalysis = () => {
  return (
    <div className={styles.SentimentAnalysis}>
      <h2>Sentiment Analysis</h2>
      <div className={styles.formGroup}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Training Examples (optional)</label>
        <button>Add new example</button>
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

export default SentimentAnalysis;
