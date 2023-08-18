"use client";

import Image from "next/image";
import { CSSProperties } from "react";
import NavComp from "./menus/NavComp";

type Props = {
  style?: CSSProperties;
};

const SideBar = ({ style }: Props) => {
  return (
    <aside
      className="fixed hidden lg:block inset-0 h-screen z-50"
      style={style}
    >
      <div className="max-w-[274px] bg-white h-full w-full shadow-sideBar">
        <div>
          <Image
            src="/images/eazipayDashboard.svg"
            alt="eazipay"
            width={272}
            height={151}
          />
        </div>
        <div className="mt-6">
          <NavComp />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
