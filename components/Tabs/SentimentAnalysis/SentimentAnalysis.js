import React, { useState } from "react";
import styles from "./SentimentAnalysis.module.scss";
import { FaPlus } from "react-icons/fa6";
import axios from "../../../axios/api";

const SentimentAnalysis = () => {
  const [Value, setValue] = useState("");
  const [ResponseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      document: "string",
      examples: [
        {
          document: Value,
          sentiment: "string",
        },
      ],
      model: "gpt-3.5-turbo",
    };

    try {
      const res = await axios.post("blocks/analyze-sentiment", body);
      setResponseData(res.data.sentiment);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.SentimentAnalysis}>
      <div className={`${styles.formGroup} ${styles.SentAnalysDocument}`}>
        <label>Document</label>
        <textarea
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter document context here"
        ></textarea>
      </div>

      <div className={`${styles.formGroup} ${styles.SentAnalysTraining}`}>
        <label>Training Examples (optional)</label>
        <button>
          {" "}
          <FaPlus /> Add new example
        </button>
      </div>

      <div className={styles.formActions}>
        <button>Clear</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className={`${styles.formGroup} ${styles.SentAnalysResponse}`}>
        <label>Response</label>
        <div> {ResponseData} </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
