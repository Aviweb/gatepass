"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import "../../static/main.css";
interface SocialMediaIconsData {
  title: IconDefinition;
  link?: string;
}
export const Footer = () => {
  const footerData: SocialMediaIconsData[] = [
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
    // {
    //   title: faGithub,
    //   link: "https://github.com/GDSC-NITJ/",
    // },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-customPadding mt-[38px] bg-[#262626]">
      <p className="text-xs lg:text-base text-center mt-3 lg:mt-0">
        Copyright &copy; 2023, All Rights Reserved
      </p>
      <div className="space-x-2 lg:space-x-4 py-1">
        {footerData?.map((item: SocialMediaIconsData, index) => (
          <a
            key={index}
            href={item?.link}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="h-4 w-4 p-1 lg:h-6 lg:w-6 lg:p-1.5 hover:bg-black hover:text-gray-200 bg-[#262626] border lg:border-2 text-white rounded-full"
              icon={item?.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
