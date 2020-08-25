import React from "react";

export const HighlightCard = function (props) {
  const { title, icon, description } = props;
  return (
    <div className="pb-3 pl-3 pr-3 pt-2 highlight-card-border">
      <div className="d-flex justify-content-between">
        <div className="highlight-card-title">
          {title}
        </div>
        <div className="highlight-card-icon">
          <i className={"fa fa-" + icon}></i>
        </div>
      </div>
      <div className="highlight-card-description">{description}</div>
    </div>
  );
};

export default HighlightCard;
