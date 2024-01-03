import LenisSmoothScroll from "@/components/LenisSmoothScroll";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const sfPro = localFont({
  src: "../public/fonts/SF-Pro-Display-Medium.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quddus | Software Developer",
  description: "Software Developer from Ampang, Selangor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`m-0 absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]  ${sfPro.className}`}
      >
        <Suspense fallback={<Loading />}>
          <LenisSmoothScroll>
            <Navbar />
            {children}
          </LenisSmoothScroll>
        </Suspense>
      </body>
    </html>
  );
}
