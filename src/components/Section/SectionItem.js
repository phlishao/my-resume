import React from "react";
const SectionItem = props => {
  const { children, title, timeline, icon } = props;
  return (
    <li className="sec-item">
      <div className="sec-item-title">
        <div className="icon">
          <i className={`iconfont ${icon}`} />
        </div>
        {title && <span> {title}</span>}
        <span className={title ? "span-right" : ""}>{timeline}</span>
      </div>
      {children}
    </li>
  );
};

export default SectionItem;
