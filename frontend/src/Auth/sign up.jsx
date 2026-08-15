import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TbLoader3 } from "react-icons/tb";
import { axiosInstant } from "@/lib/axiosInstance";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstant.post("/auth/register", {
        username,
        email,
        password,
        role,
      });
      console.log(response.data);
      toast.success("Registration successful!");
      navigate("/sign-in");
    } catch (error) {
      console.error(error.response?.data);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/herobg.jpg')]  bg-cover bg-center bg-no-repeat ">
      <div className="flex justify-center items-center p-5 w-full h-full backdrop-blur-sm">
        <form
          onSubmit={handleSubmit}
          className="justify-center items-center bg-base-100 rounded-xl flex flex-col p-10 min-w-xs max-w-lg w-full "
        >
          <img src={logo} alt="logo" className="size-24" />
          <p className="text-lg font-poppins font-medium">
            <span className="text-primary">Sign up</span> to your account
          </p>
          <div className="form-control w-full mt-2">
            <label className="label font-poppins font-medium">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="input input-bordered w-full font-poppins"
            />
          </div>
          <div className="form-control w-full">
            <label className="label font-poppins font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
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
              min={8}
            />
          </div>
          <div className="form-control w-full">
            <label className="label font-poppins font-medium">role:</label>
            <select
              value={role}
              onChange={(e) => setrole(e.target.value)}
              required
              className="select select-bordered font-poppins w-full"
            >
              <option value="">Select any option</option>
              <option value="Athlete">Athlete</option>
              <option value="Doctor">Doctor</option>
              <option value="Coach">Coach</option>
            </select>
          </div>
          <button type="submit" className="mt-8 btn btn-info w-full">
            {isLoading && <TbLoader3 className="size-4 animate-spin" />}Sign Up
          </button>{" "}
          <p className="flex justify-center items-center text-center mt-4 gap-2">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-info underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
