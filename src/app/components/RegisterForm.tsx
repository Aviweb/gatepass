import React, { SetStateAction } from "react";
import { useState } from "react";

interface props {
  message: string;
  setMessage: React.Dispatch<SetStateAction<string>>;
}
export const RegisterForm = ({ message, setMessage }: props) => {
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
  );
};

export default RegisterForm;
