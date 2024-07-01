import React from "react";
import styles from "./DocumentSummary.module.scss";

const DocumentSummary = () => {
  return (
    <div className={styles.DocumentSummary}>
      <h2>Document Summary</h2>
      <div className={styles.formGroup}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Summary Length (optional)</label>
        <select>
          <option>Select...</option>
        </select>
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

export default DocumentSummary;
