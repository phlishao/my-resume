import React from "react";
const SectionContent = props => {
  const { children } = props;
  return <ul className="sec-content">{children}</ul>;
};

export default SectionContent;
