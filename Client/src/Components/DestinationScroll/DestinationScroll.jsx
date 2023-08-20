import React from "react";
import DestinationCard from "./DestinationCard";

const DestinationScroll = () => {
  return (
    <>
      <div className="flex justify-between px-6 pt-6">
        <p className="text-lg text-white">Popular Destinations</p>
        <button className="underline text-[#C2C2C2]">See all </button>
      </div>

      <div className="relative z-0 grid auto-cols-[30%] lg:auto-cols-[15%] grid-flow-col gap-4 overflow-x-auto pt-4 pl-6 overscroll-x-auto no-scrollbar">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </>
  );
};

export default DestinationScroll;
