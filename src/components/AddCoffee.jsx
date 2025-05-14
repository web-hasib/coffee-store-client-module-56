import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    // console.log(coffeeData);
    // send data to the server 
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log( 'after adding coffee into db', data);
        if (data.insertedId) {
          
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your coffee has been saved",
  showConfirmButton: false,
  timer: 1500
});
            
        //   form.reset();


        }
      });

  };
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Chef</label>
            <input
              type="text"
              className="input w-full"
              name="chef"
              placeholder="Chef Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              name="price"
              placeholder="Price fer cup"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              name="taste"
              placeholder="Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              name="category"
              placeholder="Coffee category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Coffee Details"
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
            />
          </fieldset>
          <input
            type="submit"
            className="mt-5 btn w-full"
            value="Add coffee "
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
