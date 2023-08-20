import React from 'react'

const TopNavBar = ({page, showNotification, showBackbutton}) => {
  return (
    <nav class=" flex items-center justify-between flex-wrap p-6 text-white">
    <div class="flex items-center">
      {showBackbutton ? 
        <button
        type="button"
        className="text-white hover:text-white border-[0.5px] border-white hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium  rounded-xl text-sm px-2 py-2 text-center"
        >
          <svg className="w-5 h-5"   fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.03 7.47a.75.75 0 0 1 0 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path>
          </svg>
        </button>
      :<button
        type="button"
        className="text-white hover:text-white border-[0.5px] border-white hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium  rounded-xl text-sm px-2 py-2 text-center"
      >
      <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18.25a.75.75 0 0 0 0 1.5h6A1.75 1.75 0 0 0 19.75 18V6A1.75 1.75 0 0 0 18 4.25h-6a.75.75 0 0 0 0 1.5h6a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25h-6Z"></path>
        <path fill-rule="evenodd" d="M3.25 13.115c0 .69.56 1.25 1.25 1.25h4.613l.02.22.054.556a1.227 1.227 0 0 0 1.752.988c1.634-.783 3.212-1.958 4.466-3.267a1.253 1.253 0 0 0 0-1.734l-.1-.104a15.06 15.06 0 0 0-4.366-3.163 1.227 1.227 0 0 0-1.752.988l-.054.555-.02.22H4.5c-.69 0-1.25.56-1.25 1.25v2.241Zm7.303.416a.75.75 0 0 0-.745-.666H4.75v-1.74h5.058a.75.75 0 0 0 .748-.704c.019-.29.042-.581.07-.871l.016-.162a13.556 13.556 0 0 1 3.516 2.607 13.568 13.568 0 0 1-3.516 2.607l-.016-.162a25.457 25.457 0 0 1-.073-.91Z" clip-rule="evenodd"></path>
        </svg>
      </button>}
    </div>
    <p className='text-lg '>
        {page}
    </p>
    <div class="flex items-center">
    {showNotification ? 
      <button
        type="button"
        className="text-white hover:text-white border-[0.5px] cursor-auto border-white hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium  rounded-xl text-sm px-2 py-2 text-center"
      >
      <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 6.237 7.7l-.221 3.534a7.377 7.377 0 0 1-1.308 3.754 1.617 1.617 0 0 0 1.135 2.529l3.407.408V19a2.75 2.75 0 0 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.134-2.528 7.378 7.378 0 0 1-1.307-3.754l-.221-3.533a4.214 4.214 0 0 0-4.206-3.951H13V3Zm-2.557 2.25a2.714 2.714 0 0 0-2.709 2.544l-.221 3.534a8.877 8.877 0 0 1-1.573 4.516.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183 8.877 8.877 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544h-3.114Zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25Z" clip-rule="evenodd"></path>
      </svg> 
      </button> :
      <div className='w-5 h-5 ' ></div>
      }
    </div>
  </nav>
  )
}

export default TopNavBar