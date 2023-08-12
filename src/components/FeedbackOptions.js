// FeedbackOptions.jsx

import { Button, StateButtons } from "./componentsstyle/StateExamplestyle";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StateButtons>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </StateButtons>
  );
};

export default FeedbackOptions;
