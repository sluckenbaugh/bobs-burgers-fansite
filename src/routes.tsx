import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CharDetails from "./CharDetails";
import About from "./About";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/character-details/:id", element: <CharDetails /> },
  { path: "/About", element: <About /> },
]);

export default router;
