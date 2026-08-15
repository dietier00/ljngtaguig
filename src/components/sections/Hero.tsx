"use client";

import Image from "next/image";

import Dyts from "../../../public/images/LJ.jpg";
import HalftoneReveal from "../reactbits/HalftoneReveal";
import TextType from "../reactbits/TextType";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10">

        {/* LEFT */}
        <div className="flex flex-col justify-center">

          <p
            className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400"
            style={{ fontFamily: "opti" }}
          >
            Developer · Designer · Problem Solver
          </p>

          <h1
            className="max-w-3xl text-5xl font-bold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "epic" }}
          >
            Hell, World!
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg"
            style={{ fontFamily: "opti" }}
          >
           
          </p>

          {/* CTA */}
          

        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-130">

            <HalftoneReveal
              src={Dyts.src}
              inkColor="#000000"
              paperColor="#ffffff"
              mode="mono"
              dotDensity={125}
              angle={45}
              revealRadius={0.21}
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

      </div>
    </div>
  );
}