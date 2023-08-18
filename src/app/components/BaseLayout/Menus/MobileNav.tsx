"use client";

import Hamburger from "hamburger-react";
import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/Nav.module.css";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex max-w-3xl mx-auto sm:p-16 justify-between items-center lg:hidden p-6 cursor-pointer">
      <h1 className=" font-semibold tracking-wider sm:text-lg z-[100]">
        <Image
          width={122}
          height={32}
          alt="logo"
          src="/images/eazipaylogo.svg"
        />
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
