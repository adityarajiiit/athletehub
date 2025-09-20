import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('/herobg.jpg')]  bg-cover bg-center bg-no-repeat ">
      <div className="flex justify-center items-center p-5 w-full h-full backdrop-blur-sm">
        <form
          onSubmit={handleSubmit}
          className="justify-center items-center bg-base-100 rounded-xl flex flex-col p-10 min-w-xs max-w-lg w-full "
        >
          <img src={logo} alt="logo" className="size-24" />
          <p className="text-lg font-poppins font-medium">
            <span className="text-primary">Log in</span> to your account
          </p>
          <div className="form-control w-full mt-2">
            <label className="label font-poppins font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="input input-bordered w-full font-poppins"
            />
          </div>
          <div className="form-control w-full">
            <label className="label font-poppins font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="input input-bordered w-full font-poppins"
            />
          </div>

          <button type="submit" className="mt-8 btn btn-info w-full">
            Sign In
          </button>
          <p className="flex justify-center items-center text-center mt-4 gap-2 ">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-info underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
