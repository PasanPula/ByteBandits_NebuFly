import SH from "../../assets/travel modes/SH.png";
import LL from "../../assets/travel modes/LL.png";
import NS from "../../assets/travel modes/NS.png";
import GG from "../../assets/travel modes/GG.png";
import { useNavigate } from "react-router-dom";

const AirTicket = () => {

  const navigate = useNavigate();


  return (
    <div className="w-full h-full max-w-lg pt-6 mx-auto rounded-3xl">
    <div className="flex flex-col">
      <div className="bg-[#2C242E] relative drop-shadow-2xl rounded-3xl p-4" >
        <div className="inline-flex justify-between w-full">
          <p className="text-lg font-semibold">Earth </p> 
          <p className="text-xs text-gray-400 ">85 Hrs
          </p>
          <p className="text-lg text-right">Mars </p>
        </div>

        <div className="inline-flex justify-between w-full">
            <p className="text-xs font-semibold">Los Angeles, USA</p>
            <p className="text-xs ">Portal 102</p>
        </div>

        <div className="inline-flex justify-between w-full pt-4">
            <p className="text-sm text-gray-400 ">DATE & TIME</p>
            <p className="text-sm text-gray-400 ">SHIP NUMBER</p>
        </div>

        <div className="inline-flex justify-between w-full pt-1">
            <p className="text-xs">Jun 02, 3.50pm</p>
            <p className="text-xs">KH6008</p>
        </div>

        <div>
          <div className="relative hidden w-32 h-32 mb-3 sm:mb-0"></div>
          <div className="flex-auto justify-evenly">
            <div className="my-5 border-b-2 border-gray-500 border-dashed ">
              <div className="absolute rounded-full w-5 h-5 bg-[#111010] -mt-2 -left-2"></div>
              <div className="absolute rounded-full w-5 h-5 bg-[#111010] -mt-2 -right-2"></div>
            </div>
          </div>
           <div className="inline-flex justify-between w-full pt-1">
                <div className="inline-flex items-center">
                    <img src={SH} className="w-10 rotate-90 " alt="SH" />
                    <p className="text-sm text-gray-400 ">Stellar Hitch</p>
                </div>
                <p className="text-lg text-right text-white"> $50,635.00 </p>
           </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AirTicket