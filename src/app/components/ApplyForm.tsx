// import React from "react";
// import { useState } from "react";
// import "../../static/apply.css";

// export const ApplyForm = () => {
//   const [name, setName] = useState("");
//   const [roll, setRoll] = useState("");
//   const [branch, setBranch] = useState("");
//   const [hostel, setHostel] = useState("");

//   return (
//     <div className="background">
//       <div className="container">
//         <div className="screen">
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
//             <form action="/filled" method="post">
//               <div className="screen-body-item">
//                 <div className="app-form">
//                   <div className="app-form-group">
//                     <input
//                       className="app-form-control"
//                       placeholder="NAME"
//                       type="text"
//                       name="name"
//                       id="name"
//                       required
//                     />
//                   </div>
//                   <div className="app-form-group">
//                     <input
//                       className="app-form-control"
//                       placeholder="ROLL"
//                       type="text"
//                       name="roll"
//                       id="roll"
//                       required
//                     />
//                   </div>
//                   <div className="app-form-group">
//                     <input
//                       className="app-form-control"
//                       placeholder="BRANCH"
//                       type="text"
//                       name="section"
//                       id="section"
//                       required
//                     />
//                   </div>
//                   <div className="app-form-group">
//                     <input
//                       className="app-form-control"
//                       placeholder="HOSTEL"
//                       type="text"
//                       name="hostel"
//                       id="hostel"
//                       required
//                     />
//                   </div>
//                   <div className="app-form-group">
//                     <input
//                       className="app-form-control"
//                       placeholder="PHONE NO"
//                       type="text"
//                       name="phnum"
//                       id="phnum"
//                       required
//                     />
//                   </div>
//                   <div className="app-form-group date">
//                     <input
//                       className="app-form-control"
//                       type="date"
//                       name="date"
//                       placeholder="FROM"
//                       id="date"
//                       required
//                     />
//                   </div>
//                   <br />
//                   <div className="app-form-group message">
//                     <input
//                       className="app-form-control"
//                       placeholder="REASON"
//                       type="text"
//                       name="reason"
//                       id="reason"
//                       required
//                     />
//                   </div>
//                   <div className="app-form-group buttons">
//                     <button className="app-form-button">CANCEL</button>
//                     <button className="app-form-button" type="submit">
//                       SUBMIT
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "../../static/apply.css";

export const ApplyForm = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [hostel, setHostel] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    // Prevent default form submission behavior
    console.log({
      name,
      roll,
      branch,
      hostel,
      phoneNo,
      date,
      reason,
    });
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>APPLY FOR</span>
                <span>GATE PASS</span>
              </div>
            </div>
            {/* <form onSubmit={handleSubmit}> */}
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="ROLL"
                    type="text"
                    name="roll"
                    id="roll"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="BRANCH"
                    type="text"
                    name="branch"
                    id="branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="HOSTEL"
                    type="text"
                    name="hostel"
                    id="hostel"
                    value={hostel}
                    onChange={(e) => setHostel(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="PHONE NO"
                    type="text"
                    name="phoneNo"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group date">
                  <input
                    className="app-form-control"
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="REASON"
                    type="text"
                    name="reason"
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" type="button">
                    CANCEL
                  </button>
                  <button className="app-form-button" onClick={handleSubmit}>
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};
