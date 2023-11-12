"use client";
import React from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

import Logo from "../../../assets/images/logo_utcc.png";

const Header = ({ handleChange, changeState }: any) => {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    if (windowWidth >= 764) {
      setOpen(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <div>
      <div className="bg-white py-5 max-md:px-5 fixed w-screen z-30">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <Image src={Logo} alt="Logo" className="cursor-pointer object-contain" />
            <div className="flex max-md:hidden">
              <li
                className={`list-none mx-5 border-b-2 hover:text-lime-600 duration-150  max-md:text-sm cursor-pointer ${
                  changeState ? "border-b-lime-600" : "border-none"
                }`}
                onClick={() => handleChange(true)}
              >
                เทียบโอนหลักสูตร
              </li>
              <li
                className={`list-none mx-5 border-b-2 hover:text-lime-600 duration-150 max-md:text-sm cursor-pointer ${
                  !changeState ? "border-b-lime-600" : "border-none"
                }`}
                onClick={() => handleChange(false)}
              >
                ประวัติการเทียบโอน
              </li>
            </div>

            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          isOpen
            ? `h-screen bg-white w-1/2 duration-200 z-20 right-0 fixed ease-in-out transition-all text-black`
            : `h-screen bg-white w-1/2 duration-200 z-20 fixed ease-in-out transition-all -right-1/2`
        }
      >
        <div className="absolute top-20 left-1">
          <li
            className={`list-none mx-5 border-b-2 border-lime-600 line duration-150 text-lg cursor-pointer leading-loose mb-8 ${
              changeState ? "text-lime-600" : "border-none"
            }`}
            onClick={() => handleChange(true)}
          >
            เทียบโอนหลักสูตร
          </li>
          <li
            className={`list-none mx-5 border-b-2 border-lime-600 line duration-150 text-lg cursor-pointer leading-loose ${
              !changeState ? "text-lime-600" : "border-none"
            }`}
            onClick={() => handleChange(false)}
          >
            ประวัติการเทียบโอน
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
