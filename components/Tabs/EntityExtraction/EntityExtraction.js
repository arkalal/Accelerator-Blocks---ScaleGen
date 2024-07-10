import React, { useState } from "react";
import styles from "./EntityExtraction.module.scss";
import { FaPlus, FaTrash } from "react-icons/fa6";
import axios from "../../../axios/api";

const EntityExtraction = () => {
  const [fields, setFields] = useState([
    { id: 1, fieldName: "", type: "string", required: false },
  ]);
  const [document, setDocument] = useState("");
  const [response, setResponse] = useState(null);

  const handleAddField = () => {
    setFields([
      ...fields,
      { id: fields.length + 1, fieldName: "", type: "string", required: false },
    ]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleInputChange = (id, event) => {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  const handleCheckboxChange = (id) => {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, required: !field.required };
      }
      return field;
    });
    setFields(newFields);
  };

  const handleSubmit = async () => {
    const schema = {};
    fields.forEach((field) => {
      schema[field.fieldName] = {
        required: field.required,
        type: field.type,
      };
    });

    const body = {
      document,
      schema,
      model: "gpt-3.5-turbo",
    };

    try {
      const res = await axios.post("blocks/extract", body);
      setResponse(res.data);
      console.log("response", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.EntityExtraction}>
      <div className={styles.EntityExtractionBox}>
        <div className={styles.EntityExtractionDocument}>
          <label>Document</label>
          <textarea
            placeholder="Enter document context here"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.EntityExtractionFormActions}>
          {fields.map((field, index) => (
            <div key={field.id} className={styles.EntityExtractionPanel}>
              <div className={styles.EntityExtractionField}>
                <label>Field Name</label>
                <input
                  type="text"
                  name="fieldName"
                  placeholder="Enter field name here"
                  value={field.fieldName}
                  onChange={(e) => handleInputChange(field.id, e)}
                />
              </div>

              <div className={styles.EntityExtractionType}>
                <label>Type</label>
                <select
                  name="type"
                  value={field.type}
                  onChange={(e) => handleInputChange(field.id, e)}
                >
                  <option value="string">string</option>
                  <option value="number">number</option>
                  <option value="boolean">boolean</option>
                </select>
              </div>

              <div className={styles.EntityExtractionRequired}>
                <label>Required?</label>
                <input
                  type="checkbox"
                  id={`required-${field.id}`}
                  checked={field.required}
                  onChange={() => handleCheckboxChange(field.id)}
                />
                <div className={styles.checkmarkBox}>
                  <label
                    htmlFor={`required-${field.id}`}
                    className={`${styles.checkmark} ${
                      field.required ? styles.checked : ""
                    }`}
                  ></label>
                </div>
              </div>

              {index > 0 && (
                <FaTrash
                  onClick={() => handleRemoveField(field.id)}
                  className={styles.entityTrash}
                />
              )}
            </div>
          ))}

          <div className={styles.EntityExtractionAddEntity}>
            <button onClick={handleAddField}>
              <FaPlus /> Add new entity
            </button>
          </div>
        </div>
      </div>

      <div className={styles.formActions}>
        <button>Clear</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className={styles.EntityExtractionResponse}>
        <label>Response</label>
        <div>{JSON.stringify(response, null, 2)}</div>
      </div>
    </div>
  );
};

export default EntityExtraction;
