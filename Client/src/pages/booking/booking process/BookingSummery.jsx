import TopNavBar from "../../../Components/TopNavbar/TopNavBar"
import SH from "../../../assets/travel modes/SH.png";
import LL from "../../../assets/travel modes/LL.png";
import NS from "../../../assets/travel modes/NS.png";
import GG from "../../../assets/travel modes/GG.png";
import { useNavigate } from "react-router-dom";

const BookingSummery = () => {

  const navigate = useNavigate();
  

  return (
    <div className="pb-24">
      <TopNavBar
        page={"Trip Summery"}
        showNotification={false}
        showBackbutton={true}
      />
      <div className="px-6">
    
    <div className="bg-gradient-to-br from-[#0FEFFD]/60 via-[#FF00F5]/60  to-[#0FEFFD]/60 rounded-lg p-[2px]">
      <div className="flex flex-col bg-[#313133] rounded-lg  h-full w-full lg:w-1/2 lg:mx-auto p-4 pt-11">
          <div>
            <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">DESTINATION</label>
            </div>
            <input disabled value={'Earth'} className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            </input>
          </div>

          <div className="pt-4">
          <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">DEPARTURE DATE</label>
            </div>
            <input disabled value={'02 Jan 2020'} className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            </input>
          </div>

          <div className="pt-4">
          <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">NO OF TRAVELERS</label>
            </div>
            <input disabled value={'4 Adults'} className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            </input>
          </div>

          <div className="pt-4">
          <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">CLASS</label>
            </div>
            <input disabled value={'Business'} className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            </input>
          </div>


          <div className="pt-4 border-0 border-b-2 border-gray-700">
            <div className="inline-flex justify-between w-full text-gray-500 ">
              <label className="text-xs text-gray-500">TRAVEL MODE</label>
            </div>
            <input disabled value={'GALAXY GLIDE'} className="block w-full px-0 pb-2 text-xs text-white bg-[#313133]  appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            </input>
            <img src={GG} className=" w-1/4 mx-auto pb-2" alt="SH" />
          </div>

          <div className=" pt-4 inline-flex justify-between">
            <p className=" text-gray-400 ">Total</p>
            <p className=" text-2xl font-bold text-purple-600">$150,000</p>
          </div>

          <div className="w-full pt-6 lg:w-1/2 lg:mx-auto">
            <button className="w-full p-3 text-black bg-white rounded-lg " onClick={() => {navigate('/booking/pay')}} > Checkout </button>
        </div>

          
        </div>
      </div>
      </div>
      </div>
  )
}

export default BookingSummery