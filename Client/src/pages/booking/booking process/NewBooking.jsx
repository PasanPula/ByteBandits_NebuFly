import React, { useRef, useState } from "react";
import TopNavBar from "../../../Components/TopNavbar/TopNavBar";
import { PAGES, TRIP_TYPE } from "../../../configs/constants";
import SH from "../../../assets/travel modes/SH.png";
import LL from "../../../assets/travel modes/LL.png";
import NS from "../../../assets/travel modes/NS.png";
import GG from "../../../assets/travel modes/GG.png";
import { useNavigate } from "react-router-dom";

const NewBooking = () => {
  const [tripType, setTripType] = useState(TRIP_TYPE.ONEWAY);
  const dateRef = useRef();
  const navigate = useNavigate();

  return (
    <div className="pb-24">
      <TopNavBar
        page={"Book Flight"}
        showNotification={false}
        showBackbutton={true}
      />
      <div className="px-6">
        <div className="flex flex-row w-full lg:w-1/2 lg:mx-auto bg-[#313133] rounded-lg">
          <button
            className={`w-1/2 py-2  ${
              tripType === TRIP_TYPE.ONEWAY
                ? "bg-white text-black"
                : "bg-[#313133] text-white"
            }  rounded-lg`}
            onClick={() => {
              setTripType(TRIP_TYPE.ONEWAY);
            }}
          >
            Oneway
          </button>
          <button
            className={`w-1/2 py-2  ${
              tripType === TRIP_TYPE.ROUND_TRIP
                ? "bg-white text-black"
                : "bg-[#313133] text-white"
            } rounded-lg`}
            onClick={() => {
              setTripType(TRIP_TYPE.ROUND_TRIP);
            }}
          >
            Round Trip
          </button>
        </div>

        <div className="flex flex-col bg-[#313133] rounded-lg  h-full w-full lg:w-1/2 lg:mx-auto mt-6 p-4">
          <div>
            <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">FROM</label>
              <svg
                className="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <select className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="pt-4">
            <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">FROM</label>
              <svg
                className="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <select className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="pt-4">
            <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">DATE</label>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 3.25a.75.75 0 0 1 .75.75v1.668a47.912 47.912 0 0 1 8.5 0V4a.75.75 0 1 1 1.5 0v1.816a3.375 3.375 0 0 1 2.872 2.899l.087.653a29.03 29.03 0 0 1-.093 8.268 3.01 3.01 0 0 1-2.679 2.532l-1.193.118a48.346 48.346 0 0 1-9.488 0l-1.193-.118a3.01 3.01 0 0 1-2.678-2.532 28.995 28.995 0 0 1-.094-8.268l.087-.653A3.375 3.375 0 0 1 6.25 5.816V4A.75.75 0 0 1 7 3.25Zm.445 3.953c3.03-.299 6.08-.299 9.11 0l.905.09c.867.085 1.56.756 1.675 1.619l.087.653c.03.228.057.456.082.685H4.696c.025-.229.052-.457.082-.685l.087-.653a1.875 1.875 0 0 1 1.675-1.62l.905-.09ZM4.577 11.75a27.494 27.494 0 0 0 .29 5.655 1.51 1.51 0 0 0 1.343 1.27l1.193.118c3.057.302 6.137.302 9.194 0l1.193-.118a1.51 1.51 0 0 0 1.343-1.27c.292-1.872.388-3.767.29-5.655H4.577Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              style={{ colorScheme: "dark" }}
              ref={dateRef}
              onClick={() => {
                dateRef.current.showPicker();
              }}
              type="date"
              className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer appearance-none"
            />
          </div>

          <div className="pt-4">
            <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">NO OF TRAVELERS</label>
              <svg
                className="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <select className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option value="01" selected>
                01
              </option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </select>
          </div>

          <div className="py-4">
            <div className="inline-flex justify-between w-full text-gray-500">
              <label className="text-xs text-gray-500">CLASS</label>
              <svg
                className="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <select className="block w-full px-0 pb-2 text-sm text-white bg-[#313133] border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option value="ECO" selected>
                ECONOMY
              </option>
              <option value="BS">BUSINESS</option>
              <option value="EXC">EXECUTIVE</option>
            </select>
          </div>
        </div>
        <div className="w-full pt-4 lg:w-1/2 lg:mx-auto">
          <p className="text-sm text-gray-500 ">TRAVEL MODE</p>
          <div className="grid h-full max-w-lg grid-cols-4 gap-1 pt-4 mx-auto justify-items-center">
            <div>
              <button className="p-3 border-2 border-[#A7A7A7] rounded-lg ">
                <img src={SH} className=" aspect-square" alt="SH" />
              </button>
              <p className="text-xs text-center"> Stellar Hitch </p>
            </div>

            <div>
              <button className=" p-3 border-2 border-[#A7A7A7] rounded-lg">
                <img src={LL} className=" aspect-square" alt="SH" />
              </button>
              <p className="text-xs text-center"> Lunar Luxe </p>
            </div>

            <div>
              <button className="p-3 border-2 border-[#A7A7A7] rounded-lg">
                <img src={NS} className=" aspect-square" alt="SH" />
              </button>
              <p className="text-xs text-center"> Nebula Ship</p>
            </div>

            <div>
              <button className="p-3 border-2 border-[#A7A7A7] rounded-lg">
                <img src={GG} className=" aspect-square" alt="SH" />
              </button>
              <p className="text-xs text-center"> Galaxy Glide </p>
            </div>
          </div>
        </div>

        <div className="w-full pt-4 lg:w-1/2 lg:mx-auto">
            <button className="w-full p-3 text-black bg-white rounded-lg " onClick={() => { navigate('/booking/flights') }}> Continue </button>
        </div>
      </div>
    </div>
  );
};

export default NewBooking;
