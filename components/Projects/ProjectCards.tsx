import Image from "next/image";
import projects from "./Projects";
import Link from "next/link";

export default function ProjectCards() {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative z-20 my-5 h-full w-full overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-4 group-hover:border-slate-700"
        >
          <div className="relative z-50">
            <div className="p-4">
              <h4 className="mt-4 font-bold tracking-wide text-zinc-100">
                {project.title}
              </h4>
              <p className="mt-8 text-sm tracking-wide text-zinc-400">
                <Image
                  src={project.image}
                  alt="VidWave: (HLS Video Streaming)"
                  className="mb-4 h-40 w-full rounded-xl object-cover"
                />
                {project.description}
              </p>
              <div className="mt-5 flex w-full justify-end">
                <Link
                  href={project.link}
                  className="rounded-xl bg-white px-3 py-2 text-end text-xl text-black"
                  target="_blank"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
