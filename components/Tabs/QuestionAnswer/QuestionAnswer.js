import React from "react";
import styles from "./QuestionAnswer.module.scss";

const QuestionAnswer = () => {
  return (
    <div className={styles.QuestionAnswer}>
      <h2>Question & Answer</h2>
      <div className={styles.formGroup}>
        <label>RAG Collection</label>
        <select>
          <option>Select...</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Question</label>
        <input type="text" placeholder="Enter question here" />
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

export default QuestionAnswer;
