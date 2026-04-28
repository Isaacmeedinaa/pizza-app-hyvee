"use client";

import React from "react";
import Image from "next/image";
import IsaacsPizzaLogo from "@/assets/images/isaacs-pizza-logo.png";
import useHeader from "./useHeader";

export const Header: React.FC = () => {
  const { onScrollToTopClick, cartCount } = useHeader();

  return (
    <div className="sticky top-0 z-50 flex items-center w-full min-w-full h-[70px] min-h-[70px] px-[20px] bg-[#0a0a0a]">
      <Image
        src={IsaacsPizzaLogo}
        alt="Isaac's Pizza Logo"
        width={40}
        height={40}
        onClick={onScrollToTopClick}
        className="cursor-pointer"
      />
      <h1
        className="text-xl font-bold mx-[15px] cursor-pointer"
        onClick={onScrollToTopClick}
      >
        Isaac&apos;s Pizza Menu
      </h1>
      <button
        onClick={() => {}}
        className="px-[10px] py-[5px] bg-[#fff] rounded-lg text-black font-bold cursor-pointer"
      >
        View Cart ({cartCount})
      </button>
    </div>
  );
};

export default Header;
