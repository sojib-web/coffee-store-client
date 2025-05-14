import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee",
        Component: UpdateCoffee,
      },
    ],
  },
]);

export default router;
