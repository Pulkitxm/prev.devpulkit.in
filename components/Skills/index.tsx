"use client";
import React, { useEffect, useMemo, useState } from "react";
import { displayItems } from "./Items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ICON_SIZE } from "../Blogs/types";
import Link from "next/link";

export default function Skills() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window == "undefined" || !window) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isScreenLarge = useMemo(() => {
    return windowWidth > 1024;
  }, [windowWidth]);

  return (
    <div id="skills" className="mb-20 mt-20 text-white lg:mb-60">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="my-10 text-center text-3xl font-bold lg:my-40 lg:text-5xl">
          My Technical Skills
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {displayItems.map((section) => (
            <AccordionItem
              key={section.name}
              value={section.name}
              className="rounded-lg border-none bg-gray-800/50 px-2"
            >
              <AccordionTrigger className="rounded-lg px-2 hover:bg-gray-700/50">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{section.name}</span>
                  <div className="flex -space-x-2">
                    {section.items.slice(0, 3).map((skill, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex h-6 w-6 transform-none items-center justify-center rounded-full bg-gray-700 ring-2 ring-gray-800"
                        >
                          <div className="transform-none">
                            <skill.icon
                              size={ICON_SIZE.SMALL}
                              key={idx}
                              isScreenLarge={isScreenLarge}
                              className="right-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                    {section.items.length > 3 && (
                      <div className="flex h-6 w-6 transform-none items-center justify-center rounded-full bg-gray-700 ring-2 ring-gray-800">
                        <span className="text-xs text-gray-300">
                          +{section.items.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 pt-2">
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {section.items.map((skill, idx) => (
                    <IconSkill
                      key={idx}
                      url={skill.url}
                      className="group flex flex-col items-center justify-center rounded-lg p-2 transition-all hover:bg-gray-700/50"
                      title={`${skill.name}${skill.url ? " (open in new tab)" : ""}`}
                    >
                      <div className="transform-none transition-transform duration-200 group-hover:scale-110">
                        <skill.icon
                          size={ICON_SIZE.LARGE}
                          key={idx}
                          isScreenLarge={isScreenLarge}
                        />
                      </div>
                      <span className="mt-3 text-center text-xs text-gray-400 group-hover:text-gray-200">
                        {skill.name}
                      </span>
                    </IconSkill>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

function IconSkill({
  children,
  title,
  className,
  url,
}: {
  children: React.ReactNode;
  title: string;
  url?: string;
  className?: string;
}) {
  return url ? (
    <Link href={url} target="_blank" className={className} title={title}>
      {children}
    </Link>
  ) : (
    <div className={className} title={title}>
      {children}
    </div>
  );
}
