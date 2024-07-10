import React, { useState, useEffect } from "react";
import styles from "./QuestionAnswer.module.scss";
import axios from "../../../axios/api";

const QuestionAnswer = () => {
  const [question, setQuestion] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [knowledgeBases, setKnowledgeBases] = useState([]);
  const [selectedKnowledgeBase, setSelectedKnowledgeBase] = useState("");

  useEffect(() => {
    const fetchKnowledgeBases = async () => {
      try {
        const res = await axios.get("list-knowledge-bases");
        setKnowledgeBases(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchKnowledgeBases();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
      stream: false,
      knowledge_base_id: selectedKnowledgeBase,
      use_context: true,
      context_filter: {
        doc_ids: [],
      },
      include_sources: true,
      max_tokens: 500,
      temperature: 0.9,
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
        <select
          value={selectedKnowledgeBase}
          onChange={(e) => setSelectedKnowledgeBase(e.target.value)}
        >
          <option value="">Select...</option>
          {knowledgeBases.map((kb) => (
            <option key={kb.id} value={kb.id}>
              {kb.name}
            </option>
          ))}
        </select>
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
        <div>{responseData}</div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
