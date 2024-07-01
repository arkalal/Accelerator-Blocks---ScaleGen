"use client";

import React from "react";
import styles from "./Content.module.scss";
import { connect } from "react-redux";
import QuestionAnswer from "../Tabs/QuestionAnswer/QuestionAnswer";
import DocumentSummary from "../Tabs/DocumentSummary/DocumentSummary";
import SentimentAnalysis from "../Tabs/SentimentAnalysis/SentimentAnalysis";
import Personalization from "../Tabs/Personalization/Personalization";
import EntityExtraction from "../Tabs/EntityExtraction/EntityExtraction";
import PDFExtraction from "../Tabs/PDFExtraction/PDFExtraction";
import AudioTranscription from "../Tabs/AudioTranscription/AudioTranscription";

const Content = ({ selectedOption }) => {
  const renderContent = () => {
    switch (selectedOption) {
      case "Question & Answer":
        return <QuestionAnswer />;
      case "Document Summary":
        return <DocumentSummary />;
      case "Sentiment Analysis":
        return <SentimentAnalysis />;
      case "Personalization":
        return <Personalization />;
      case "Entity Extraction":
        return <EntityExtraction />;
      case "PDF Extraction":
        return <PDFExtraction />;
      case "Audio Transcription":
        return <AudioTranscription />;
      default:
        return <QuestionAnswer />;
    }
  };
  return (
    <div className={styles.Content}>
      <div className={styles.ContentBlocks}>
        <h2>Accelerator Blocks</h2>
      </div>

      <div className={styles.ContentBox}>{renderContent()}</div>
    </div>
  );
};

const mapStateToProps = ({ gradient }) => {
  return {
    selectedOption: gradient.selectedOption,
  };
};

export default connect(mapStateToProps, null)(Content);
