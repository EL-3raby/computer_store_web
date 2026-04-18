import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  // Adding a key or just returning RouterProvider is fine
  return <RouterProvider router={router} />;
}
