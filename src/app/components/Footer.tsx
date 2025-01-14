"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../../static/main.css";

export const Footer = () => {
  const footerData = [
    {
      title: faTwitter,
      link: "https://twitter.com/NITJofficial",
    },
    {
      title: faFacebook,
      link: "https://www.facebook.com/NITJofficial/",
    },
    {
      title: faInstagram,
      link: "https://www.instagram.com/nitjofficial/",
    },
    {
      title: faLinkedin,
      link: "https://www.linkedin.com/school/dr-b-r-ambedkar-national-institute-of-technology-jalandhar-official/",
    },
    {
      title: faGithub,
      link: "https://github.com/GDSC-NITJ/",
    },
  ];

  return (
    <div className=" flex items-center justify-between px-customPadding mt-[38px] bg-[#262626]">
      <p>Copyright &copy; 2023, All Rights Reserved</p>
      <div className="space-x-4 py-1">
        {footerData?.map((item: any, index) => (
          <a
            key={index}
            href={item?.link}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="h-6 w-6 p-1.5 hover:bg-black hover:text-gray-200 bg-[#262626] border-2 text-white rounded-full"
              icon={item?.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
