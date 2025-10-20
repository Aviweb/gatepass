// import React, { useState } from "react";
// import Cookies from "universal-cookie";
// import { useRouter } from "next/navigation";
// import "../../static/apply.css";

// export const ApplyForm = () => {
//   const cookies = new Cookies();
//   const [name, setName] = useState("");
//   const [roll, setRoll] = useState("");
//   const [branch, setBranch] = useState("");
//   const [hostel, setHostel] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [date, setDate] = useState("");
//   const [reason, setReason] = useState("");
//   const user_uuid = cookies.get("uuid");
//   const router = useRouter();

//   const handleSubmit = async () => {
//     if (!name || !roll || !branch || !hostel || !phoneNo || !date || !reason)
//       return;

//     const formData = {
//       name: name,
//       roll: roll,
//       branch: branch,
//       hostel: hostel,
//       phoneNo: phoneNo,
//       date: date,
//       reason: reason,
//       user_uuid: user_uuid,
//     };
//     const response = await fetch("/api/submitGatePass", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (data.error) {
//       alert(data.error);
//       console.log("message", data.error);
//     } else {
//       alert("Booking successful");
//       router.push("/student/home");
//       console.log("res", data);
//     }

//     // Prevent default form submission behavior
//     console.log({
//       name,
//       roll,
//       branch,
//       hostel,
//       phoneNo,
//       date,
//       reason,
//       user_uuid,
//     });
//   };

//   return (
//     <div className="background w-full px-4">
//       <div className="flex w-[700px] mt-10 h- mx-auto">
//         <div className="screen h-[600px] w-full">
//           <div className="screen-header">
//             <div className="screen-header-left">
//               <div className="screen-header-button close"></div>
//               <div className="screen-header-button maximize"></div>
//               <div className="screen-header-button minimize"></div>
//             </div>
//             <div className="screen-header-right">
//               <div className="screen-header-ellipsis"></div>
//               <div className="screen-header-ellipsis"></div>
//               <div className="screen-header-ellipsis"></div>
//             </div>
//           </div>
//           <div className="screen-body">
//             <div className="screen-body-item left">
//               <div className="app-title">
//                 <span>APPLY FOR</span>
//                 <span>GATE PASS</span>
//               </div>
//             </div>
//             {/* <form onSubmit={handleSubmit}> */}
//             <div className="screen-body-item">
//               <div className="app-form">
//                 <div className="app-form-group">
//                   <input
//                     className="app-form-control"
//                     placeholder="NAME"
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="app-form-group">
//                   <input
//                     className="app-form-control"
//                     placeholder="ROLL"
//                     type="text"
//                     name="roll"
//                     id="roll"
//                     value={roll}
//                     onChange={(e) => setRoll(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="app-form-group">
//                   <input
//                     className="app-form-control"
//                     placeholder="BRANCH"
//                     type="text"
//                     name="branch"
//                     id="branch"
//                     value={branch}
//                     onChange={(e) => setBranch(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="app-form-group">
//                   <input
//                     className="app-form-control"
//                     placeholder="HOSTEL"
//                     type="text"
//                     name="hostel"
//                     id="hostel"
//                     value={hostel}
//                     onChange={(e) => setHostel(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="app-form-group">
//                   <input
//                     className="app-form-control"
//                     placeholder="PHONE NO"
//                     type="text"
//                     name="phoneNo"
//                     id="phoneNo"
//                     value={phoneNo}
//                     onChange={(e) => setPhoneNo(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="app-form-group date">
//                   <input
//                     className="app-form-control"
//                     type="date"
//                     name="date"
//                     id="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="app-form-group message">
//                   <input
//                     className="app-form-control"
//                     placeholder="REASON"
//                     type="text"
//                     name="reason"
//                     id="reason"
//                     value={reason}
//                     onChange={(e) => setReason(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="app-form-group buttons">
//                   <button className="app-form-button" type="button">
//                     CANCEL
//                   </button>
//                   <button className="app-form-button" onClick={handleSubmit}>
//                     SUBMIT
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* </form> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

const ApplyForm = () => {
  return (
    <div className="md:w-[700px] pt-8 mx-5  rounded-xl pb-4 pr-8 mt-6 md:mx-auto bg-[#2a2a2d] text-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Heading */}
        <div className="flex flex-col justify-center border-b-4 pb-5 border-[#ffab40] md:border-transparent">
          <h1 className="text-3xl font-medium text-[#ffab40] uppercase tracking-widest">
            Apply for
          </h1>
          <h1 className="text-3xl font-medium text-[#ffab40] uppercase tracking-widest">
            Gate Pass
          </h1>
          <div className="w-full h-1 bg-[#ffab40] mt-4 hidden md:flex" />
        </div>

        {/* Right Form */}
        <form className="space-y-1">
          {[
            { label: "Name", type: "text" },
            { label: "Roll", type: "text" },
            { label: "Branch", type: "text" },
            { label: "Hostel", type: "text" },
            { label: "Phone No", type: "tel" },
            { label: "Date", type: "date" },
          ].map((field) => (
            <div key={field.label}>
              <input
                type={field.type}
                placeholder={field.label}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#ffab40] text-sm placeholder-gray-400 py-1"
              />
            </div>
          ))}

          {/* Reason TextArea */}
          <div>
            <textarea
              placeholder="Reason"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#ffab40] text-sm placeholder-gray-400 py-2 resize-none"
              rows={2}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-6 pt-4">
            <button
              type="button"
              className="text-[#ffab40] uppercase tracking-wide text-sm hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-[#ffab40] uppercase tracking-wide text-sm hover:underline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
