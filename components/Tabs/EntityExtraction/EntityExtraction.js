import React, { useState } from "react";
import styles from "./EntityExtraction.module.scss";
import { FaPlus, FaTrash } from "react-icons/fa6";

const EntityExtraction = () => {
  const [fields, setFields] = useState([
    { id: 1, fieldName: "", type: "string", required: false },
  ]);

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

  const handleCheckboxChange = (id, event) => {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, required: event.target.checked };
      }
      return field;
    });
    setFields(newFields);
  };

  return (
    <div className={styles.EntityExtraction}>
      <div className={styles.EntityExtractionBox}>
        <div className={styles.EntityExtractionDocument}>
          <label>Document</label>
          <textarea placeholder="Enter document context here"></textarea>
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
                  checked={field.required}
                  onChange={(e) => handleCheckboxChange(field.id, e)}
                />
                <span className={styles.checkmark}></span>
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
        <button>Submit</button>
      </div>

      <div className={styles.EntityExtractionResponse}>
        <label>Response</label>
        <div></div>
      </div>
    </div>
  );
};

export default EntityExtraction;
