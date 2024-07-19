import { Link } from "react-router-dom";
import { BlogType } from "./types";

export default function Blog({ blog }: { blog: BlogType }) {
  return (
    <Link
      to={blog.url}
      target="_blank"
      className="w-[97vw] h-[400px] md:w-[800px] md:h-[500px] mr-10 flex flex-col rounded-xl overflow-hidden bg-[#088395] text-white"
    >
      <div
        className="w-full h-full bg-[#f0f0f0] bg-cover bg-center brightness-90"
        style={{ backgroundImage: `url(${blog.coverImage.url})` }}
      ></div>
      <div className="px-3 py-2">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg md:text-2xl">{blog.title}</h1>
          <p className="text-base md:text-xl">
            {blog.publishedAt.toLocaleDateString()}
          </p>
        </div>
        <div className="flex pt-3">
          <div
            style={{
              backgroundImage:
                "url(https://cdn.hashnode.com/res/hashnode/image/upload/v1714285006958/M2NOdI53B.jpg?w=72&h=72&fit=crop&crop=faces&auto=compress,format&format=webp)",
            }}
            className="rounded-full h-10 w-10 md:h-12 md:w-12 bg-cover bg-center mr-2"
          />
          <div>
            <h2 className="text-base md:text-xl">Pulkit</h2>
            <div className="flex items-center">
              <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 576 512">
                <path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"></path>
              </svg>
              <p className="mr-2">{blog.readTimeInMinutes} mins read</p>
              <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 512 512">
                <path d="M507.8 37.24c6 6.54 5.5 16.65-1 22.6l-176 159.96c-6.4 5.8-16.1 5.6-22.1-.5L190.4 100.1 25.41 220.9c-7.15 5.2-17.152 3.7-22.349-3.5-5.198-7.1-3.617-17.1 3.529-22.3L182.6 67.06c5.5-4.63 15.1-3.94 20.7 1.63L320.5 185.9 485.2 36.16c6.6-5.94 16.7-5.46 22.6 1.08zM112 368v64c0 26.5-21.49 48-48 48s-48-21.5-48-48v-64c0-26.5 21.49-48.9 48-48.9s48 22.4 48 48.9zm-32 64v-64c0-8.8-7.16-16-16-16s-16 7.2-16 16v64c0 8.8 7.16 16 16 16s16-7.2 16-16zm64-160.9c0-25.6 21.5-48 48-48s48 22.4 48 48V432c0 26.5-21.5 48-48 48s-48-21.5-48-48V271.1zm48-16c-8.8 0-16 8.1-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V271.1c0-7.9-7.2-16-16-16zM368 336v96c0 26.5-21.5 48-48 48s-48-21.5-48-48v-96c0-26.5 21.5-48.9 48-48.9s48 22.4 48 48.9zm-32 96v-96c0-8.8-7.2-16.9-16-16.9s-16 8.1-16 16.9v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm64-160.9c0-25.6 21.5-48 48-48s48 22.4 48 48V432c0 26.5-21.5 48-48 48s-48-21.5-48-48V271.1zm48-16c-8.8 0-16 8.1-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V271.1c0-7.9-7.2-16-16-16z"></path>
              </svg>
              <p>{blog.views} views</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
