import PlanetCard from "./PlanetCard";

const PlanetsScroll = () => {
  return (
    <>
      <div className="flex justify-between px-6 pt-12">
        <p className="text-lg text-white">Planets to visit</p>
        <button className="underline text-[#C2C2C2]">See all </button>
      </div>
      <div className="relative z-0 grid auto-cols-[30%] lg:auto-cols-[15%] grid-flow-col overflow-x-auto pt-4 overscroll-x-auto pl-6 gap-4 no-scrollbar">
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
      </div>
    </>
  );
};

export default PlanetsScroll;
