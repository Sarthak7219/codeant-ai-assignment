import React from "react";
import SignInLeft from "./SignInLeft.jsx";
import SignInRight from "./SignInRight.jsx";

const SignInPage = () => {
  return (
    <div className="container">
      <div className="signin-container">
        <SignInLeft />
        <SignInRight />
      </div>
    </div>
  );
};

export default SignInPage;
