import React from "react";

export default function Chatuser() {
  return (
    <>
    <div className="h-[12vh]  pl-4 pt-4 pb-3 bg-gray-900 hover:bg-gray-600 flex space-x-4">
    <div className="avatar avatar-online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div>
            <h1 className="text-xl">Aniket Dahire</h1>
            <span className="text-sm"> online </span>
        </div>
    </div>
    </>
  );
}
