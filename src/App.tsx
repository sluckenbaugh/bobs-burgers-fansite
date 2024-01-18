import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { createContext } from "react";

export const ColorContext = createContext({
  color: "sky",
  setColor: (color: string) => {},
});

const App = () => {
  const [color, setColor] = useState("sky");
  document.body.classList.add("sky");
  return (
    <>
      <ColorContext.Provider value={{ color, setColor }}>
        <RouterProvider router={router} />
      </ColorContext.Provider>
    </>
  );
};

export default App;
