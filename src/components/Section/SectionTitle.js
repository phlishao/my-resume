import React from "react";
// import "./index.less";

const SectionTitle = ({ name, subName, icon }) => {
  return (
    <div className="sec-title">
      <div className="icon">
        <i className={`iconfont ${icon}`} />
      </div>

      <div className="title">
        <span>{name}</span>
        <span>{subName}</span>
      </div>
    </div>
  );
};
export default SectionTitle;
