import React, { useState } from "react";
import styles from "./Personalization.module.scss";
import axios from "../../../axios/api";

const Personalization = () => {
  const [Values, setValues] = useState({ document: "", target: "" });
  const [ResponseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      document: "string",
      target_audience: "string",
      examples: [
        {
          document: Values.document,
          target_audience: Values.target,
          personalized_document: "string",
        },
      ],
      model: "gpt-3.5-turbo",
    };

    try {
      const res = await axios.post("blocks/personalize", body);
      setResponseData(res.data.personalized_document);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.Personalization}>
      <div className={`${styles.formGroup} ${styles.PersonaliseDocument}`}>
        <label>Document</label>
        <textarea
          value={Values.document}
          onChange={(e) => setValues({ document: e.target.value })}
          placeholder="Enter document context here"
        ></textarea>
      </div>

      <div className={styles.PersonaliseTargetAudience}>
        <label>Target Audience</label>

        <div className={styles.PersonTargetBox}>
          <div className={`${styles.PersonaliseTarget}`}>
            <input
              type="text"
              placeholder="Enter description of audience here"
              value={Values.target}
              onChange={(e) => setValues({ target: e.target.value })}
            />
          </div>

          <div className={styles.formActions}>
            <button>Clear</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>

      <div className={`${styles.formGroup} ${styles.PersonaliseResponse}`}>
        <label>Response</label>
        <div> {ResponseData} </div>
      </div>
    </div>
  );
};

export default Personalization;
