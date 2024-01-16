import { createBrowserRouter } from "react-router-dom";
import CharDetails from "./CharDetails";
import StoreNextDoor from "./StoreNextDoor";
import Burger from "./Burger";
import Home from "./Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/character-details/:id", element: <CharDetails /> },
  { path: "/StoreNextDoor", element: <StoreNextDoor /> },
  { path: "/burger", element: <Burger /> },
]);

export default router;
