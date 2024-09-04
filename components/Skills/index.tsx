"use client";

import { useEffect, useState } from "react";
import {
  databasesAndOrms,
  lanuguages,
  libAndFrameworks,
  otherTools,
  platforms,
} from "./Items";

const displayItems = [
  {
    name: "Languages",
    items: lanuguages,
  },
  {
    name: "Libraries and Framworks",
    items: libAndFrameworks,
  },
  {
    name: "Databases and ORMs",
    items: databasesAndOrms,
  },
  {
    name: "Other Tools",
    items: otherTools,
  },
  {
    name: "Platforms",
    items: platforms,
  },
];

export default function Skills() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice("ontouchstart" in window ? true : false);
    }
  }, []);
  return (
    <div
      id="skills"
      className="my-10 flex flex-col items-center justify-center text-white"
    >
      <h1 className="mb-5 text-3xl font-bold lg:text-5xl">
        My Technical Skills
      </h1>
      <div className="my-5 flex w-full flex-col items-center justify-center px-0">
        {displayItems.map((displayItem, index) => {
          return (
            <div
              className="my-3 flex w-full flex-col items-center justify-center"
              key={index}
            >
              <h1 className="mb-2 text-xl underline underline-offset-4 md:text-2xl">
                {displayItem.name}
              </h1>
              <div className="flex flex-wrap justify-center px-5 md:px-0">
                {displayItem.items.map((skill, index) => {
                  return (
                    <div
                      className="m-4 flex cursor-pointer flex-col items-center justify-center"
                      key={index}
                      title={skill.name}
                    >
                      {skill.icon}
                      {isTouchDevice ? skill.name : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
