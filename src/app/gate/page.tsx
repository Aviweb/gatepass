"use client";
import { Footer } from "@/app/components/Footer";
import React from "react";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import HeaderNew from "../components/HeaderNew";
interface HostelDataProps {
  createdAt: Date;
  reason?: string;
  status?: string;
  outTime: Date;
  inTime: Date;
  id: string;
}

const Page = () => {
  const [studentData, setstudentData] = useState<HostelDataProps[]>([]);
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

  const handleUpdateStatus = async (uuid: string, status: string) => {
    console.log("data", uuid);

    const formData = {
      uuid: uuid,
      status: status,
      // date: new Date().toISOString(),
    };
    try {
      const response = await fetch("api/submitGatePass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await response.json();
    } catch (error) {
      console.log("error", error);
    }
  };

  function formatDateTimeToIST(dateTimeStr: Date) {
    const dateObj = new Date(dateTimeStr);

    // Convert to IST
    const istDateObj = new Date(
      dateObj.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    let hours = istDateObj.getHours(); // Directly get hours in IST
    const minutes = istDateObj.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    const day = istDateObj.getDate();
    const month = istDateObj.toLocaleString("en-US", {
      month: "short",
      timeZone: "Asia/Kolkata",
    });
    const year = istDateObj.getFullYear();

    return {
      date: `${day} ${month} ${year}`,
      time: `${hours}:${minutes} ${ampm}`,
    };
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
          const filteredData = responseData?.data?.filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (item: any) =>
              item?.status === "approved" ||
              item?.status === "moved-in" ||
              item?.status === "moved-out"
          );

          setstudentData(filteredData);
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
        <HeaderNew role="hostelClerk" />
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
                {studentData?.map((entry, index) => {
                  return (
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
                        {entry?.createdAt ? (
                          <p>{formatDateTimeToIST(entry?.createdAt)?.date}</p>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="text-center py-1 capitalize">
                        {entry?.status}
                      </td>

                      <td className="text-center py-1 w-[100px]">
                        <div className="flex justify-between space-x-3 px-6">
                          {entry?.status === "approved" ? (
                            <button
                              onClick={() =>
                                handleUpdateStatus(entry?.id, "moved-out")
                              }
                              className={`bg-green-600 w-[80px] hover:bg-green-700 `}
                            >
                              Approve
                            </button>
                          ) : entry?.status === "moved-out" ||
                            entry?.status === "moved-in" ? (
                            <p>
                              {formatDateTimeToIST(entry?.outTime)?.time}
                              <br />
                              {formatDateTimeToIST(entry?.outTime)?.date}
                            </p>
                          ) : (
                            <p className="text-center w-full">-</p>
                          )}
                        </div>
                      </td>
                      <td className="text-center py-1 w-[100px]">
                        <div className="flex justify-between space-x-3 px-6">
                          {entry?.status === "moved-out" ? (
                            <button
                              onClick={() =>
                                handleUpdateStatus(entry?.id, "moved-in")
                              }
                              className={`bg-green-600 w-[80px] hover:bg-green-700 `}
                            >
                              Approve
                            </button>
                          ) : entry?.status === "moved-in" ? (
                            <p>
                              {formatDateTimeToIST(entry?.inTime)?.time}
                              <br />
                              {formatDateTimeToIST(entry?.inTime)?.date}
                            </p>
                          ) : (
                            <p className="text-center w-full">-</p>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
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
