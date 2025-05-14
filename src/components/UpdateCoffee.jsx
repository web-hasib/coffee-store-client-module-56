import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { category, chef, details, name, photo, price, taste, _id } =
    useLoaderData();
  // console.log(coffee);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    // console.log(updatedCoffee);



   



    // ! send updated coffee to the db
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
              position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // alert('sdkjksldfjkl')
        // console.log(data);
      });
  };
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Update coffee</h1>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Coffee Name"
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Chef</label>
            <input
              type="text"
              className="input w-full"
              name="chef"
              placeholder="Chef Name"
              defaultValue={chef}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              name="price"
              placeholder="Price fer cup"
              defaultValue={price}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              name="taste"
              placeholder="Coffee Taste"
              defaultValue={taste}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              name="category"
              placeholder="Coffee category"
              defaultValue={category}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Coffee Details"
              defaultValue={details}
            />
          </fieldset>
        </div>
        <div className="mt-4">
          {" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo URL"
              defaultValue={photo}
            />
          </fieldset>
          <input
            type="submit"
            className="mt-5 btn w-full"
            value="Update coffee "
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
