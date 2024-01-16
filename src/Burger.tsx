import React from "react";
import NavSimple from "./components/NavSimple";

const Burger = () => {
  return (
    <>
      <NavSimple />
      <div className="backdrop-foil">Burger of Day</div>
    </>
  );
};

export default Burger;
