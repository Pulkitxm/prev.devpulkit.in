import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projects from "@/app/data/projects";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectStack() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        stagger: 1,
        duration: 0.15,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        scrub: true,
        animation,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="gallery flex w-screen">
      <div className="ml-auto w-[40%] text-white">
        {projects.map((project, index) => (
          <div
            key={index}
            className="details flex h-screen w-[40vw] flex-col justify-center space-y-3"
          >
            <div className="relative z-20 my-5 flex flex-col justify-center space-y-3 overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-5 group-hover:border-slate-700">
              <h1 className="w-full text-3xl font-extrabold">
                {project.title}
              </h1>
              <p>{project.description}</p>
              <div className="flex w-full justify-end">
                <Link
                  href={project.link}
                  target="_blank"
                  className={cn(
                    "flex w-[125px] items-center justify-center rounded-lg bg-white px-3 py-2 text-end text-base text-black hover:bg-gray-300",
                  )}
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rightblock flex h-screen w-[50%] items-center justify-center">
        <div className="relative h-[20vw] w-[35vw]">
          {projects.map((project, index) => (
            <div key={index} className="photo absolute h-full w-full">
              <Image
                src={project.image}
                alt="img-1"
                className="pointer-events-none h-full w-full rounded-xl border-2 border-white/70 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
