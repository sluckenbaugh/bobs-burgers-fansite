import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CharDetails from "./CharDetails";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/character-details/:id", element: <CharDetails /> },
]);

export default router;
