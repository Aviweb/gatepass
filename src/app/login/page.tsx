"use client";
import React, { useState } from "react";
import "../main.css";
import "../alert.css";
import "../new.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const LoginPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  const handleSignup = async () => {
    const formdata = { name: name, roll_no: roll, password: pass };
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });

    const data = await response.json();

    if (data.error) {
      setMessage(data.error);
      console.log("message", data.error);
    } else {
      alert("Registration successful");
    }
  };
  return (
    <div>
      {/* <Header /> */}
      {message !== "" ? (
        <div className="alert error disp">
          <input type="checkbox" id="alert1" />
          <label className="close" title="close" htmlFor="alert1">
            <i className="icon-remove"></i>
          </label>
          <p className="inner para">{message}</p>
        </div>
      ) : (
        <div className="alert error disp2">
          <input type="checkbox" id="alert1" />
          <label className="close" title="close" htmlFor="alert1">
            <i className="icon-remove"></i>
          </label>
        </div>
      )}

      <div className="maindiv " style={{ height: "36.4rem" }}>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
