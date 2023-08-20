import React from 'react'

const SearchBar = () => {
  return (
    <form class="flex flex-row content-center justify-center px-6">   
        <div class="relative w-full lg:max-w-2xl">
            <input type="text" id="simple-search" class="text-sm rounded-lg block w-full p-2.5 bg-[#252323] border border-gray-300 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Destination..." required/>
        </div>
        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-[#252323]  bg-white rounded-lg border  hover:bg-blue-700 focus:ring-blue-800">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
        </button>
    </form>
  )
}

export default SearchBar