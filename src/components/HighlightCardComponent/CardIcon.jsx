import React from "react";

export const CardIcon = function (props) {
  const { icon } = props;
  return (
    <div className="highlight-card-icon">
      <i className={"fa fa-" + icon}></i>
    </div>
  );
};

export default CardIcon;
