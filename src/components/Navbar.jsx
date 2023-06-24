import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="lint-none justify-end items-center flex-1 sm:flex hidden">
        {navLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-base  ${
              idx === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex-container" : "hidden"
          } p-6 bg-black bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="lint-none justify-end items-center flex-1 flex flex-col">
            {navLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-base  ${
                  idx === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
