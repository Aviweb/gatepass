"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import HeaderNew from "./HeaderNew";

const QrFailure = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get("error");

  return (
    <>
      <HeaderNew />

      <div className="flex items-center justify-center mt-24">
        <div className="bg-white shadow-md rounded-2xl p-8 max-w-md text-center">
          {message === "marked" ? (
            <div className="flex justify-center text-green-500 mb-4">
              <svg
                id="Layer_1"
                className="h-16 w-16"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <style type="text/css">
                  {
                    "\n\t.st0{fill:#2BB673;}\n\t.st1{fill:none;stroke:#FFFFFF;stroke-width:30;stroke-miterlimit:10;}\n"
                  }
                </style>
                <path
                  className="st0"
                  d="M489,255.9c0-0.2,0-0.5,0-0.7c0-1.6,0-3.2-0.1-4.7c0-0.9-0.1-1.8-0.1-2.8c0-0.9-0.1-1.8-0.1-2.7  c-0.1-1.1-0.1-2.2-0.2-3.3c0-0.7-0.1-1.4-0.1-2.1c-0.1-1.2-0.2-2.4-0.3-3.6c0-0.5-0.1-1.1-0.1-1.6c-0.1-1.3-0.3-2.6-0.4-4  c0-0.3-0.1-0.7-0.1-1C474.3,113.2,375.7,22.9,256,22.9S37.7,113.2,24.5,229.5c0,0.3-0.1,0.7-0.1,1c-0.1,1.3-0.3,2.6-0.4,4  c-0.1,0.5-0.1,1.1-0.1,1.6c-0.1,1.2-0.2,2.4-0.3,3.6c0,0.7-0.1,1.4-0.1,2.1c-0.1,1.1-0.1,2.2-0.2,3.3c0,0.9-0.1,1.8-0.1,2.7  c0,0.9-0.1,1.8-0.1,2.8c0,1.6-0.1,3.2-0.1,4.7c0,0.2,0,0.5,0,0.7c0,0,0,0,0,0.1s0,0,0,0.1c0,0.2,0,0.5,0,0.7c0,1.6,0,3.2,0.1,4.7  c0,0.9,0.1,1.8,0.1,2.8c0,0.9,0.1,1.8,0.1,2.7c0.1,1.1,0.1,2.2,0.2,3.3c0,0.7,0.1,1.4,0.1,2.1c0.1,1.2,0.2,2.4,0.3,3.6  c0,0.5,0.1,1.1,0.1,1.6c0.1,1.3,0.3,2.6,0.4,4c0,0.3,0.1,0.7,0.1,1C37.7,398.8,136.3,489.1,256,489.1s218.3-90.3,231.5-206.5  c0-0.3,0.1-0.7,0.1-1c0.1-1.3,0.3-2.6,0.4-4c0.1-0.5,0.1-1.1,0.1-1.6c0.1-1.2,0.2-2.4,0.3-3.6c0-0.7,0.1-1.4,0.1-2.1  c0.1-1.1,0.1-2.2,0.2-3.3c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0.1-1.8,0.1-2.8c0-1.6,0.1-3.2,0.1-4.7c0-0.2,0-0.5,0-0.7  C489,256,489,256,489,255.9C489,256,489,256,489,255.9z"
                  id="XMLID_3_"
                />
                <g id="XMLID_1_">
                  <line
                    className="st1"
                    id="XMLID_2_"
                    x1={213.6}
                    x2={369.7}
                    y1={344.2}
                    y2={188.2}
                  />
                  <line
                    className="st1"
                    id="XMLID_4_"
                    x1={233.8}
                    x2={154.7}
                    y1={345.2}
                    y2={266.1}
                  />
                </g>
              </svg>
            </div>
          ) : (
            <div className="text-red-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-1.414 1.414M5.636 18.364l1.414-1.414M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                />
              </svg>
            </div>
          )}

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            QR Code Error
          </h2>
          <p className="text-gray-600">
            {message === "gatePass"
              ? "No User entry exits for this QR Code"
              : message === "marked"
              ? "The User Details is successfully verified"
              : message === "already-marked"
              ? "The QR Code is already scanned"
              : "The QR code is already scanned or invalid."}
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 inline-block bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default QrFailure;
