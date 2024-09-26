"use client";

import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";

import { ContactForm } from "@/components/contact-form";
import { CursorContext, CursorContextType } from "@/components/cursor-context";
import Link from "next/link";

const Contact = () => {
  const context = useContext<CursorContextType | undefined>(CursorContext);

  if (!context) {
    throw new Error("CursorContext not provided");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = context;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="h-full flex flex-col xl:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Contact info</h3>
            <ul className="flex flex-col items-center xl:items-start gap-12">
              <li className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" fill alt="Pin icon" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Address</h4>
                  <p className="leading-relaxed">
                    123/45 Elm Str, Suite 800,
                    <br />
                    Los Angeles, CA 90012
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image
                    src="/assets/contact/phone.svg"
                    fill
                    alt="Phone icon"
                  />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone number</h4>
                  <p className="pt-1 flex-1">
                    Phone:
                    <Link href="tel:+990887380388">+99(0) 887 380 388</Link>
                  </p>
                  <p className="pt-1 flex-1">
                    Fax:
                    <Link href="tel:+990887380388">+99(0) 887 380 389</Link>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image
                    src="/assets/contact/email.svg"
                    fill
                    alt="Email icon"
                  />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email address</h4>
                  <div className="flex flex-col gap-1">
                    <Link href="mailto:info@example.com">info@example.com</Link>
                    <Link href="mailto:support@example.com">
                      support@example.com
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1"
          >
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-5 mx-auto xl:mx-0">
              <h3 className="h3 mb-8 text-center">Get in touch</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
