import logo from "../../assets/logo/logo.png"

const SplashScreen = () => {
  return (
    <>
      <div className=" bg-[url('./assets/bg/lines.svg')] h-screen w-2/3 md:w-1/2 lg:w-screen bg-no-repeat bg-contain bg-center md:bg-left absolute"></div>
      <div className="absolute flex items-center w-screen h-screen">
        <img
          className="w-1/2  sm:w-1/5  md:w-1/4  lg:w-1/5 ml-[30%] sm:ml-[40%] md:ml-[40%] lg:ml-[40%]"
          src={logo}
          alt="nebufly logo"
        />
        {/* <img
          className="w-1/2 h-1/5 sm:w-1/6 sm:h-1/5 md:h-1/5 md:w-1/4 lg:h-1/3 lg:w-1/5 ml-[30%] sm:ml-[45%] md:ml-[40%] lg:ml-[40%]"
          src={logo}
          alt="nebufly logo"
        /> */}
      </div>
      <p className=" absolute  bottom-[50px] text-xs text-white w-screen  text-center opacity-50" >Intergalatic Space Travel Agency</p>
    </>
  );
};

export default SplashScreen;
