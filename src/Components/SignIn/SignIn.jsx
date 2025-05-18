import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const SignIn = () => {
  // @ts-ignore
  const { signInUser } = use(AuthContext);
  const handleSignIn = (e) => {
    // Your logic here
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    console.log(email, password);
    //  firebase sign in send
    signInUser(email, password)
      .then((result) => {
        console.log("Signed in user:", result.user);
        const signInInfo = {
          email,
          lastSignInTime: result.user.metadata.lastSignInTime,
        };

        // update last sign in to the database
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((error) => {
        console.error("Sign in error:", error.code, error.message);

        // alisozzjib295@gmail.com
      });
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset space-y-2">
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

              <div className="mt-2">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
