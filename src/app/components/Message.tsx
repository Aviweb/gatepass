import React from "react";

interface props {
  message?: string;
}
export const Message = ({ message }: props) => {
  return (
    <>
      {message !== "" && (
        <div className="alert error disp">
          <input type="checkbox" id="alert1" />
          <label className="close" title="close" htmlFor="alert1">
            <i className="icon-remove"></i>
          </label>
          <p className="inner para">{message}</p>
        </div>
      )}
    </>
  );
};
