import React, { Component } from "react";
import Statistics from "./Statistics"; // Шлях до компонента Statistics
import FeedbackOptions from "./FeedbackOptions"; // Шлях до компонента FeedbackOptions
import Section from "./Section"; // Шлях до компонента Section
import { StateContainer } from "./componentsstyle/StateExamplestyle";
import Notification from "./Notification";


export class StateExample extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ["good", "neutral", "bad"];
    const totalFeedback = this.countTotalFeedback();

    return (
      <StateContainer>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        <Section title="Statistics">
        {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          )}
        </Section>
   
     
      </StateContainer>
    );
  }
}
