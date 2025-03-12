import React from "react";
import Left from "./home/left/Left";
import Righ from "./home/right/Right";
import Logout from "./home/left1/Logout";


function App() {
  return (
    <>
      <div className="flex h-screen">
        <Logout></Logout>
        <Left></Left>
        <Righ></Righ>
      </div>
    </>
  );
}

export default App;
