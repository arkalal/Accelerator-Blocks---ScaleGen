import React from "react";
import styles from "./DocumentSummary.module.scss";
import { FaPlus } from "react-icons/fa6";

const DocumentSummary = () => {
  return (
    <div className={styles.DocumentSummary}>
      <div className={`${styles.formGroup} ${styles.DocSummaryDocument}`}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>

      <div className={styles.formActions}>
        <button>Clear</button>
        <button>Submit</button>
      </div>

      <div className={`${styles.formGroup} ${styles.DocSummaryLength}`}>
        <label>Summary Length (optional)</label>
        <select>
          <option>Select...</option>
        </select>
      </div>

      <div className={`${styles.formGroup} ${styles.DocSummaryTraining}`}>
        <label>Training Examples (optional)</label>
        <button>
          {" "}
          <FaPlus /> Add new example
        </button>
      </div>

      <div className={`${styles.formGroup} ${styles.DocSummaryResponse}`}>
        <label>Response</label>
        <div></div>
      </div>
    </div>
  );
};

export default DocumentSummary;
