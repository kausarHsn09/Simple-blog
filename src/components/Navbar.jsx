import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/KHBLOG..png";

const Navbar = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-center h-40 ">
        <div className="logo w-5/12	">
          <Link to="./">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="contact-btn w-5/12">
          <button className="  float-right	font-josefin bg-btnColor text-primary rounded-full px-10 py-3 text-lg">
            Contact
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
