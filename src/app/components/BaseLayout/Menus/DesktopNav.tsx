"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import styles from "@/app/styles/Nav.module.css";
import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";

const DesktopNav = () => {
  const { data: session } = useSession();

  return (
    <nav
      className={`${styles.desktop_nav_container} hidden lg:pl-24 xl:px-28 px-6 3xl:max-w-[1740px]  3xl:px-0  3xl:mx-auto lg:flex justify-between items-center py-6`}
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
      <div className="flex items-center cursor-pointer">
        {session ? (
          <>
            <p className="my-4 text-eaziDark  ">
              Signed in as {session.user?.email}
            </p>
            <p
              onClick={() => signOut()}
              className="bg-eaziGreen ml-6 my-4 rounded-md p-2 px-4 mx-2 text-white"
            >
              <BsPersonFill /> Logout
            </p>
          </>
        ) : (
          <>
            {" "}
            <p className="border-[1px] mx-4 min-w-[168px] w-full text-center py-[10px] px-8 text-sm font-medium  border-solid rounded-[24px] border-eaziGreen">
              <Link href="/login">Log in</Link>
            </p>
            <p className="rounded-[24px] text-white font-medium text-sm shadow-button py-[10px] mx-4 min-w-[168px] w-full text-center bg-eaziGreen ">
              <Link href="/register">Register</Link>
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default DesktopNav;
