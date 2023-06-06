"use client";

import React from "react";

export default function Syasyatopnav() {
  return (
    <div className="absolute w-screen flex flex-col">
      <div className="h-[50px] bg-gray-500 z-[10] flex items-center">
        <div className="flex-1 flex gap-2 ml-5">
          <button className="bg-white w-[30px] h-[30px] rounded-full"></button>
          <input
            type="text"
            placeholder="Username"
            className="w-[20%] px-2 py-1 bg-slate-300 text-sm rounded-lg placeholder-black"
          />
        </div>
        <div className="flex-1 flex justify-end mr-5">
          <input
            type="text"
            placeholder="Search"
            className="w-[20%] px-2 py-1 bg-slate-300 text-sm rounded-lg placeholder-black"
          />
        </div>
      </div>
      <div className="h-[150px] w-[50%] rounded-b-xl bg-gray-400 self-center flex items-center justify-center ">
        <p className="text-blue-800 text-7xl">LINGsCARS.com</p>
      </div>
    </div>
  );
}
