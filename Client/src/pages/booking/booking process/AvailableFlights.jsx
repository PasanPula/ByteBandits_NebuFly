import TopNavBar from "../../../Components/TopNavbar/TopNavBar";
import { useState } from "react";
import AirTicket from "../../../Components/AirTicket/AirTicket";
import { useNavigate } from "react-router-dom";

export const AvailableFlights = () => {
  const [destType, setDestType] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="pb-24">
      <TopNavBar
        page={"Available Flights"}
        showNotification={false}
        showBackbutton={true}
      />
      <div className="px-6">
        <div className="flex flex-row w-full space-x-2 lg:w-1/2 lg:mx-auto ">
          <button
            className={`w-1/3 py-1  ${
              destType === 1 ? "bg-white text-black" : "bg-[#313133] text-white"
            }  rounded-full border-2 border-[#A7A7A7] text-sm`}
            onClick={() => {
              setDestType(1);
            }}
          >
            Oneway
          </button>

          <button
            className={`w-1/3 py-1  ${
              destType === 2 ? "bg-white text-black" : "bg-[#313133] text-white"
            } rounded-full border-2 border-[#A7A7A7] text-sm`}
            onClick={() => {
              setDestType(2);
            }}
          >
            Earth
          </button>

          <button
            className={`w-1/3 py-1  ${
              destType === 3 ? "bg-white text-black" : "bg-[#313133] text-white"
            } rounded-full border-2 border-[#A7A7A7] text-sm`}
            onClick={() => {
              setDestType(3);
            }}
          >
            Mars
          </button>
        </div>

     <AirTicket onClick={ navigate('/booking/seat') }/>
     <AirTicket/>
     <AirTicket/>
     <AirTicket/>
     <AirTicket/>
     <AirTicket/>
     <AirTicket/>
      </div>
    </div>
  );
};
