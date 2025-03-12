import React from "react";

export default function Users() {
  return (
    <div>
        <div className="flex space-x-4 items-center px-4 py-4 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold ">Aniket Dahire</h1>
          <span>aniketdahire476@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
