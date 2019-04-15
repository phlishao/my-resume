import React from "react";
const DescriptionList = props => {
  const { data, title } = props;
  return (
    <dl className="desc-list">
      <dt className="desc-title">{title}</dt>
      {data.map((item, index) => {
        return (
          <dd key={index}>
            <i className="iconfont icon-dot" />
            {item}
          </dd>
        );
      })}
    </dl>
  );
};
export default DescriptionList;
