import React from "react";

const RepositoryItem = ({ name, badge, tech, memory, lastUpdated }) => {
  return (
    <div className="box">
      <div className="name">
        <h3>{name}</h3>
        <div className="badge">{badge}</div>
      </div>
      <div className="info">
        <div className="tech">
          <p>{tech}</p>
          <div className="ellipse"></div>
        </div>
        <div className="memory">
          <img src="/images/memory.svg" alt="" />
          <p>{memory} KB</p>
        </div>
        <p>Updated {lastUpdated} ago</p>
      </div>
    </div>
  );
};

export default RepositoryItem;
