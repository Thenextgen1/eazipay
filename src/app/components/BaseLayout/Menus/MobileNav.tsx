"use client";

import Hamburger from "hamburger-react";
import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/Nav.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { BsPersonFill } from "react-icons/bs";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="flex max-w-3xl mx-auto sm:p-16 justify-between items-center lg:hidden p-6 cursor-pointer">
      <h1 className=" font-semibold tracking-wider sm:text-lg z-[100]">
        <Link href="/">
          <Image
            width={122}
            height={32}
            alt="logo"
            src="/images/eazipaylogo.svg"
          />
        </Link>
      </h1>
      <div className="z-[100] relative">
        <Hamburger
          size={25}
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, y: -300 }}
            className={styles.mobile_menu_list}
          >
            <ul className="text-eaziDark">
              <li>Individual</li>
              <li>Business</li>
              <li>Pricing</li>
              <li> Set your payroll</li>
            </ul>
            <div className="flex flex-col items-center cursor-pointer">
              {session ? (
                <>
                  <p className="my-4 text-eaziDark  ">
                    Signed in as {session.user?.email}
                  </p>
                  <p
                    onClick={() => signOut()}
                    className="bg-[#2c6e49] my-4 rounded-md p-2 px-4 mx-2 text-white"
                  >
                    <BsPersonFill /> Logout
                  </p>
                </>
              ) : (
                <>
                  <p className="border-[1px] w-full my-4 text-center py-[10px] text-sm font-medium  border-solid rounded-[24px] px-2 border-eaziGreen">
                    <Link href="/login">Log in</Link>
                  </p>
                  <p className="rounded-[24px] my-4 text-white font-medium text-sm shadow-button py-[10px] mx-4 px-2 w-full text-center bg-eaziGreen ">
                    <Link href="/register">Register</Link>
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
