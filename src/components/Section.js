// Section.jsx

import { StatisticDesc, StatisticContainer } from "./componentsstyle/StateExamplestyle";

const Section = ({ title, children }) => {
  return (
    <StatisticContainer>
      <StatisticDesc>{title}</StatisticDesc>
      {children}
    </StatisticContainer>
  );
};

export default Section;
