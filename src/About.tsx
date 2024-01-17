import React, { useContext, useEffect } from "react";
import NavSimple from "./components/NavSimple";
import { ColorContext } from "./App";
import usePreviousColor from "./Hooks/usePreviousColor";

const About = () => {
  const { color } = useContext(ColorContext);

  useEffect(() => {
    const prev = usePreviousColor(color);
    document.body.classList.replace(prev, color);
  }, [color]);
  return (
    <div>
      <NavSimple />
      <div className="backdrop">Hello</div>
    </div>
  );
};

export default About;
