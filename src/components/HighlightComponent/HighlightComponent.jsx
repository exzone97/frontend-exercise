import React from "react";
import HighlightCard from "./../HighlightCardComponent/HighlightCard";

export const Highlight = function (props) {
  return (
    <div>
      <div className="highlight-header">
        <h2>How Can I Help You?</h2>
        <p className="container-fluid highlight-header-text">
          Our work then targeted, best practices outcomes social innovation
          synergy. Venture philanthropy, revolutionary inclusive policymaker
          relief. User-centered program areas scale.
        </p>
      </div>
      <div className="container-fluid highlight-list">
        <div className="d-flex justify-content-around flex-wrap highlight-container">
          <div className="highlight-card">
            <HighlightCard
              title="Consult"
              icon="comments-o"
              description="Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress."
            />
          </div>
          <div className="highlight-card">
            <HighlightCard
              title="Design"
              icon="paint-brush"
              description="Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable."
            />
          </div>
          <div className="highlight-card">
            <HighlightCard
              title="Develop"
              icon="cubes"
              description="Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
            />
          </div>
          <div className="highlight-card">
            <HighlightCard
              title="Marketing"
              icon="bullhorn"
              description="Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."
            />
          </div>
          <div className="highlight-card">
            <HighlightCard
              title="Manage"
              icon="tasks"
              description="Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."
            />
          </div>
          <div className="highlight-card">
            <HighlightCard
              title="Evolve"
              icon="line-chart"
              description="Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
