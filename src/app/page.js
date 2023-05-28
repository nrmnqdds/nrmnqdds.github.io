import React from "react";
import localFont from "next/font/local";
import GHContributonGraph from "../../public/components/GHContributionGraph";

const SFBold = localFont({
  src: "../../public/fonts/SF-Pro-Text-Bold.otf",
  display: "swap",
});

export default function Home() {
  return (
    <div
      className={`${SFBold.className} flex flex-col min-h-screen w-screen bg-[#121212] p-10`}
    >
      <div className="text-left m-10 ml-0">
        <p className="text-6xl">Hello! I am Quddus!</p>
        <p>20 years old IIUM Student</p>
      </div>
      <GHContributonGraph />
    </div>
  );
}
