"use client";
import React from "react";
import "../../static/main.css";
import "../../static/new.css";
import "../../static/alert.css";
import Image from "next/image";

interface NavItems {
  title: string;
  link: string;
}

interface props {
  role?: string;
}

export const HeaderShort = ({ role }: props) => {
  const clearCookies = () => {
    // Get all cookies
    const cookies = document.cookie.split(";");

    // Loop through and remove each cookie
    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    });
  };
  const studentRoleData = [
    { title: "Home", link: "/student/home" },
    { title: "Apply", link: "/student/apply" },
    { title: "Status", link: "/student/status" },
    { title: "Logout", link: "/" },
  ];
  const adminRoleData = [
    { title: "Gatepass", link: "/admin/status" },
    { title: "Hostels", link: "/admin/hostelData" },
    { title: "Student", link: "/admin/student" },
    { title: "Logout", link: "/" },
  ];
  const mainPageData = [
    { title: "Home", link: "/" },
    { title: "Student", link: "/slogin" },
    { title: "Hostel", link: "/hlogin" },
    { title: "Admin", link: "/alogin" },
    { title: "Gate", link: "/glogin" },
  ];

  let headerLinksData;

  if (role === "student") headerLinksData = studentRoleData;
  else if (role === "admin") headerLinksData = adminRoleData;
  else headerLinksData = mainPageData;
  return (
    <div
      className="bg-cover bg-right bg-fixed bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg')`,
      }}
      id="header-home"
    >
      <div className="px-customPadding py-6 h-[100px] bg-transparent  border-b-4 border-darkOrange">
        <nav id="main-nav">
          <div className="container1">
            <a href="https://www.nitj.ac.in/" target="_blank">
              <Image
                src="/nitjlogo.png"
                alt="NITJ"
                className="lg:max-w-[60px]"
                width={60}
                height={60}
              />
            </a>
          </div>
          <ul>
            {headerLinksData.map((item: NavItems, index) => (
              <li key={index}>
                <a
                  href={item?.link}
                  onClick={() => {
                    if (item?.title === "Logout") clearCookies();
                  }}
                >
                  {item?.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderShort;
