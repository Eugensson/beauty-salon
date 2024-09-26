"Use client";

import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { Social } from "@/components/social";
import { CursorContext, CursorContextType } from "@/components/cursor-context";

export const TopBar = () => {
  const context = useContext<CursorContextType | undefined>(CursorContext);

  if (!context) {
    throw new Error("CursorContext not provided");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
      <div className="h-full container mx-auto">
        <div className="h-full flex justify-between items-center">
          <motion.ul
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full xl:w-auto h-full flex flex-col lg:flex-row justify-between xl:justify-normal items-center gap-2 xl:gap-6"
          >
            <li>
              <Link
                href="tel:+990887380388"
                className="flex items-center gap-2 text-white"
              >
                <FaPhoneAlt />
                <span>+99(0) 887 380 388</span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-white"
              >
                <IoMdMail />
                <span>info@example.com</span>
              </Link>
            </li>
          </motion.ul>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:block"
          >
            <Social containerStyles="flex items-center gap-x-6 text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
