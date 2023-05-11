"use client";

import Head from "next/head";
import Image from "next/image";
import Header from "../../public/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen bg-[#121212] justify-center">
      <Header />
    </div>
  );
}
