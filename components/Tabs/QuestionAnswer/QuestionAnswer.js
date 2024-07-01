import React from "react";
import styles from "./QuestionAnswer.module.scss";

const QuestionAnswer = () => {
  return (
    <div className={styles.QuestionAnswer}>
      <div className={styles.formGroup}>
        <label>RAG Collection</label>
        <select className={styles.ragCollection}>
          <option>Select...</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Question</label>
        <input
          className={styles.QuestionAnswerInput}
          type="text"
          placeholder="Enter question here"
        />
      </div>
      <div className={styles.formActions}>
        <button>Clear</button>
        <button>Submit</button>
      </div>
      <div className={styles.formGroup}>
        <label>Response</label>
      </div>
    </div>
  );
};

export default QuestionAnswer;
