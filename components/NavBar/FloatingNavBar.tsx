import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import navItems from "./NavItems";
import { cn } from "@/utils/cn";

export default function FloatingNavBar({ expaned }: { expaned: boolean }) {
  return (
    <motion.nav
      initial={{
        width: "200px",
        height: "60px",
        top: 100,
        borderWidth: 3,
        borderRadius: "9999px",
      }}
      animate={{
        width: expaned ? "auto" : "200px",
        height: expaned ? "60px" : "60px",
        top: expaned ? "1.7rem" : 100,
        borderWidth: expaned ? 2 : 3,
        borderRadius: expaned ? "40px" : "9999px",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed left-[50%] z-[5000] w-full -translate-x-[50%] animate-jump-top shadow-md dark:shadow-lg ${
        expaned
          ? "cursor-pointer select-none border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          : "border-white opacity-75"
      }`}
    >
      {expaned ? <NavBarContent /> : <Init />}
    </motion.nav>
  );
}

function Init() {
  const [dots, setDots] = useState(0);
  const maxDots = 4;
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots + 1) % maxDots);
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full text-2xl text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        init
      </motion.div>
      {Array.from({ length: maxDots }).map((_, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index < dots ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`mx-1 text-white`}
        >
          .
        </motion.span>
      ))}
    </div>
  );
}

function NavBarContent() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-black px-5 text-sm text-white">
      {navItems.map((navItem, idx: number) => (
        <div
          key={`link=${idx}`}
          className={cn(
            "relative flex cursor-pointer select-none items-center space-x-1 p-2 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
          )}
          onClick={navItem.onClick}
        >
          <span className="block">{navItem.icon}</span>
          <span className="hidden text-sm sm:block">{navItem.name}</span>
        </div>
      ))}
    </div>
  );
}
