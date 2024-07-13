import React, { useState } from "react";
import { Typography, Col, Row } from "antd";
import { HappyFace, BadFace, DoubtFace } from "../utility/icons";
import SummaryOfQuestions from "../components/SummaryOfQuestions";

const { Title } = Typography;

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState(null);
  const [responses, setResponses] = useState([]);

  const handleEmojiClick = (response, index) => {
    setSelectedEmojiIndex(index);
    setResponses([
      ...responses,
      { question: stepFormData[currentStep], answer: response },
    ]);
    if (currentStep < stepFormData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <Row>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          style={{
            height: "100vh",
            background: "#6e49f4",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="carouselWrapper">
            <div className="dotsContainer">
              {stepFormData?.map((item, slideIndex) => (
                <button
                  key={slideIndex}
                  className={`dot ${
                    slideIndex === currentStep ? "activeDot" : ""
                  }`}
                />
              ))}
            </div>
            <>
              {stepFormData[currentStep] === "Summary" ? (
                <div
                  className={
                    stepFormData[currentStep] === "Summary"
                      ? "summarySlide"
                      : ""
                  }
                >
                  <SummaryOfQuestions responses={responses} />
                </div>
              ) : (
                <div className="question">
                  <Title
                    className={
                      currentStep >= 0 ? `stepTitle-${currentStep}` : ""
                    }
                  >
                    {stepFormData[currentStep]}
                  </Title>
                </div>
              )}
            </>
            <></>
          </div>
        </Col>
        <></>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          style={{
            height: "100vh",
            background: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="emoji-container">
            {emojiList?.length > 0 &&
              emojiList?.map((item, index) => {
                return (
                  <button
                    className={`emojiBtn ${
                      selectedEmojiIndex === index
                        ? "activeEmoji"
                        : stepFormData[currentStep] === "Summary"
                        ? "lastSlideBtn"
                        : ""
                    }`}
                    onClick={() => handleEmojiClick(item?.label, index)}
                    key={index}
                    disabled={
                      stepFormData[currentStep] === "Summary" ? true : false
                    }
                  >
                    {item?.icon}
                    <span className="tooltip">{item?.label}</span>
                  </button>
                );
              })}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MultiStepForm;

const stepFormData = [
  "How was your week overall?",
  "Are you happy with spending time at home?",
  "How do you rate your productivity this week?",
  "Would you recommend working from home to others?",
  "Summary",
];

const emojiList = [
  {
    label: "Happy face",
    icon: <HappyFace />,
  },
  {
    label: "Bad face",
    icon: <BadFace />,
  },
  {
    label: "Doubt face",
    icon: <DoubtFace />,
  },
];
