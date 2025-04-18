"use client";
import Image from "next/image";

interface NavItems {
  title: string;
  link: string;
}

interface props {
  role?: string;
}

export default function HeaderNew({ role }: props) {
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

  const hostelRoleData = [{ title: "Logout", link: "/" }];

  let headerLinksData;

  if (role === "student") headerLinksData = studentRoleData;
  else if (role === "admin") headerLinksData = adminRoleData;
  else if (role === "hostelClerk") headerLinksData = hostelRoleData;
  else headerLinksData = mainPageData;

  return (
    <header
      className="bg-cover bg-right bg-fixed bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg')`,
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto sm:flex max-w-7xl items-center justify-between p-6 sm:px-8"
      >
        <a
          className="flex justify-center"
          href="https://www.nitj.ac.in/"
          target="_blank"
        >
          <Image
            src="/nitjlogo.png"
            alt="NITJ"
            className="max-w-[60px]"
            width={60}
            height={60}
          />
        </a>

        <div className="flex justify-center gap-x-3 sm:gap-x-12 border-b-4 border-darkOrange sm:border-transparent">
          {headerLinksData.map((item: NavItems, index) => (
            <a
              key={index}
              onClick={() => {
                if (item?.title === "Logout") clearCookies();
              }}
              href={item.link}
              className="py-0.5 bg-transparent text-white   border-b-4 border-transparent hover:border-darkOrange"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
