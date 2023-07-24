import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const Motionlink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Motionlink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: ["#1b1b1b", "#f5f5f5"],
          color: ["#f5f5f5", "#1b1b1b"],

          transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            bounceStiffness: 0,
            loop: Infinity,
          },
        }}
      >
        RV
      </Motionlink>
    </div>
  );
};

export default Logo;
