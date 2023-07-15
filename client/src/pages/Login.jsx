import React from "react";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import "./Login.scss";

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-input-container">
          <label htmlFor="">Password</label>
          <input
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className={`fa-solid ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
             onClick={() => setIsPasswordVisible(!isPasswordVisible)}></i>
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