"use client";
import React, { SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
interface props {
  role?: string;
  setMessage: React.Dispatch<SetStateAction<string>>;
}
const LoginForm = ({ role, setMessage }: props) => {
  const router = useRouter();
  const [roll, setRoll] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = {
        roll_no: roll,
        password: pass,
        role: "student",
      };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data?.error);
      } else {
        document.cookie = `token=${data.token}; path=/; Secure`;
        document.cookie = `uuid=${data.uuid}; path=/; Secure`;
        router.push("student/home");
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleHostelSubmit = async () => {
    try {
      const formData = {
        clerkId: name,
        password: pass,
        role: "hostelClerk",
      };
      const response = await fetch("/api/auth/hlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data?.error);
      } else {
        console.log("uuid in login", data);

        document.cookie = `token=${data.token}; path=/; Secure`;
        document.cookie = `hostel=${data.hostel}; path=/; Secure`;
        router.push("/hostelClerk");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  const handleAdminSubmit = async () => {
    try {
      const formData = {
        name: name,
        password: pass,
      };
      const response = await fetch("/api/auth/alogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data?.error);
      } else {
        console.log("uuid in login", data);

        document.cookie = `token=${data.token}; path=/; Secure`;
        document.cookie = `uuid=${data.uuid}; path=/; Secure`;
        router.push("/admin/status");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  const handleGateSubmit = async () => {
    try {
      const formData = {
        name: name,
        password: pass,
      };
      const response = await fetch("/api/auth/glogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data?.error);
      } else {
        console.log("uuid in login", data);

        document.cookie = `token=${data.token}; path=/; Secure`;
        document.cookie = `uuid=${data.uuid}; path=/; Secure`;
        router.push("/gate");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      {role === "hostelClerk" ? (
        <div className="signup">
          <label className="text-white" htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="name"
            className="text-black"
            placeholder="Enter Name"
            id="hname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="text-black"
            placeholder="Password"
            id="hpassword"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <button onClick={handleHostelSubmit} value="Login">
            Login
          </button>
        </div>
      ) : role === "admin" ? (
        <div className="signup">
          <label className="text-white" htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="name"
            className="text-black"
            placeholder="Enter Name"
            id="aname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="text-black"
            placeholder="Password"
            id="apassword"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <button onClick={handleAdminSubmit} value="Login">
            Login
          </button>
        </div>
      ) : role === "gateKeeper" ? (
        <div className="signup">
          <label className="text-white" htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="name"
            className="text-black"
            placeholder="Enter Name"
            id="gname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="text-black"
            placeholder="Password"
            id="gpassword"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <button onClick={handleGateSubmit} value="Login">
            Login
          </button>
        </div>
      ) : (
        <div className="signup">
          <label className="text-white" htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="roll"
            className="text-black"
            placeholder="Roll No."
            id="lroll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="text-black"
            placeholder="Password"
            id="lpassword"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <button
            className="flex justify-center items-center"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Login"}
          </button>
        </div>
      )}
    </>
  );
};

export default LoginForm;
