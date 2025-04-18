"use client";
import React, { useState } from "react";
import "../../static/main.css";
import "../../static/alert.css";
import "../../static/new.css";
import { Footer } from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { Message } from "../components/Message";
import HeaderNew from "../components/HeaderNew";

const LoginPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <div>
      <HeaderNew />
      <Message message={message} />

      <div className="maindiv " style={{ height: "36.4rem" }}>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <LoginForm role="admin" setMessage={setMessage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
