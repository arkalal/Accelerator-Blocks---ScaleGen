import React from "react";
import styles from "./EntityExtraction.module.scss";
import { FaPlus } from "react-icons/fa6";

const EntityExtraction = () => {
  return (
    <div className={styles.EntityExtraction}>
      <div className={styles.EntityExtractionBox}>
        <div className={styles.EntityExtractionDocument}>
          <label>Document</label>
          <textarea placeholder="Enter document context here"></textarea>
        </div>

        <div className={styles.EntityExtractionFormActions}>
          <div className={styles.EntityExtractionPanel}>
            <div className={styles.EntityExtractionField}>
              <label>Field Name</label>
              <input type="text" placeholder="Enter field name here" />
            </div>

            <div className={styles.EntityExtractionType}>
              <label>Type</label>
              <select>
                <option>string</option>
                <option>number</option>
                <option>boolean</option>
              </select>
            </div>

            <div className={styles.EntityExtractionRequired}>
              <label>Required?</label>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </div>
          </div>

          <div className={styles.EntityExtractionAddEntity}>
            <button>
              {" "}
              <FaPlus /> Add new entity
            </button>
          </div>

          <div className={styles.formActions}>
            <button>Clear</button>
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className={styles.EntityExtractionResponse}>
        <label>Response</label>
        <div></div>
      </div>
    </div>
  );
};

export default EntityExtraction;
