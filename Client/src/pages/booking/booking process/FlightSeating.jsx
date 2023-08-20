import { useState } from "react";
import { Seat } from "../../../Components/Seat/Seat";
import TopNavBar from "../../../Components/TopNavbar/TopNavBar";
import { useNavigate } from "react-router-dom";

const FlightSeating = () => {
  const [seat, setSeatList] = useState([]);
  const list = [];
  const navigate = useNavigate();


  return (
    <div className="pb-24">
      <TopNavBar
        page={"Choose the seat"}
        showNotification={false}
        showBackbutton={true}
      />
      <div className="px-6 h-full">
        <div className="h-[600px] max-w-[300px] mx-auto ">
          <div className="h-[40%] relative overflow-hidden border-gray-400 before:contents-[''] before:block before:absolute before:top-0 before:left-0 before:h-[500px] before:w-full before:border-r-4 before:rounded-[50%]  before:border-l-4 before:border-gray-400">
            <div className="w-[65%]  mx-auto h-[70%] relative top-[30%]">
              <p className=" pb-3 text-center"> Business Class</p>
              {["A", "B", "C"].map((section, index) => {
                return (
                  <div
                    key={index}
                    className="inline-flex w-full justify-around"
                  >
                    <div>
                      <ol className=" inline-flex  gap-2">
                        <li
                          onClick={() => {
                            console.log(seat);
                            console.log(seat.includes(section + 1));
                            setSeatList([...seat, section + `${1}`]);
                            list.push(section + `${1}`);
                          }}
                        >
                          <Seat
                            seatNumber={section + 1}
                            isSelect={list.includes(section + 1 ? true : false)}
                          />
                        </li>
                        <li>
                          <Seat seatNumber={section + 2} />
                        </li>
                      </ol>
                    </div>
                    <p>{section}</p>
                    <div>
                      <ol className=" inline-flex gap-2 ">
                        <li>
                          <Seat seatNumber={section + 3} />
                        </li>
                        <li>
                          <Seat seatNumber={section + 4} />
                        </li>
                      </ol>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class=" relative border-r-4 border-l-4 border-gray-400 pt-2">
            <p className=" pb-4 text-center"> Economy Class</p>
            {["C", "D", "E", "F", "G"].map((section, index) => {
              return (
                <div
                  key={index}
                  className="inline-flex w-full justify-around pt-2"
                >
                  <div>
                    <ol className=" inline-flex gap-2 ">
                      <li>
                        <Seat seatNumber={section + 1} />
                      </li>
                      <li>
                        <Seat seatNumber={section + 2} />
                      </li>
                      <li>
                        <Seat seatNumber={section + 3} />
                      </li>
                    </ol>
                  </div>
                  <p>{section}</p>
                  <div>
                    <ol className=" inline-flex gap-2 ">
                      <li>
                        <Seat seatNumber={section + 4} />
                      </li>
                      <li>
                        <Seat seatNumber={section + 5} />
                      </li>
                      <li>
                        <Seat seatNumber={section + 6} />
                      </li>
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#252323] rounded-lg p-4 relative top-[-50px] lg:mx-auto ">
          <div className=" inline-flex w-full justify-evenly ">
            <div>
              <p className=" text-sm">CLASS</p>
              <p className=" text-xs" >Business</p>
            </div>

            <div>
              <p className=" text-sm">NO OF SEATS</p>
              <p className=" text-xs">4</p>
            </div>

            <div>
              <p className=" text-sm">PRICE</p>
              <p className=" text-xs">$150,000</p>
            </div>
          </div>
          <div className=" w-full flex pt-4">
          <button className=" w-[80%] rounded-lg bg-white px-6 py-2 text-black mx-auto" onClick={() => {
            navigate('/booking/summery')
          }}>
            continue
          </button>
          </div>
         
        </div>

      </div>
    </div>
  );
};

export default FlightSeating;
