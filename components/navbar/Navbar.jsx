import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen h-24 px-8 flex items-center justify-between  ">
      <div className="left ">
        <Link href="/">The Inclusive India</Link>
      </div>
      <div className="right hidden md:block ">
        <ul className="flex gap-8">
          <a href="#">
            <li className="li">India</li>
          </a>
          <a href="#">
            <li className="li">World</li>
          </a>
          <a href="#">
            <li className="aftarr li">Elections</li>
          </a>
          <a href="#">
            <li className="li">Sports</li>
          </a>
          <a href="#">
            <li className="li">Entertainment</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
