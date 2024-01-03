"use client";

import SplitLetters from "@/components/SplitLetters";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-800">
      <span className="animate-bounce font-chakra text-5xl uppercase text-prim transition-all ease-in-out sm:text-9xl">
        <SplitLetters text="NOT FOUND" />
      </span>
    </div>
  );
};

export default NotFound;
