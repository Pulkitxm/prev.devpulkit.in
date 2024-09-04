import { useState } from "react";

export default function NpxDevpulkit() {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText("npx devpulkit").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <div
      className="mt-10 flex cursor-pointer items-center rounded-xl bg-white px-9 py-6 font-serif text-lg hover:bg-gray-200 md:mt-20 md:px-10 md:py-8 md:text-2xl"
      onClick={handleCopy}
    >
      npx devpulkit <IconClipboard copied={copied} />
    </div>
  );
}

function IconClipboard({ copied }: { copied: boolean }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className="ml-2 h-5 w-5 md:h-8 md:w-8"
    >
      {copied && (
        <path
          fillRule="evenodd"
          d="M10.854 7.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 9.793l2.646-2.647a.5.5 0 01.708 0z"
        />
      )}
      <path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" />
      <path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" />
    </svg>
  );
}
