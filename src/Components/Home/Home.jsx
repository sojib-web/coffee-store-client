import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 p-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
