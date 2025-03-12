import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
   <div  className="h-[10%]">
     <div className="flex px- py-3">
      <form action=" ">
        <div className="flex space-x-2">
          <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg  
          flex items-center w-[85%] gap-2  p-2" >
            <input type="search" className="grow outline-none w-68 bg-slate-900" placeholder="Search" />
          </label>
          <button>
            <IoSearchSharp className="text-5xl  ml- p-2  hover:bg-gray-600 rounded-full duration-300" />
          </button>
        </div>
      </form>
    </div>
   </div>
  );
}
