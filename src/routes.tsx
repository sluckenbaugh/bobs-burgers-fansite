import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CharDetails from "./CharDetails";
import StoreNextDoor from "./StoreNextDoor";
import Burger from "./Burger";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/character-details/:id", element: <CharDetails /> },
  { path: "/StoreNextDoor", element: <StoreNextDoor /> },
  { path: "/burger", element: <Burger /> },
]);

export default router;
