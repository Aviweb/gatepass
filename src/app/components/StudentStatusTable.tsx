import React, { useEffect, useState } from "react";
interface StudentDataProps {
  applied_at: string;
  status?: string;
  out_time?: string;
  in_time?: string;
}

export const StudentStatusTable = () => {
  const [studentData, setstudentData] = useState<StudentDataProps[]>([]);
  const roll_no = "12345";
  const columnTitles = [
    "Applied at",
    "Status",
    "Out Time",
    "In Time",
    "Actions",
  ];
  //   const studentData = [
  //     {
  //       applied_at: "13th March",
  //       status: "pending",
  //       out_time: "14th March",
  //       in_time: "15th March",
  //     },
  //   ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/submitGatePass?roll_no=${roll_no}`);
        const responseData = await response.json();
        if (response) {
          setstudentData(responseData?.data);
        }
      } catch (err) {
        console.log("error ", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="px-4  mx-0 xl:w-[1340px] xl:mx-auto mt-14">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columnTitles.map((title, index) => (
                <th scope="col" key={index} className="px-6 py-3">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {studentData.map((entry, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className=" py-1">{entry?.applied_at}</td>
                <td className=" py-1">{entry?.status}</td>
                <td className=" py-1">{entry?.out_time}</td>
                <td className=" py-1">{entry?.in_time}</td>
                <td className=" py-1">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};
