"use client";

import { useState } from "react";

import ForgotPassword from "./ForgotPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Auth: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  const toggleForm = () => {
    setForgotPassword(false);
    setIsSignUp((prev) => !prev);
  };
  const isForgottenPassword = () => {
    setForgotPassword(true);
  };
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <div className="cart-box">
          {isSignUp && forgotPassword === false ? (
            <SignUp state={setIsSignUp} onClick={toggleForm} />
          ) : forgotPassword === true ? (
            <ForgotPassword
              haveAccount={toggleForm}
              dont_Haveaccount={toggleForm}
            />
          ) : (
            <SignIn
              isSignUp={toggleForm}
              isForgottenPassword={isForgottenPassword}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
