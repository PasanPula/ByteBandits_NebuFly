import React from 'react'

const DestinationCard = () => {
  return (
    <div className="col-span-2 cursor-pointer group">
      <div className="flex flex-col w-full gap-2">
        <div className="relative rounded-xl">
          <img src="https://picsum.photos/1000/1000" className="rounded-md aspect-video" alt="destinations" />
          <div className="absolute right-3 top-3">
          <svg className="w-7 h-7 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.25 10.03c0-2.7 2.37-4.78 5.15-4.78 1.433 0 2.695.672 3.6 1.542.905-.87 2.166-1.542 3.6-1.542 2.78 0 5.15 2.08 5.15 4.78 0 1.85-.789 3.476-1.882 4.852-1.09 1.372-2.518 2.537-3.884 3.484-.523.362-1.05.695-1.534.941-.454.231-.975.443-1.45.443s-.996-.212-1.45-.443a13.795 13.795 0 0 1-1.533-.941c-1.367-.947-2.794-2.112-3.885-3.484C4.039 13.506 3.25 11.88 3.25 10.03ZM8.4 6.75c-2.08 0-3.65 1.53-3.65 3.28 0 1.403.596 2.71 1.556 3.918.962 1.21 2.257 2.279 3.565 3.185.495.343.96.634 1.36.838.428.218.676.279.769.279.093 0 .341-.061.77-.28a12.35 12.35 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185.96-1.208 1.556-2.515 1.556-3.918 0-1.75-1.57-3.28-3.65-3.28-1.194 0-2.31.713-3.005 1.619a.75.75 0 0 1-1.19 0C10.71 7.463 9.595 6.75 8.4 6.75Z" clip-rule="evenodd"></path>
          </svg>
          </div> 
        </div>
        <div className="inline-flex items-center justify-between">
        <div>
          <p className="text-sm ">Mars</p>
          <p className="text-xs text-[#BEBEBE]">Saturn</p>
        </div>
        <button className="h-8 px-2 text-sm font-semibold text-center text-black bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Reserve Now
        </button>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard