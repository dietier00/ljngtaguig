import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <h1 className="text-4xl font-bold text-foreground dark:text-white">About Page</h1>
      <p className="mt-4 text-lg text-muted-foreground dark:text-gray-400">
        This is the about page of the application.
      </p>
    </div>
  );
}
