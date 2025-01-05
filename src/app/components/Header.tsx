import React from "react";

export const Header = () => {
  const myFunction = () => {
    sessionStorage.clear();
    window.location.replace("https://gate-pass-nitj.onrender.com/");
  };
  const myFunction2 = () => {
    sessionStorage.clear();
    window.location.replace("https://gate-pass-nitj.onrender.com/slogin");
  };
  const myFunction3 = () => {
    sessionStorage.clear();
    window.location.replace("https://gate-pass-nitj.onrender.com/tlogin");
  };
  const myFunction4 = () => {
    sessionStorage.clear();
    window.location.replace("https://gate-pass-nitj.onrender.com/hlogin");
  };
  const myFunction5 = () => {
    sessionStorage.clear();
    window.location.replace("https://gate-pass-nitj.onrender.com/glogin");
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
              <img src="nitjlogo.png" alt="NITJ" height="60px" width="20px" />
            </a>
          </div>
          <ul>
            <li>
              <a href="#" onClick={myFunction} className="current">
                Home
              </a>
            </li>

            <form method="post" action="/slogin">
              <li>
                <a href="#" onClick={myFunction2}>
                  Student
                </a>
              </li>
            </form>
            <form method="post" action="/tlogin">
              <li>
                <a href="#" onClick={myFunction3}>
                  Hostel
                </a>
              </li>
            </form>
            <form method="post" action="/hlogin">
              <li>
                <a href="#" onClick={myFunction4}>
                  Admin
                </a>
              </li>
            </form>
            <form method="post" action="/glogin">
              <li>
                <a href="#" onClick={myFunction5}>
                  Gate
                </a>
              </li>
            </form>
          </ul>
        </nav>
        <div className="header-content">
          <h1>Welcome to NITJ Gate Pass Management System</h1>

          <p className="lead">
            A completely digital process to generate your gate pass and get
            approved by hostel admin. Step towards paperless campus.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
