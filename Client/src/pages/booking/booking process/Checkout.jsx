import TopNavBar from "../../../Components/TopNavbar/TopNavBar";
import visa from '../../../assets/payment/Visa.png';
import MC from '../../../assets/payment/MasterCard.png';
import AE from '../../../assets/payment/American Express.png';
import PP from '../../../assets/payment/PayPal.png';
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();


  return (
    <div className="pb-24">
      <TopNavBar
        page={"Payment"}
        showNotification={false}
        showBackbutton={true}
      />
      <div className="px-6">
        <div className="bg-gradient-to-br lg:w-1/2 lg:mx-auto from-[#0FEFFD]/60 via-[#FF00F5]/60  to-[#0FEFFD]/60 rounded-lg p-[2px]">
          <div className="flex flex-col bg-[#313133] rounded-lg  h-full w-full lg:w-1/2 lg:mx-auto p-4 ">
            <label className="text-xs text-gray-500">TRIP</label>
            <p> Earth to Mars </p>
            <div className=" pt-4 inline-flex justify-between">
              <p className=" text-gray-400 ">Total</p>
              <p className=" text-2xl font-bold text-purple-600">$150,000</p>
            </div>
          </div>
        </div>

        <div className=" pt-6 ">
          <div className="w-[90%] mx-auto">
            <label className="text-sm text-white pl-2">CARD NUMBER</label>
            <input
            placeholder="7200 8522 6522 5567"
              style={{ colorScheme: "dark" }}
              type="text"
              className=" pl-3 mt-3 h-10 block rounded-lg  w-full text-sm text-white bg-[#313133] border-2 border-gray-70"
            />
          </div>
        </div>
        <div className=" pt-3 ">
          <div className="w-[90%] mx-auto">
            <label className="text-sm text-white pl-2">CARD HOLDER NAME</label>
            <input
            placeholder="Ex:- Jhon Carl"
              style={{ colorScheme: "dark" }}
              type="text"
              className=" pl-3 mt-3  h-10 block rounded-lg  w-full text-sm text-white bg-[#313133] border-2 border-gray-70"
            />
          </div>
        </div>
        <div className=" pt-3 ">
          <div className="w-[90%] mx-auto flex gap-4">
            <div className="w-1/2">
            <label className=" text-sm text-white pl-2">CVV</label>
            <input
            placeholder="727"
              style={{ colorScheme: "dark" }}
              type="text"
              className=" pl-3 mt-3  h-10 block rounded-lg  w-full text-sm text-white bg-[#313133] border-2 border-gray-70"
            />
            </div>

            <div  className="w-1/2">
            <label className=" text-sm text-white pl-2">EXPIRY DATE</label>
            <input
            placeholder="04/26"
              style={{ colorScheme: "dark" }}
              type="text"
              className=" pl-3 mt-3  h-10 block rounded-lg  w-full text-sm text-white bg-[#313133] border-2 border-gray-70"
            />
            </div>
          </div>
        </div>

        <div className=" pt-3 ">
        <div className="w-full pt-4 lg:w-1/2 lg:mx-auto">
          <p className="text-sm text-gray-500 ">TRAVEL MODE</p>
          <div className="grid h-full max-w-lg grid-cols-4 gap-1 pt-4 mx-auto justify-items-center">
            <div>
              <button>
                <img src={visa} className=" aspect-video" alt="SH" />
              </button>
            </div>

            <div>
              <button>
                <img src={MC} className=" aspect-video" alt="SH" />
              </button>
            </div>

            <div>
              <button>
                <img src={AE} className=" aspect-video" alt="SH" />
              </button>
            </div>

            <div>
              <button>
                <img src={PP} className=" w-3/4 aspect-square" alt="SH" />
              </button>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full pt-4 lg:w-1/2 lg:mx-auto">
            <button className="w-full p-3 text-black bg-white rounded-lg font-medium " onClick={() => {navigate('/booking/boarding')}}> Confirm Payment</button>
            <button className=" mt-3 w-full p-3 text-white bg-transparent rounded-lg border-2 border-[#A7A7A7] "> Cancel </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
