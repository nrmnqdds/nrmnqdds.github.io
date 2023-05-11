"use client";

import Header from "../../public/components/Header";
import IntroductionCard from "../../public/components/IntroductionCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-slate-200 items-center">
      <Header />
      <IntroductionCard />
    </div>
  );
}
