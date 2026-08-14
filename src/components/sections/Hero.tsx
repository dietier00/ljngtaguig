"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Dyts from "../../../public/images/LJ.jpg";
import HalftoneReveal from "../reactbits/HalftoneReveal";
import TextType from "../reactbits/TextType";

export default function Hero() {
  return (
    <>
    {/*bento grid layout for whole hero section*/}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      {/*left side*/}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white" style={{ fontFamily: "astra" }}>
          <TextType 
          texts={["Hi, I'm Dyter"]}
          typingSpeed={100}
          deletingSpeed={70}
          pauseDuration={100}
          />
        </h1>
        <p className="text-lg text-muted-foreground dark:text-gray-400" style={{ fontFamily: "opti" }}>
          I'm a passionate developer and designer, creating beautiful and functional web experiences.
        </p>
      </div>
      {/*right side*/}
      <div className="flex items-center justify-center">
        <HalftoneReveal
    src={Dyts.src}
    inkColor="#000000"
    paperColor="#ffffff"
    mode="mono"
    dotDensity={125}
    angle={45}
    revealRadius={0.30}
    dotSize={0.9}
    shape="line"
    contrast={1.15}
    invert={false}
    edge={0.8}
    follow={0.12}
    idleReveal={0}
    trigger="always"
/>
      </div>
    </div>
    </>
  );
}