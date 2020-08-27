import React from "react";

export const CardDescription = function (props) {
  const { description } = props;
  return (
    <div className="highlight-card-description">{description}</div>
  );
};

export default CardDescription;
