"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
// import { CursorContext, CursorContextType } from "@/components/cursor-context";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  // const context = useContext<CursorContextType | undefined>(CursorContext);

  // if (!context) {
  //   throw new Error("CursorContext not provided");
  // }

  // const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        topbar
      </div>
      <div className="container mx-auto flex justify-between items-center px-6">
        <Logo />
        <div
          className="cursor-pointer xl:hidden"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed top-0 bottom-0 right-0 z-50 w-[300px] xl:hidden bg-primary"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};
