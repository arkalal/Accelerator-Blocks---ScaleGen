import React from "react";
import styles from "./AudioTranscription.module.scss";

const AudioTranscription = () => {
  return (
    <div className={styles.AudioTranscription}>
      <h2>Audio Transcription</h2>
      <div className={styles.formGroup}>
        <label>Add file</label>
        <input type="file" />
      </div>
      <div className={styles.formGroup}>
        <label>Response</label>
        <textarea readOnly></textarea>
      </div>
      <div className={styles.formActions}>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AudioTranscription;
