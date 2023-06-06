"use client";

import React from "react";

export default function Syasyatopnav() {
  return (
    <div className="max-w-screen h-[50px] bg-gray-500 z-[2] flex items-center">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Username"
          className="w-[20%] px-2 py-1 bg-slate-300 text-sm ml-5 rounded-lg placeholder-black"
        />
      </div>
      <div className="flex-1 flex justify-end">test2</div>
    </div>
  );
}
