import React from "react";
import "./LogIn.scss";

const LogIn = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome</h2>
        <form className="login-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-input"
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
