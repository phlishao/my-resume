import React from "react";
import "./index.less";

const Button = props => {
  const { children, type, ...other } = props;
  return (
    <button {...other} className="btn">
      {children}
    </button>
  );
};

export default Button;
