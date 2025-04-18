"use client";
import React, { useState } from "react";
import "../../static/main.css";
import "../../static/alert.css";
import "../../static/new.css";
import { Footer } from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { Message } from "../components/Message";
import HeaderNew from "../components/HeaderNew";

const LoginPage: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <HeaderNew />
      <Message message={message} />

      <div className="maindiv px-3 " style={{ height: "36.4rem" }}>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <LoginForm setMessage={setMessage} />
          <RegisterForm message={message} setMessage={setMessage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
