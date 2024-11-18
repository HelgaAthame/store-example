"use client";

import { Oxygen } from "next/font/google";
import { Theme } from "@radix-ui/themes";

const font = Oxygen({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export default function Home() {
  return (
    <div className={font.className}>
      
        <Theme appearance="dark">{/* <Cards/> */}</Theme>
      
    </div>
  );
}
