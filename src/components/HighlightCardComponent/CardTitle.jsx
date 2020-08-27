import React from "react";

export const CardTitle = function (props) {
  const { title } = props;
  return <div className="highlight-card-title">{title}</div>;
};

export default CardTitle;
