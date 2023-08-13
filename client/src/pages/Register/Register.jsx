import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./Register.scss";
import newRequest from "../../utils/newRequest";

function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordRepeatVisible, setIsPasswordRepeatVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validatePassword = () => {
    if (password !== passwordRepeat) {
      setError("Password is not the same.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validatePassword()) return;

    try {
      const res = await newRequest.post("/auth/register", {
        email,
        phone,
        country,
        username,
        password,
        isSeller,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div className="register-input-container">
          <label htmlFor="">Username</label>
          <input
            name="email"
            type="text"
            placeholder="Your username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="register-input-container">
          <label htmlFor="">Phone</label>
          <input
            name="email"
            type="text"
            placeholder="Ex.: (555) 555-1234"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="register-input-container">
          <label htmlFor="country">Country</label>
          <input
            name="country"
            id="country"
            type="text"
            placeholder="Ex.: United States of America"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div className="register-input-container">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="your@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="register-input-container">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i
            className={`fa-solid ${
              isPasswordVisible ? "fa-eye-slash" : "fa-eye"
            }`}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          ></i>
        </div>

        <div className="register-input-container">
          <label htmlFor="password_repeat">Repeat password</label>
          <input
            name="password_repeat"
            id="password_repeat"
            type={isPasswordRepeatVisible ? "text" : "password"}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
          <i
            className={`fa-solid ${
              isPasswordRepeatVisible ? "fa-eye-slash" : "fa-eye"
            }`}
            onClick={() => setIsPasswordRepeatVisible(!isPasswordRepeatVisible)}
          ></i>
        </div>

        {error !== "" && (
          <p className="register-error-message">Error: {error}</p>
        )}

        <div className="register-bottom-row">
          <button type="submit">register</button>
          <div>
            <input type="checkbox" id="seller" onChange={() => setIsSeller(!isSeller)}/>
            <label htmlFor="seller">I will be a seller</label>
          </div>
        </div>

        <p className="register-bottom-account-text">
          Already have an account? <Link to="/login">enter now!</Link>
        </p>

        <div className="register-form-topic-title">
          <span></span>
          <p>Or register with</p>
          <span></span>
        </div>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("register Failed");
          }}
        />
      </form>
    </div>
  );
}

export default Register;
