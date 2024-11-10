import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {curState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{curState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agree to all terms and conditions</p>
        </div>
        {curState === "Login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setCurState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;