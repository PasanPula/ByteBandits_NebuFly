import React from 'react'
import { PAGES } from '../../configs/constants'

const BottomNavbar = ({currentPage, setPage}) => {
  return (
    <div className="fixed bottom-0 left-0 z-49 w-full h-20 bg-[#0A0909]">
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-[#ffffff0f] bg-gradient-to-r  from-[#032250]/30 to-[#511F55]/30 shadow-[inset_0px_17px_11px__#9d9caf08]  ">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
      <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => { setPage( PAGES.EXPLORE ) }} >
         <svg className='w-3 h-3 group-hover:text-white' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <circle className={`${currentPage ===  PAGES.EXPLORE ? 'block' : 'hidden' }`} cx="10" cy="10" r="4" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
          <svg className={`mb-1 w-7 h-7 ${currentPage ===  PAGES.EXPLORE ? ' text-white' : 'text-gray-400' } group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
               <path fillRule="evenodd" d="M11.762 3.25c.46.006.99.223 1.276.734l.174.312a82.518 82.518 0 0 1 6.474 14.753c.218.67-.14 1.237-.589 1.5a1.484 1.484 0 0 1-1.552-.037l-4.728-3.04c-.522-.336-1.231-.337-1.72-.028L6.464 20.37a1.483 1.483 0 0 1-1.553.01c-.427-.255-.809-.808-.61-1.482A77.671 77.671 0 0 1 10.307 4.29l.164-.308c.284-.531.832-.737 1.29-.73Zm-.007 1.513-.125.233A76.203 76.203 0 0 0 5.84 18.99l4.455-2.813c1-.63 2.337-.607 3.334.034l4.496 2.892a81.088 81.088 0 0 0-6.222-14.074l-.148-.265Z" clipRule="evenodd"></path>
          </svg>
          <span className={`text-xs group-hover:text-white ${currentPage ===  PAGES.EXPLORE ? ' text-white' : 'text-gray-400' }`}>Explore</span>
      </button>

      <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => { setPage( PAGES.BOOKINGS) }} >
          <svg className='w-3 h-3 group-hover:text-white' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <circle className={`${currentPage ===  PAGES.BOOKINGS ? 'block' : 'hidden' }`} cx="10" cy="10" r="4" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
          <svg className={`mb-1 w-7 h-7 ${currentPage ===  PAGES.BOOKINGS ? ' text-white' : 'text-gray-400' } group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.483 5.26A2.486 2.486 0 0 0 5.29 7.422a39.402 39.402 0 0 0 0 9.154 2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.034 0a2.486 2.486 0 0 0 2.192-2.163c.256-2.185.328-4.386.216-6.58a.2.2 0 0 1 .059-.152l1.038-1.04a.198.198 0 0 1 .339.125 40.903 40.903 0 0 1-.162 7.822c-.215 1.836-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.644-3.516-3.48a40.903 40.903 0 0 1 0-9.504c.214-1.837 1.69-3.275 3.516-3.48a42.502 42.502 0 0 1 9.366 0 3.989 3.989 0 0 1 1.76.64.19.19 0 0 1 .025.295l-.803.803a.211.211 0 0 1-.25.033 2.488 2.488 0 0 0-.898-.28 41.001 41.001 0 0 0-9.034 0Z"></path>
            <path d="M21.03 6.03a.75.75 0 1 0-1.06-1.06l-8.47 8.47-2.47-2.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"></path>
          </svg>
          <span className={`text-xs group-hover:text-white ${currentPage ===  PAGES.BOOKINGS ? ' text-white' : 'text-gray-400' }`}>Bookings</span>
      </button>

      <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => { setPage( PAGES.HOME) }} >
          <svg className='w-3 h-3 group-hover:text-white' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <circle className={`${currentPage ===  PAGES.HOME? 'block' : 'hidden' }`} cx="10" cy="10" r="4" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
          <svg className={`mb-1 w-7 h-7 ${currentPage ===  PAGES.HOME? ' text-white' : 'text-gray-400' } group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M13.558 5.534a2.25 2.25 0 0 0-3.116 0l-4.626 4.44a.748.748 0 0 0-.218.405 27.344 27.344 0 0 0-.121 9.15l.112.721h2.977v-6.211a.75.75 0 0 1 .75-.75h5.368a.75.75 0 0 1 .75.75v6.211h2.977l.112-.72a27.38 27.38 0 0 0-.12-9.152.748.748 0 0 0-.219-.404l-4.626-4.44ZM9.404 4.452a3.75 3.75 0 0 1 5.192 0l4.627 4.44c.34.326.57.752.655 1.216a28.86 28.86 0 0 1 .127 9.653l-.18 1.157a.983.983 0 0 1-.972.832h-4.169a.75.75 0 0 1-.75-.75v-6.211h-3.868V21a.75.75 0 0 1-.75.75H5.147a.983.983 0 0 1-.971-.832l-.181-1.157a28.86 28.86 0 0 1 .127-9.653 2.26 2.26 0 0 1 .655-1.217l4.627-4.44Z" clipRule="evenodd"></path>
          </svg>
          <span className={`text-xs group-hover:text-white ${currentPage ===  PAGES.HOME? ' text-white' : 'text-gray-400' }`}>Home</span>
      </button>

      <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => { setPage( PAGES.SETTINGS) }} >
          <svg className='w-3 h-3 group-hover:text-white' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <circle className={`${currentPage ===  PAGES.SETTINGS? 'block' : 'hidden' }`} cx="10" cy="10" r="4" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
          <svg className={`mb-1 w-7 h-7 ${currentPage ===  PAGES.SETTINGS? ' text-white' : 'text-gray-400' } group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 3.08 9.787 5.368a1.25 1.25 0 0 1-.899.381H5.75v3.138c0 .34-.138.664-.381.9L3.079 12l2.29 2.213c.243.235.381.56.381.899v3.138h3.138c.34 0 .664.138.9.381L12 20.921l2.213-2.29a1.25 1.25 0 0 1 .899-.381h3.138v-3.138c0-.34.138-.664.381-.9L20.921 12l-2.29-2.213a1.25 1.25 0 0 1-.381-.899V5.75h-3.138a1.25 1.25 0 0 1-.9-.381L12 3.079Zm-.899-1.23a1.25 1.25 0 0 1 1.798 0l2.319 2.4H18.5c.69 0 1.25.56 1.25 1.25v3.282l2.4 2.32a1.25 1.25 0 0 1 0 1.797l-2.4 2.319V18.5c0 .69-.56 1.25-1.25 1.25h-3.282l-2.32 2.4a1.25 1.25 0 0 1-1.797 0l-2.319-2.4H5.5c-.69 0-1.25-.56-1.25-1.25v-3.282l-2.4-2.32a1.25 1.25 0 0 1 0-1.797l2.4-2.319V5.5c0-.69.56-1.25 1.25-1.25h3.282l2.32-2.4Z" clipRule="evenodd"></path>
              <path fillRule="evenodd" d="M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" clipRule="evenodd"></path>
          </svg>
          <span className={`text-xs group-hover:text-white ${currentPage ===  PAGES.SETTINGS? ' text-white' : 'text-gray-400' }`}>Settings</span>
      </button>

      <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => { setPage( PAGES.PROFILE) }} >
          <svg className='w-3 h-3 group-hover:text-white' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <circle className={`${currentPage ===  PAGES.PROFILE? 'block' : 'hidden' }`} cx="10" cy="10" r="4" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
          <svg className={`mb-1 w-7 h-7 ${currentPage ===  PAGES.PROFILE? ' text-white' : 'text-gray-400' } group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M7.75 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM12 4.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z" clipRule="evenodd"></path>
              <path fillRule="evenodd" d="M8 14.75A2.25 2.25 0 0 0 5.75 17v1.188c0 .018.013.034.031.037 4.119.672 8.32.672 12.438 0a.037.037 0 0 0 .031-.037V17A2.25 2.25 0 0 0 16 14.75h-.34a.253.253 0 0 0-.079.012l-.865.283a8.751 8.751 0 0 1-5.432 0l-.866-.283a.252.252 0 0 0-.077-.012H8ZM4.25 17A3.75 3.75 0 0 1 8 13.25h.34c.185 0 .369.03.544.086l.866.283a7.251 7.251 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0 1 19.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.095 40.095 0 0 1-12.92 0 1.537 1.537 0 0 1-1.29-1.517V17Z" clipRule="evenodd"></path>
          </svg>
          <span className={`text-xs group-hover:text-white ${currentPage ===  PAGES.PROFILE? ' text-white' : 'text-gray-400' }`}>Profile</span>
      </button>

  </div>
    </div>
  </div>
  )
}

export default BottomNavbar