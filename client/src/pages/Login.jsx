import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <form>
        <h1>Login</h1>

        <div className="login-input-container">
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="text"
            placeholder="your@email.com"
          />
        </div>

        <div className="login-input-container">
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
          />
        </div>

        <div className="login-bottom-row">
          <button type="submit">Login</button>
          <p>Forgot password?</p>
        </div>

        <p className="login-bottom-account-text">Don't have an account? <span>create one now!</span></p>

        <div className="login-form-topic-title">
          <span></span>
          <p>Or login with</p>
          <span></span>
        </div>

        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        
      </form>
    </div>
  );
}

export default Login;