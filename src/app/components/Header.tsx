"use client";
import React from "react";
import Image from "next/image";
import "../../static/main.css";
interface NavItems {
  title: string;
  link: string;
}
interface props {
  role?: string;
  userName?: string;
}
export const Header = ({ role, userName }: props) => {
  const studentRoleData = [
    { title: "Home", link: "/student/home" },
    { title: "Apply", link: "/student/apply" },
    { title: "Status", link: "/student/status" },
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
  else headerLinksData = mainPageData;
  return (
    <div
      className="bg-cover bg-right bg-fixed bg-no-repeat h-screen text-white"
      style={{
        backgroundImage: `url('/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg')`,
      }}
      id="header-home"
    >
      <div className="container">
        <nav id="main-nav">
          <div className="container1">
            <a href="https://www.nitj.ac.in/" target="_blank">
              <Image
                src="/nitjlogo.png"
                alt="NITJ"
                width={60}
                height={60}
                className="lg:max-w-[60px]"
              />
            </a>
          </div>
          <ul>
            {headerLinksData?.map((item: NavItems, index) => (
              <li key={index}>
                <a
                  href={item?.link}
                  className={`${index === 0 ? "current" : ""}`}
                >
                  {item?.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-content">
          {userName ? (
            <>
              {" "}
              <h1>Welcome {userName}</h1>
              <p className="lead">
                A completely digital process to generate your gate pass and get
                approved by hostel admin. Step towards paperless campus.{" "}
              </p>
            </>
          ) : (
            <>
              <h1>Welcome to NITJ Gate Pass Management System</h1>
              <p className="lead">
                A completely digital process to generate your gate pass and get
                approved by hostel admin. Step towards paperless campus.{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
