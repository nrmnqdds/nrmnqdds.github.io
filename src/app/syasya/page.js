"use client";

import React from "react";
import Syasyatopnav from "../../../public/components/Syasyatopnav";
import Syasyasidenav from "../../../public/components/Syasyasidenav";

export default function Syasya() {
  return (
    <div className="bg-white w-screen min-h-screen">
      <Syasyatopnav />
      <Syasyasidenav />
      <p>test</p>
    </div>
  );
}
