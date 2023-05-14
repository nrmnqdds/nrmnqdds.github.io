"use client";

import Header from "../../public/components/Header";
import IntroductionCard from "../../public/components/IntroductionCard";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-slate-200 items-center">
      <Header />
      <AnimatePresence>
        <IntroductionCard />
      </AnimatePresence>
    </div>
  );
}
