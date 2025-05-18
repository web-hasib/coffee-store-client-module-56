import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, _id, photo, price, chef } = coffee;
  const handleDeleteCoffee = (_id) => {
    // console.log('trying to delete',{_id});

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // Start deleting the coffee from db
        fetch(`https://coffee-store-server-sooty-chi.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("After diliting from the db", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              //   remove the coffee from the state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm py-10">
      <figure className="p-5">
        <img src={photo} alt="Movie" />
      </figure>
      <div className=" flex justify-around w-full items-center">
        <div>
          <p className="text-yellow-800 font-semibold text-lg">Name: {name}</p>
          <p className="text-yellow-800 font-semibold text-lg">
            Price: {price} ${" "}
          </p>
          <p className="text-yellow-800 font-semibold text-lg">chef: {chef}</p>
        </div>
        <div className="">
          <div className="flex flex-col gap-3">
            <Link to={`/coffees/${_id}`}>
              <button className="p-1 bg-yellow-400 rounded-lg">
                <FaEye size={25} color="white" />
              </button>
            </Link>
            <Link to={`updateCoffee/${_id}`}>
              <button className="p-1 bg-gray-400 rounded-lg">
                <MdEdit size={25} color="white" />
              </button>
            </Link>
            <button
              onClick={() => handleDeleteCoffee(_id)}
              className="p-1 bg-red-400 rounded-lg"
            >
              <MdDelete size={25} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
