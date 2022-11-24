import React from "react";

function Footer(props) {
  return (
    <>
      <div className="container-fluid bg-primary p-5 d-flex flex-column align-items-center ">
        <img src="/quizr.png" alt="logo" />
        <div className="mt-3">
          <a className="text-decoration-none text-white px-3 " href="/about">
            About us
          </a>
          <a className="text-decoration-none text-white px-3 " href="/helpline">
            HelpLine
          </a>
          <a className="text-decoration-none text-white px-3 " href="/privacy">
            Privacy
          </a>
          <a className="text-decoration-none text-white px-3 " href="/contact">
            Contact
          </a>
        </div>
        <div className="mt-4">
          <p className="text-white">&copy; All right reserved-2023</p>{" "}
        </div>
      </div>
    </>
  );
}

export default Footer;
