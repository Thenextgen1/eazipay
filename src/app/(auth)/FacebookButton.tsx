"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaFacebookSquare } from "react-icons/fa";

const FacebookButton = () => {
  const searchParams = useSearchParams()!;
  let callbackUrl = searchParams.get("callbackUrl")!;

  if (callbackUrl === null) {
    callbackUrl = "/my/dashboard";
  }

  return (
    <p
      onClick={() => signIn("facebook", { callbackUrl })}
      className=" flex items-center justify-between pl-4 flex-1   cursor-pointer hover:bg-[#F5F5F5] hover:font-medium  bg-[#EAECEF] py-2 sm:py-4 my-4 rounded-lg text-center"
    >
      <FaFacebookSquare
        size={20}
        className="align-middle text-blue-700"
      />
      <span> Continue with Facebook</span>
      <span></span>
    </p>
  );
};

export default FacebookButton;
