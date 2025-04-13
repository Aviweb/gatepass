"use client";
import HeaderShort from "@/app/components/HeaderShort";
import { Footer } from "@/app/components/Footer";
import React from "react";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
interface StudentDataProps {
  createdAt: Date;
  reason?: string;
  status?: string;
  out_time?: string;
  in_time?: string;
}

const Page = () => {
  const [studentData, setstudentData] = useState<StudentDataProps[]>([]);
  const columnTitles = [
    "S.no",
    "Reason",
    "Applied at",
    "Expected Arrival",
    "Status",
    "Out Time",
    "In Time",
    // "Actions",
  ];

  function formatDateTimeToIST(dateTimeStr: Date) {
    const dateObj = new Date(dateTimeStr);

    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
    const istDateObj = new Date(dateObj.getTime() + istOffset);

    let hours = istDateObj.getUTCHours();
    const minutes = istDateObj.getUTCMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    const day = istDateObj.getUTCDate();
    const month = istDateObj.toLocaleString("en-US", {
      month: "short",
      timeZone: "UTC",
    });
    const year = istDateObj.getUTCFullYear();

    return {
      date: `${day} ${month} ${year}`,
      time: `${hours}:${minutes} ${ampm}`,
    };
    // return `${hours}:${minutes} ${ampm}, ${day} ${month} ${year}`;
  }
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    console.log("Token:", token);

    const uuid = "4517f629-c687-4731-9e3c-f273c15098ad";
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/submitGatePass?roll_no=${uuid}`);
        const responseData = await response.json();
        if (response) {
          console.log("re", responseData?.data);

          setstudentData(responseData?.data);
        }
      } catch (err) {
        console.log("error ", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <HeaderShort role="student" />
        <div className="w-[1340px] mx-auto mt-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columnTitles?.map((title, index) => (
                    <th scope="col" key={index} className="text-center py-3 ">
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {studentData?.map((entry, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 text-white even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="text-center py-1">{index + 1}</td>
                    <td className="text-center py-1">{entry?.reason}</td>
                    <td className="text-center py-1">
                      {formatDateTimeToIST(entry?.createdAt)?.time +
                        ", " +
                        formatDateTimeToIST(entry?.createdAt)?.date}
                    </td>
                    <td className="text-center py-1">
                      {formatDateTimeToIST(entry?.createdAt)?.date}
                    </td>
                    <td className="text-center py-1">{entry?.status}</td>
                    <td className="text-center py-1">
                      {entry?.out_time ? entry?.out_time : "-"}
                    </td>
                    <td className="text-center py-1">
                      {entry?.in_time ? entry?.in_time : "-"}
                    </td>
                    {/* <td className="text-center py-1">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
