import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projects from "./Projects";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

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
        animation: animation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="gallery flex w-screen">
      <div className="w-[40%] ml-auto text-white">
        {projects.map((project, index) => (
          <div
            key={index}
            className="details h-screen w-[40vw] flex flex-col justify-center space-y-3"
          >
            <div className="flex flex-col justify-center space-y-3 rounded-2xl p-5 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20 my-5">
              <h1 className="text-3xl font-extrabold w-full">
                {project.title}
              </h1>
              <p>{project.description}</p>
              <div className="w-full flex justify-end">
                <Link
                  to={project.link}
                  target="_blank"
                  className={cn(
                    "bg-white hover:bg-gray-300 text-black rounded-lg text-base px-3 py-2 text-end w-[115px] flex items-center justify-center"
                  )}
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rightblock w-[50%] h-screen flex justify-center items-center">
        <div className="w-[35vw] h-[20vw] relative">
          {projects.map((project, index) => (
            <div key={index} className="photo absolute w-full h-full">
              <img
                src={project.image}
                alt="img-1"
                className="w-full h-full object-cover rounded-xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
