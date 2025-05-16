import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  // console.log(createUser);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());
   
    // console.log(usersData);
    // firebase Authentication
    createUser(email, password)
      .then((res) => {
        // Signed up
        const user = res.user;
        console.log(user);
         const usersData = {
      email,
      ...rest,
      creationTime: user?.metadata?.creationTime,
      lastSignInTime: user?.metadata?.lastSignInTime,
    };

        // save profile into the db

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usersData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after adding user into db", data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your coffee has been saved",
                showConfirmButton: false,
                timer: 1500,
              });

              //   form.reset();
            }
          });

    
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="card bg-base-100 mx-auto  max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold text-center">Sign Up</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Your name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            name="address"
            placeholder="Address"
          />
          <label className="label">Phone NO</label>
          <input
            type="text"
            className="input"
            name="phone"
            placeholder="Your phone number"
          />
          <label className="label">Image URL</label>
          <input
            type="text"
            className="input"
            name="image"
            placeholder="Yoour Phoho URL"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
