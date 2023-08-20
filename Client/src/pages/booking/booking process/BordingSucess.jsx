import TopNavBar from "../../../Components/TopNavbar/TopNavBar";
import logo from "../../../assets/logo/logo.png";

const BordingSucess = () => {
  return (
    <div className="pb-24">
      <TopNavBar
        page={"Boarding Pass"}
        showNotification={false}
        showBackbutton={true}
      />
      <div className="px-6">
        <div className="w-full h-full max-w-lg pt-6 mx-auto rounded-3xl">
          <div className="flex flex-col">
            <div className="bg-[#2C242E] relative drop-shadow-2xl rounded-3xl p-4">
              <div className="w-full">
                <img className=" w-44 mx-auto pl-4 " src={logo} alt="NebuFly" />
              </div>

              <div className="flex justify-between w-full pt-10 items-center">
                <div>
                  <p className="text-lg font-semibold">LA</p>
                  <p className="text-xs text-gray-500">United States</p>
                </div>
                <div className="w-[30%]">
                  <div className="border-b-2 border-gray-500 border-dashed "></div>
                </div>
                <div>
                  <div>
                    <p className="text-lg font-semibold">Portal 01</p>
                    <p className="text-xs text-gray-500">Mars</p>
                  </div>
                </div>
              </div>

              <div className="my-5 border-b-2 border-gray-500 border-dashed "></div>

              <div className="flex justify-between w-full pt-4 items-center">
                <div>
                  <p className="text-xs text-gray-500">DATE & TIME</p>
                  <p className="text-sm ">Feb 25, 11.30pm</p>
                </div>
                <div>
                  <div>
                    <p className="text-xs text-gray-500">Flight Number</p>
                    <p className="text-sm text-end">A689</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between w-full pt-4 items-center">
                <div>
                  <p className="text-xs text-gray-500">TICKET PRICE</p>
                  <p className="text-sm ">$150,685.00</p>
                </div>
                <div>
                  <div>
                    <p className="text-xs text-gray-500 text-end">CLASS</p>
                    <p className="text-sm">BUSINESS</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative hidden w-32 h-32 mb-3 sm:mb-0"></div>
                <div className="flex-auto justify-evenly">
                  <div className="my-5 border-b-2 border-gray-500 border-dashed ">
                    <div className="absolute rounded-full w-5 h-5 bg-[#111010] -mt-2 -left-2"></div>
                    <div className="absolute rounded-full w-5 h-5 bg-[#111010] -mt-2 -right-2"></div>
                  </div>
                  <div class="flex flex-col py-5  justify-center text-sm ">
                    <h6 class="font-bold text-center">Boarding Pass</h6>

                    <div class="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
                  </div>

                  <div className="w-full pt-6 lg:w-1/2 lg:mx-auto">
                    <button className="w-full p-3 text-black bg-white rounded-lg ">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BordingSucess;
