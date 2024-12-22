import React from "react";

const SignInOption = ({ option, img_url }) => {
  return (
    <div className="option">
      <img src={img_url} alt="" />
      <p>Sign in with {option}</p>
    </div>
  );
};

export default SignInOption;
