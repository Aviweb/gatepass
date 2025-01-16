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
      <HeaderShort />
      <Message message={message} />

      <div className="maindiv " style={{ height: "36.4rem" }}>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <LoginForm />
          <RegisterForm message={message} setMessage={setMessage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
