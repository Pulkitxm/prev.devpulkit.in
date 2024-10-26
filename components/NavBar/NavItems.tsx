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
    icon: <IconHome className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "About",
    onClick: () =>
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }),
    icon: <IconAbout className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Skills",
    onClick: () =>
      document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }),
    icon: <IconSkill className="h-6 w-6 text-neutral-500" />,
  },
  {
    name: "Projects",
    onClick: () =>
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" }),
    icon: <IconProject className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Contact",
    onClick: () =>
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" }),
    icon: <IconContact className="h-4 w-4 text-neutral-500" />,
  },
];

export default navItems;
