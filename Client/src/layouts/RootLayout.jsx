import { useState, useEffect } from "react";
import SplashScreen from "../pages/common/SplashScreen";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [showSplash, setShowSplash ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <div className="bg-[#111010] min-h-screen bg-gradient-to-b from-[#511F55]/25 via-[#111010]/25 to-[#032250]/25 text-white z-[-1]">
      <div className=" bg-[url('./assets/bg/stars.svg')] w-4/5 md:w-2/3 lg:w-screen min-h-screen right-0 fixed z-0"></div>
      <div className="relative z-10 min-h-screen ">
      {showSplash ? <SplashScreen/> : <Outlet/>}
      </div>
    </div>
  )
}

export default RootLayout;