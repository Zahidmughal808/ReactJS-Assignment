import React from "react";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

export default function SummaryOfQuestions({ responses }) {
  return (
    <div className="summaryWrapper">
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <Title style={{ color: "#fff" }}>Summary of Questions</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          {responses?.map((item, index) => {
            return (
              <div className="response-item" key={index}>
                <div className="questionHolder">{item?.question}</div>
                <div className="answerHolder">{item?.answer}</div>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}
