// @ts-nocheck
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const { email, password, ...restForm } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, restForm);

    // Create user in Firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restForm,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // Save profile in database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User registered successfully!",
                icon: "success",
                confirmButtonText: "OK",
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <form onSubmit={handleSignUp} className="fieldset space-y-2">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Full Name"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
                required
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
                placeholder="Link to Photo"
              />

              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                className="input input-bordered w-full"
                placeholder="Your Address"
              />

              <label className="label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="input input-bordered w-full"
                placeholder="Phone Number"
              />

              <div className="mt-2">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
