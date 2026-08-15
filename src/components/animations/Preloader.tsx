"use client";

import React from "react";
import Lottie from "lottie-react";
import Midmid from "../../../public/animation/midmid.json";

export default function Preloader() {
  const [isLoading, setIsLoading] = React.useState(true);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
      <Lottie
        animationData={Midmid}
        loop={false}
        autoplay
        onComplete={() => setIsLoading(false)}
      />
    </div>
  );
}