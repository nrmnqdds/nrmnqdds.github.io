"use client";

import React from "react";
import Syasyatopnav from "../../../public/components/Syasyatopnav";
import Syasyasidenav from "../../../public/components/Syasyasidenav";

export default function Syasya() {
  return (
    <div className="bg-white max-w-screen min-h-screen">
      <Syasyatopnav />
      <div className="float-right w-[10%] bg-gray-300 flex items-center justify-center h-screen text-black z-[1]">
        Advertisement
      </div>
      <div className="float-left w-[10%] bg-gray-300 ">
        <Syasyasidenav />
      </div>
    </div>
  );
}
