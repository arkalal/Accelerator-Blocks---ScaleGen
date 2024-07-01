import React from "react";
import styles from "./PDFExtraction.module.scss";

const PDFExtraction = () => {
  return (
    <div className={styles.PDFExtraction}>
      <h2>PDF Extraction</h2>
      <div className={styles.formGroup}>
        <label>Add file</label>
        <input type="file" />
      </div>
      <div className={styles.formGroup}>
        <label>Response</label>
        <textarea readOnly></textarea>
      </div>
      <div className={styles.formActions}>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default PDFExtraction;
