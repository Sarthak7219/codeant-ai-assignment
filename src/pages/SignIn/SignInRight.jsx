import React, { useState } from "react";
import SignInOption from "./SignInOption.jsx";

const SignInRight = () => {
  const [selectedOption, setSelectedOption] = useState("saas");
  return (
    <div className="signin-right">
      <div className="frame">
        <div className="cont">
          <img src="/images/logo.svg" alt="" />
          <h1>Welcome to CodeAnt AI</h1>

          {/* Select Buttons */}
          <div className="buttons">
            <div
              className={selectedOption === "saas" ? "selected" : ""}
              onClick={() => setSelectedOption("saas")}
            >
              SAAS
            </div>
            <div
              className={selectedOption === "sh" ? "selected" : ""}
              onClick={() => setSelectedOption("sh")}
            >
              Self Hosted
            </div>
          </div>
        </div>

        {/* SignIn Options */}
        {selectedOption === "saas" && (
          <div className="signin-options">
            <SignInOption option="Github" img_url="/images/github.svg" />
            <SignInOption option="Bitbucket" img_url="/images/bitbucket.svg" />
            <SignInOption option="Azure Devops" img_url="/images/azure.svg" />
            <SignInOption option="GitLab" img_url="/images/gitlab.svg" />
          </div>
        )}
        {selectedOption === "sh" && (
          <div className="signin-options">
            <SignInOption option="GitLab" img_url="/images/gitlab.svg" />
            <SignInOption option="SSO" img_url="/images/sso.svg" />
          </div>
        )}
      </div>
      <p>
        By signing up you agree to the <b>Privacy Policy.</b>
      </p>
    </div>
  );
};

export default SignInRight;
