"use client";

import ScrollAmount from "./ScrollAmount";
import SmoothScrolling from "./SmoothScrolling";

export default function Animations({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SmoothScrolling>
      <ScrollAmount />
      {children}
    </SmoothScrolling>
  );
}
