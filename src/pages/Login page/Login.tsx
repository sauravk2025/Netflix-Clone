import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <h1 className="logo">WATCHWISE</h1>

      <div className="login">
        <h1 className="login__title">Sign In</h1>

        <div id="email">
          <input
            type="email"
            placeholder="Email or phone number"
            className="login__group__input"
          />
        </div>

        <div id="password">
          <input
            type="password"
            className="login__group__input"
            placeholder="Password"
          />
        </div>

        <Link to="/home">
          {/* Navigate to "/home" when clicked */}
          <button className="login__sign-in">Sign In</button>
        </Link>

        <div className="forgotpass">
          <p>OR</p>
          <a href="#" className="forgottext">
            Forgot password?
          </a>
        </div>

        <div>
          <input type="checkbox" className="checkme" />
          <a href="#"> Remember me</a>
        </div>

        <div className="form-text">
          <p>
            New to WatchWise?{" "}
            <a href="#" className="signup">
              Sign up now.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
