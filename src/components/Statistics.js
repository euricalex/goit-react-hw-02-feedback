// Statistics.jsx

import { StateList } from "./componentsstyle/StateExamplestyle";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <StateList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </StateList>
  );
};

export default Statistics;
