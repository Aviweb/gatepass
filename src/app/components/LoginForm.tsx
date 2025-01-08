import React from "react";
import { useState } from "react";
export const LoginForm = () => {
  const [roll, setRoll] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async () => {
    const formData = {
      roll_no: roll,
      password: pass,
    };
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
    } else {
      localStorage.setItem("token", data.token);
    }
  };

  return (
    <div className="signup">
      <label className="text-white" htmlFor="chk" aria-hidden="true">
        Login
      </label>
      <input
        type="text"
        name="roll"
        placeholder="Roll No."
        id="lroll"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        id="lpassword"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        required
      />
      <button onClick={handleSubmit} value="Login">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
