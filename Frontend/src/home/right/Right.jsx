import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";

export default function Right() {
  return (
    <div className="w-[77%]   text-white bg-slate-950">
      <Chatuser></Chatuser>

      <div
        className="py-2 overflow-y-auto"
        style={{ maxHeight: "calc(88vh - 8vh)" }}
      >
        <Messages></Messages>
      </div>
      <Type></Type>
    </div>
  );
}
