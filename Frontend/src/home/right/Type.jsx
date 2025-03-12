import React from "react";
import { IoSend } from "react-icons/io5";
export default function Type() {
  return (
    <>
      <div className="flex space-x-3 h-[8vh] text-center bg-gray-800">
        <div className="w-[95%]">
          <input
            type="text"
            placeholder="Type a message"
            className="border-[1px] border-gray-700 bg-slate-900   
          flex items-center rounded-xl w-full px-3 py-3  mt-1 grow outline-none bg-slate-900"
          />
        </div>

        <button className="text-3xl">
          <IoSend />
        </button>
      </div>
    </>
  );
}
