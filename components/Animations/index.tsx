"use client";

import Loader from "../Loder";
import ScrollAmount from "./ScrollAmount";
import SmoothScrolling from "./SmoothScrolling";

export default function Animations({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SmoothScrolling>
      <Loader />
      <ScrollAmount />
      {children}
    </SmoothScrolling>
  );
}
