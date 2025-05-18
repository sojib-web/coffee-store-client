import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import User from "../Components/User/User";
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
        path: "coffeeDetails/:id",
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "user",
        loader: () => fetch(`http://localhost:3000/users`),
        Component: User,
      },
    ],
  },
]);

export default router;
