import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  // console.log(signInUser);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email,password)
      .then((res) => {
        // Signed in
        const user = res.user;
        // console.log(user);
        const signInInfo = {
            email,
            lastSignInTime: user.metadata.lastSignInTime,
        }
        console.log(signInInfo);

        // update to the db 
       fetch(`https://coffee-store-server-sooty-chi.vercel.app/users`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(signInInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                  icon: "success",
                  title: "Thank you for login",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
              // alert('sdkjksldfjkl')
              // console.log(data);
            });


        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
    });
  };
  return (
    <div className="card bg-base-100 mx-auto  max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold text-center">Sign In</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
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
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
