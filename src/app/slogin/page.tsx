"use client";
import React, { useState } from "react";
import "../../static/main.css";
import "../../static/alert.css";
import "../../static/new.css";
import { Footer } from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { Message } from "./Message";
import HeaderShort from "../components/HeaderShort";

const LoginPage: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      {/* <Header /> */}
      <HeaderShort />
      <Message message={message} />

      <div className="maindiv " style={{ height: "36.4rem" }}>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <LoginForm />
          <RegisterForm message={message} setMessage={setMessage} />
          {/* <div className="signup">
            <label className="text-white" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              name="roll"
              placeholder="Roll No."
              id="roll2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password3"
              required
            />
            <button type="submit" value="Login">
              Login
            </button>
          </div>
          <div className="login">
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              name="roll"
              placeholder="Enter your 8 digit roll no."
              id="roll"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              id="password2"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
              required
            />
            <button onClick={handleSignup}>Sign up</button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
