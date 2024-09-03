"use client";

import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center items-center h-full"
    >
      <div className="flex flex-col gap-3 justify-center items-center mt-10">
        <h3 className="text-3xl sm:text-4xl text-accent">
          Let's work together
        </h3>
        <p>Feel free to contact me via Linkedin</p>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adrian-cura/"
          className="  border rounded-full    border-y-accent p-3 hover:text-primary hover:bg-accent-hover hover:border-black transition-all duration-300 ease-in-out mt-3 group  "
        >
          <FaLinkedinIn className="h-16 w-16 border-2 rounded-full p-3 group-hover:border-black group-hover:text-primary transition-all duration-300  ease-in-out  " />
        </Link>
      </div>
    </motion.div>
  );
};

export default Contact;
