import React, { useState } from "react";
import styles from "./DocumentSummary.module.scss";
import { FaPlus } from "react-icons/fa6";
import axios from "../../../axios/api";

const DocumentSummary = () => {
  const [Values, setValues] = useState({ document: "", length: "" });
  const [ResponseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      document: "string",
      examples: [
        {
          document: Values.document,
          summary: "string",
        },
      ],
      length: Values.length,
      model: "gpt-3.5-turbo",
    };

    try {
      const res = await axios.post("blocks/summarize", body);
      setResponseData(res.data.summary);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.DocumentSummary}>
      <div className={`${styles.formGroup} ${styles.DocSummaryDocument}`}>
        <label>Document</label>
        <textarea
          onChange={(e) => setValues({ document: e.target.value })}
          placeholder="Enter document context here"
          value={Values.document}
        ></textarea>
      </div>

      <div className={`${styles.formGroup} ${styles.DocSummaryLength}`}>
        <label>Summary Length (optional)</label>
        <select
          value={Values.length}
          onChange={(e) => setValues({ length: e.target.value })}
        >
          <option disabled>Select...</option>
          <option>short</option>
          <option>long</option>
        </select>
      </div>

      <div className={`${styles.formGroup} ${styles.DocSummaryTraining}`}>
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

      <div className={`${styles.formGroup} ${styles.DocSummaryResponse}`}>
        <label>Response</label>
        <div> {ResponseData} </div>
      </div>
    </div>
  );
};

export default DocumentSummary;
