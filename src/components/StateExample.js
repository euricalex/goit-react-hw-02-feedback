import React, { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import { StateContainer } from "./componentsstyle/StateExamplestyle";
import Notification from "./Notification";

 export const StateExample = () => {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  };

  const options = ["good", "neutral", "bad"];
  const totalFeedback = countTotalFeedback();

  return (
    <StateContainer>
      <h1>Please leave feedback</h1>
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </StateContainer>
  );
};

export default StateExample;
