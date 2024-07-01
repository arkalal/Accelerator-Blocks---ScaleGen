import React from "react";
import styles from "./EntityExtraction.module.scss";

const EntityExtraction = () => {
  return (
    <div className={styles.EntityExtraction}>
      <h2>Entity Extraction</h2>
      <div className={styles.formGroup}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Field Name</label>
        <input type="text" placeholder="Enter field name here" />
      </div>
      <div className={styles.formGroup}>
        <label>Type</label>
        <select>
          <option>string</option>
          <option>number</option>
          <option>boolean</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Required?</label>
        <input type="checkbox" />
      </div>
      <div className={styles.formGroup}>
        <button>Add new entity</button>
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

export default EntityExtraction;
