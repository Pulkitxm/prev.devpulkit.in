"use client";

import { useCallback, useRef, useState } from "react";
import "./Button.css";
import Link from "next/link";
import { sendEmail } from "@/app/actions/email";

export default function ContactMe() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const handleSendMessage = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!formInputs.name || !formInputs.email || !formInputs.message) return;
      const btn = submitButtonRef.current!;
      if (btn.querySelector("#btnText")!.textContent === "Thanks") return;
      btn.classList.add("active");
      btn.querySelector("#btnText")!.textContent = "Thanks";
      sendEmail({
        from_name: "Pulkit",
        message: "Hello",
        sender_email: "kpulkit15234@gmail.com",
      });
    },
    [formInputs.email, formInputs.message, formInputs.name],
  );
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-12 md:flex-row lg:space-x-20">
      <div className="w-[90%] pt-20 text-xl text-white md:p-0 lg:w-[200px] xl:mr-10 xl:w-auto">
        <h1 className="mb-4 w-full text-start text-3xl font-bold opacity-70 lg:text-4xl 2xl:text-5xl">
          Contact details
        </h1>
        <Link
          href={"mailto:kpulkit15234@gmail.com"}
          aria-label="Email me at"
          className="my-3 cursor-pointer select-none hover:opacity-80 2xl:text-2xl"
        >
          kpulkit15234@gmail.com
        </Link>
        <div className="my-2 flex space-x-4">
          <Link
            href={"https://www.facebook.com/Pulkit.fb"}
            target="_blank"
            aria-label="Facebook"
            className="cursor-pointer select-none hover:opacity-80"
          >
            <IconFacebook />
          </Link>
          <Link
            href={"https://www.instagram.com/teckypulkit"}
            target="_blank"
            aria-label="Instagram"
            className="cursor-pointer select-none hover:opacity-80"
          >
            <IconInstagram />
          </Link>
          <Link
            href={"https://twitter.com/devpulkitt"}
            target="_blank"
            aria-label="Twitter"
            className="cursor-pointer select-none hover:opacity-80"
          >
            <IconTwitter />
          </Link>
          <Link
            href={"http://www.linkedin.com/in/pulkit-dce"}
            target="_blank"
            aria-label="LinkedIn"
            className="cursor-pointer select-none hover:opacity-80"
          >
            <IconBxlLinkedin />
          </Link>
          <Link
            href={"https://github.com/Pulkitxm"}
            target="_blank"
            aria-label="Github"
            className="cursor-pointer select-none hover:opacity-80"
          >
            <IconGithub />
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSendMessage}
        className="my-10 flex h-[800px] w-[90%] flex-col items-end overflow-hidden rounded-2xl bg-white p-5 md:ml-10 md:h-[500px] lg:w-[700px] xl:my-0 xl:rounded-3xl"
      >
        <h1 className="mb-2 w-full text-start text-xl font-bold opacity-70 lg:text-2xl">
          Dear Pulkit,
        </h1>
        <textarea
          placeholder="Enter your name, email and make your request. I'll be happy to answer you as soon as possible"
          className="h-auto w-full flex-grow border-none text-base placeholder:font-semibold focus:outline-none md:text-xl lg:text-3xl xl:leading-[40px]"
          spellCheck="false"
          value={formInputs.message}
          onChange={(e) =>
            setFormInputs((prev) => ({ ...prev, message: e.target.value }))
          }
        />
        <div className="flex w-full flex-col justify-around py-10 pt-0 xl:flex-row">
          <input
            type="text"
            placeholder="Your name"
            className="my-5 w-full border-b-4 border-gray-400 pb-1 text-xl placeholder:font-semibold focus:outline-none lg:text-2xl xl:my-0 xl:w-[35%]"
            value={formInputs.name}
            onChange={(e) =>
              setFormInputs((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border-b-4 border-gray-400 pb-1 text-xl placeholder:font-semibold focus:outline-none lg:text-2xl xl:w-[35%]"
            value={formInputs.email}
            onChange={(e) =>
              setFormInputs((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <button ref={submitButtonRef} className="submit-btn mx-auto">
          <p id="btnText">Send</p>
          <div className="check-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
}

function IconFacebook() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className="h-7 w-7 md:h-10 md:w-10"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className="h-7 w-7 md:h-10 md:w-10"
    >
      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className="h-7 w-7 md:h-10 md:w-10"
    >
      <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
    </svg>
  );
}
function IconBxlLinkedin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7 md:h-10 md:w-10"
    >
      <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className="h-7 w-7 md:h-10 md:w-10"
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
  );
}
