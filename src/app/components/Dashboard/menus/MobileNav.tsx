"use client";

import Image from "next/image";
import { useState } from "react";
import Hamburger from "hamburger-react";
import SideBar from "../SideBar";
import NavComp from "./NavComp";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex max-w-3xl bg-white mx-auto sm:p-16 justify-between items-center lg:hidden p-6 cursor-pointer">
      <div className="relative z-[100]">
        <h1>
          <Image
            width={117}
            height={58}
            alt="logo"
            src="/images/CompanyLogo.png"
          />
        </h1>
      </div>
      <div className="relative z-[100]">
        <Hamburger
          size={25}
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      {isOpen && (
        <div
          className={`px-4 bottom-0 mt-6 top-0 right-0 w-full z-[90] pt-24 absolute h-screen  bg-white`}
        >
          <NavComp />
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
