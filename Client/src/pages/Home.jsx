import React from "react";
import TopNavBar from "../Components/TopNavbar/TopNavBar";
import logo from "../assets/logo/logo.png";
import SearchBar from "../Components/SearchBar/SearchBar";
import DestinationScroll from "../Components/DestinationScroll/DestinationScroll";
import PlanetsScroll from "../Components/PlanetsScroll/PlanetsScroll";

const Home = () => {
  return (
    <div className="pb-24" >
      <TopNavBar page={"Home"} showNotification={true} />
      <div className="flex flex-row pl-6 lg:justify-center">
        <p className="pt-6 pr-2 text-lg font-bold contain"> Welcome to </p>
        <img className="w-32 " src={logo} alt="NebuFly" />
      </div>
      <SearchBar/>
      <DestinationScroll />
      <PlanetsScroll />
    </div>
  );
};

export default Home;
