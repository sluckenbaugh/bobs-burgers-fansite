import React, { Dispatch, SetStateAction, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import react, { createContext } from "react";

export const ColorContext = createContext({
  color: "sky",
  setColor: (color: "sky" | "sun") => {},
});

const App = () => {
  const [color, setColor] = useState("sky");

  return (
    <>
      <ColorContext.Provider value={{ color, setColor }}>
        <RouterProvider router={router} />;
      </ColorContext.Provider>
    </>
  );
};

export default App;
