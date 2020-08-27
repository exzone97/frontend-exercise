import React from "react";
import CardTitle from "./CardTitle";
import CardIcon from "./CardIcon";
import CardDescription from "./CardDescription";

export const HighlightCard = function (props) {
  const { title, icon, description } = props;
  return (
    <div className="pb-3 pl-3 pr-3 pt-2 highlight-card-border">
      <div className="d-flex justify-content-between">
        <CardTitle title={title} />
        <CardIcon icon={icon} />
      </div>
      <CardDescription description={description} />
    </div>
  );
};

export default HighlightCard;
