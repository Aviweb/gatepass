"use client";
import React, { SetStateAction } from "react";
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { useRouter } from "next/navigation";

interface props {
  message: string;
  setMessage: React.Dispatch<SetStateAction<string>>;
}

// interface ErrorsCustom {
//   name?: string;
//   roll?: string;
//   pass?: string;
//   cpass?: string;
// }

interface ErrorsCustom {
  [key: string]: string | undefined; // Allow dynamic keys
}
export const RegisterForm = ({ setMessage }: props) => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [cpass, setCpass] = useState("");
  const [formErrors, setFormErrors] = useState<ErrorsCustom>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formfieldData = [
    {
      value: name,
      setValue: setName,
      placeholderText: "Enter your name",
      fieldName: "name",
    },
    {
      value: roll,
      setValue: setRoll,
      placeholderText: "Enter your Roll no.",
      fieldName: "roll",
    },
    {
      value: email,
      setValue: setEmail,
      placeholderText: "Enter your Email",
      fieldName: "email",
    },
    {
      value: pass,
      setValue: setPass,
      placeholderText: "Enter your Password",
      fieldName: "pass",
    },
    // {
    //   value: cpass,
    //   setValue: setCpass,
    //   placeholderText: "Confirm Password",
    //   fieldName: "cpass",
    // },
  ];

  const handleSignup = async () => {
    setLoading(true); // Start loading
    const newErrors: ErrorsCustom = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!roll.trim()) {
      newErrors.roll = "Roll number is required.";
    } else if (!/^\d+$/.test(roll)) {
      newErrors.roll = "Roll number must be numeric.";
    }
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!pass) {
      newErrors.pass = "Password is required.";
    } else if (pass.length < 6) {
      newErrors.pass = "Password must be at least 6 characters long.";
    }
    // if (!cpass) {
    //   newErrors.cpass = "Confirm password is required.";
    // } else if (pass !== cpass) {
    //   newErrors.cpass = "Passwords do not match.";
    // }

    setFormErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setLoading(false); // Stop loading if there are errors
      return;
    }

    try {
      const formdata = { name, roll_no: roll, email, password: pass };
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data.error);
      } else {
        router.push("/");
      }
    } catch (err) {
      console.error("Error during registration", err);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Always stop loading
    }
  };

  return (
    <div className="login">
      <label className="mb-3" htmlFor="chk" aria-hidden="true">
        Sign up
      </label>
      <div className="space-y-2">
        {formfieldData.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={field?.placeholderText}
              className="h-8 my-0 text-[#573B8A]"
              value={field?.value}
              onChange={(e) => field?.setValue(e.target.value)}
              required
            />
            {/* <p className="text-red-500 w-fit mx-auto text-[15px] mt-0">
              {formErrors}
            </p> */}
            {formErrors[field.fieldName] && (
              <p className="text-red-500 w-fit mx-auto text-[15px] mt-0">
                {formErrors[field.fieldName]}
              </p>
            )}
          </div>
        ))}
      </div>
      <button
        className="flex justify-center items-center"
        onClick={handleSignup}
        disabled={loading}
      >
        {loading ? <LoadingSpinner /> : "Signup"}
      </button>
    </div>
  );
};

export default RegisterForm;
