import React from "react";

const SignInLeft = () => {
  return (
    <div className="signin-left">
      <div className="cards">
        <div className="card1">
          <div className="title">
            <img src="./images/logo-icon.svg" alt="" />
            <h2>AI to Detect & Autofix Bad Code</h2>
          </div>
          <div className="metrics">
            <div className="box">
              <div className="number">30+</div>
              <p>Language Support</p>
            </div>
            <div className="box" style={{ marginLeft: "45.5px" }}>
              <div className="number">10K+</div>
              <p>Developers</p>
            </div>
            <div className="box" style={{ marginLeft: "57px" }}>
              <div className="number">100K+</div>
              <p>Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="card2">
          <img src="./images/item1.svg" alt="" className="item1" />
          <div className="item2">
            <div className="growth">
              <img src="./images/growth-icon.svg" alt="" />
              <p>14%</p>
            </div>
            <p>This week</p>
          </div>
          <div className="item3">
            <p>Issues Fixed</p>
            <h1>500K+</h1>
          </div>
        </div>
      </div>
      <img
        src="./images/logo-icon-light.svg"
        alt=""
        className="bottom-left-logo"
      />
    </div>
  );
};

export default SignInLeft;
