import React, { SetStateAction } from "react";
import { useState } from "react";

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
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [formErrors, setFormErrors] = useState<ErrorsCustom>({});

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
      value: pass,
      setValue: setPass,
      placeholderText: "Enter your Password",
      fieldName: "pass",
    },
    {
      value: cpass,
      setValue: setCpass,
      placeholderText: "Confirm Password",
      fieldName: "cpass",
    },
  ];

  const handleSignup = async () => {
    const newErrors: ErrorsCustom = {};
    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Validate roll number
    if (!roll.trim()) {
      newErrors.roll = "Roll number is required.";
    } else if (!/^\d+$/.test(roll)) {
      newErrors.roll = "Roll number must be numeric.";
    }

    // Validate password
    if (!pass) {
      newErrors.pass = "Password is required.";
    } else if (pass.length < 6) {
      newErrors.pass = "Password must be at least 6 characters long.";
    }

    // Validate confirm password
    if (!cpass) {
      newErrors.cpass = "Confirm password is required.";
    } else if (pass !== cpass) {
      newErrors.cpass = "Passwords do not match.";
    }

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
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
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
};

export default RegisterForm;
