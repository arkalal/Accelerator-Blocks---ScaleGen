"use client";

import React, { useState } from "react";
import styles from "./Home.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import QuestionAnswer from "../Tabs/QuestionAnswer/QuestionAnswer";
import DocumentSummary from "../Tabs/DocumentSummary/DocumentSummary";
import SentimentAnalysis from "../Tabs/SentimentAnalysis/SentimentAnalysis";
import Personalization from "../Tabs/Personalization/Personalization";
import EntityExtraction from "../Tabs/EntityExtraction/EntityExtraction";
import PDFExtraction from "../Tabs/PDFExtraction/PDFExtraction";
import AudioTranscription from "../Tabs/AudioTranscription/AudioTranscription";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Question & Answer");

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
    <div className={styles.Home}>
      <Sidebar onSelection={setSelectedOption} />
      <Content>{renderContent()}</Content>
    </div>
  );
};

export default Home;
