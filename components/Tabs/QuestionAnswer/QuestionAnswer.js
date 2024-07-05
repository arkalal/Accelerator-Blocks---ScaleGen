import React, { useState } from "react";
import styles from "./QuestionAnswer.module.scss";
import axios from "../../../axios/api";

const QuestionAnswer = () => {
  const [Question, setQuestion] = useState("");
  const [ResponseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      messages: [
        {
          role: "user",
          content: Question,
        },
      ],
      stream: false,
      knowledge_base_id: "test-2",
      use_context: true,
      context_filter: {
        doc_ids: [],
      },
      include_sources: true,
      max_tokens: 500,
      temperature: 0,
      limit: 10,
    };

    try {
      const res = await axios.post("chat_completions", body);
      setResponseData(res.data.choices[0].message.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.QuestionAnswer}>
      <div className={`${styles.formGroup} ${styles.ragCollection}`}>
        <label>RAG Collection</label>
        <select>
          <option>Select...</option>
        </select>
      </div>
      <div className={`${styles.formGroup} ${styles.QADocument}`}>
        <label>Document</label>
        <textarea placeholder="Enter document context here"></textarea>
      </div>
      <div className={`${styles.formGroup} ${styles.QAQuestion}`}>
        <label>Question</label>
        <input
          className={styles.QuestionAnswerInput}
          type="text"
          placeholder="Enter question here"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className={styles.formActions}>
        <button>Clear</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className={`${styles.formGroup} ${styles.QAResponse}`}>
        <label>Response</label>
        <div> {ResponseData} </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
