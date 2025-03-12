import React from "react";
import Search from "./Search";
import User from "./User";

export default function Left() {
  return (
    <div className="w-[23%]  text-white bg-black">
      <h1 className="font-bold text-3xl p-2 px-2">PingMe</h1>
      <Search></Search>
      <hr></hr>
      <User></User>
    </div>
  );
}
