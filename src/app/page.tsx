import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const containerRef = React.createRef<HTMLDivElement>();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <Navbar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <CustomCursor containerRef={containerRef} />
        <Hero />

      </main>
    </div>
  );
}