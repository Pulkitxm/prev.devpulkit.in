"use client";

import { FloatingNav } from "./FloatingNav";
import {
  IconAbout,
  IconContact,
  IconHome,
  IconProject,
  IconSkill,
} from "./Icons";

const navItems = [
  {
    name: "Home",
    onClick: () =>
      document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" }),
    icon: (
      <IconHome className="h-4 w-4 text-neutral-600 group-hover:text-white" />
    ),
  },
  {
    name: "About",
    onClick: () =>
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }),
    icon: (
      <IconAbout className="h-4 w-4 text-neutral-600 group-hover:text-white" />
    ),
  },
  {
    name: "Skills",
    onClick: () =>
      document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }),
    icon: (
      <IconSkill className="h-6 w-6 text-neutral-600 group-hover:text-white" />
    ),
  },
  {
    name: "Projects",
    onClick: () =>
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" }),
    icon: (
      <IconProject className="h-4 w-4 fill-[#525252] group-hover:fill-white" />
    ),
  },
  {
    name: "Contact",
    onClick: () =>
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" }),
    icon: (
      <IconContact className="h-4 w-4 text-neutral-600 group-hover:text-white" />
    ),
  },
];

export default function NavBar() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
