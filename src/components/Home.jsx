import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { TiCoffee } from "react-icons/ti";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  // console.log(coffees);
  return (
    <div>

      <Hero/>
           <FeaturesSection></FeaturesSection>

      {/* coffee section  */}
      <div
        className=" bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: "url('https://i.ibb.co/ksPmGZMj/1.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center flex-col gap-3">
            <p>--- Sip & Savor ---</p>
            <h2 className="text-4xl primary-font">Our Popular Products</h2>
            <Link to="/addCoffee">
              <button className="rounded-md text-xl cursor-pointer text-white bg-[#cdaf96] px-3 py-1 primary-font flex gap-2">
                Add coffee <TiCoffee size={30} />{" "}
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></CoffeeCard>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-10">
        <div className="text-center space-y-3">
          <p>follow Us Now</p>
          <h2 className="primary-font text-4xl">Follow on Instagram</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/5XCZ1LZp/Rectangle-11.png"alt=""/>
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/n8YFHs2L/Rectangle-12.png
"alt=""/>
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/MXj85XP/Rectangle-13.png
"alt=""/>
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/39z7BSzX/Rectangle-14.png
"alt=""/>
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/209gq6hQ/Rectangle-15.png
"alt=""/>
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/27NvjfgY/Rectangle-16.png
"alt=""/>
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/LXZw0QQX/Rectangle-9.png
"alt=""/>
          <img className="w-[312px] h-[350px] object-cover" src="https://i.ibb.co/rGTWYhbT/Rectangle-10.png"alt=""/>
         
         
        </div>
      </div>
    </div>
  );
};

export default Home;
