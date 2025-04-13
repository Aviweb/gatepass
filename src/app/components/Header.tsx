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
                  onClick={() => {
                    if (item?.title === "Logout") clearCookies(); // cookies.clear();
                  }}
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
              <p className="text-6xl font-extrabold text-center leading-[77px]">
                Welcome Back {userName}
              </p>
              <p className="lead">
                It&apos;s been a while since you&apos;ve been studying. How
                about we try to get you a gate pass?
                <br />
                <strong>LET&apos;S GO!!!</strong>
              </p>
            </>
          ) : (
            <>
              <p className="text-6xl font-extrabold text-center leading-[77px]">
                Welcome to NITJ Gate Pass Management System
              </p>
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
