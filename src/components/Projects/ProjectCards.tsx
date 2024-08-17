import projects from "./Projects";

export default function ProjectCards() {
  return (
    <>
      {projects.map((project,index) => (
        <div key={index} className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20 my-5">
          <div className="relative z-50">
            <div className="p-4">
              <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                {project.title}
              </h4>
              <p className="mt-8 text-zinc-400 tracking-wide text-sm">
                <img
                  src={project.image}
                  alt="VidWave: (HLS Video Streaming)"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                {project.description}
              </p>
              <div className="flex justify-end w-full mt-5">
                <a
                  className="bg-white text-black rounded-xl px-3 py-2 text-end"
                  href={project.link}
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
