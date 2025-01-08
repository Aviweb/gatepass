"use client";
import Head from "next/head";
import "../static/main.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Use Next.js Head component */}
      <Head>
        <title>Gate Pass Management System</title>
      </Head>

      <Header />

      <div>
        <section id="home-a" className="text-center py-2 dark-font">
          <div className="container">
            <h2 className="section-title">Gate Pass Rules</h2>
            <div className="bottom-line"></div>

            <div className="specials">
              <div>
                <i aria-hidden={true} className="fas fa-desktop fa-3x my-1"></i>
                <h3>Rule 1</h3>
                <p>A gate pass can only be used once.</p>
              </div>

              <div>
                <i className="fas fa-server fa-3x my-1"></i>
                <h3>Rule 2</h3>
                <p>No gate pass will generated after 8PM.</p>
              </div>

              <div>
                <i className="fas fa-wrench fa-3x my-1"></i>
                <h3>Rule 3</h3>
                <p>
                  Your gate pass should be approved by hostel admin before you
                  go out.{" "}
                </p>
              </div>
              <div>
                <i className="fas fa-database fa-3x my-1"></i>
                <h3>Rule 4</h3>
                <p>
                  You have to return to the hostel before 9PM (if not on leave).
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
