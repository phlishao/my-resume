import React from "react";
import "./main.css";
import Section from "../Section/index";

const Main = props => {
  const { experience, education, skill } = props;

  return (
    <div className="row">
      <div className="col-6">
        <Section data={education} />
        <Section data={experience} />
      </div>
      <div className="col-6">
        <Section data={skill} />
      </div>
    </div>
  );
};

export default Main;