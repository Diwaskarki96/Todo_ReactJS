import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto ">
        <div className="bg-black text-white">
          <h1>Your Todos</h1>
        </div>
      </div>
    </>
  );
}

export default App;
