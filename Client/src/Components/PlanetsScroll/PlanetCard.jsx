import planet from "../../assets/planets/mars.png";

const PlanetCard = () => {
  return (
        <div className="col-span-2 rounded-lg cursor-pointer group">
          <div className="relative inline-flex w-full h-full ">
            <img
              src={planet}
              className="w-3/6 z-[60] relative mx-auto"
              alt="destinations"
            />
            <div className="absolute top-[20%] bg-gradient-to-br from-[#0FEFFD]/60 via-[#FF00F5]/60  to-[#0FEFFD]/60 rounded-lg h-[60%] z-[51] w-full p-[2px]">
              <div className="bg-[#26272A] h-full w-full rounded-lg px-5 pb-1 flex justify-between items-end">
                <p>Mars</p>
                <p>401 million km</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PlanetCard