"use client";
import Image from "next/image";
import styles from "@/app/styles/Nav.module.css";

const DesktopNav = () => {
  return (
    <nav
      className={`${styles.desktop_nav_container} hidden lg:pl-24 xl:px-36 px-6 3xl:max-w-[1740px]  3xl:px-0  3xl:mx-auto lg:flex justify-between items-center py-6`}
    >
      <div className="flex items-center">
        <h1>
          <Image
            width={122}
            height={32}
            alt="logo"
            src="/images/eazipaylogo.svg"
          />
        </h1>
        <ul className="text-eaziDark ml-10">
          <li>Individual</li>
          <li>Business</li>
          <li>Pricing</li>
          <li className={styles.hidden}> Set your payroll</li>
        </ul>
      </div>
      <div className="flex items-center">
        <p className="border-[1px] mx-4 min-w-[168px] w-full text-center py-[10px] px-8 text-sm font-medium  border-solid rounded-[24px] border-eaziGreen">
          Log in
        </p>
        <p className="rounded-[24px] text-white font-medium text-sm shadow-button py-[10px] mx-4 min-w-[168px] w-full text-center bg-eaziGreen ">
          Register
        </p>
      </div>
    </nav>
  );
};

export default DesktopNav;
