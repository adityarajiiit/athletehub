import React, { useState } from "react";
import Lottie from "react-lottie";
import { Link, Navigate } from "react-router-dom";
import animationData from "../assets/Animation.json";
import axios from "axios";
import { set } from "mongoose";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setcategory] = useState("");
  const [gender, setgender] = useState("");
  const [sport, setsport] = useState("");
const [loading,setLoading]=useState(false)
const [error,setError]=useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setLoading(true)
   try{
const submitData=await axios.post("http://localhost:5000/api/auth/signup",{
  email:email,
  password:password,
  name:username,
  role:category,
},{
  headers:{
    "Content-Type":"application/json"
  }
});
console.log(submitData);
setLoading(false)
setError(null)
alert("Check your mail for verification link")
   }
   catch(error){
setError(error.response.data.message)
setLoading(false)
   }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#bcd6eb]">
      <div className="bg-gradient-to-r from-[#0F044C] via-purple-900 to-[#141E61] shadow-lg rounded-md w-9/12 lg:w-[40rem]">
        <h1 className="font-bold text-3xl p-3 pl-6 text-[#687EFF]">Logo.</h1>
        <div className="flex flex-col items-center justify-center">
          <Lottie options={defaultOptions} height={100} width={200} />
          <h2 className="text-center font-bold text-3xl text-[#80B3FF] mb-2">
            Sign Up to continue
          </h2>
          <p className="text-center w-4/6 font-semibold text-base mb-6 text-[#B6FFFA]">
            Unlock endless opportunities in sports management—connect with
            experts, expand your scope, and take your career to the next level!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-t-xl flex flex-col p-8"
        >
          <div className="flex flex-col">
            <label className="relative top-3 bg-white w-fit left-2 p-1">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="relative top-3 bg-white w-fit left-2 p-1">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="relative top-3 bg-white w-fit left-2 p-1">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="relative top-3 bg-white w-fit left-2 p-1">
              Category:
            </label>
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md bg-white"
            >
              <option value="">Select any option</option>
              <option value="Athlete">Athlete</option>
              <option value="Doctor">Doctor</option>
              <option value="Coach">Coach</option>
              <option value="Organization">Organization</option>
            </select>
          </div>
          <div className="flex flex-row justify-between space-x-2">
            <div className="flex flex-col sm:w-full">
              <label className="relative top-3 bg-white w-fit left-2 p-1">
                Gender:
              </label>
              <select
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                required
                className="border-2 border-[#687EFF] p-2 rounded-md bg-white"
              >
                <option value="">Select any option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 mb-2 p-2 border bg-[#301E67] text-[#98E4FF] font-semibold rounded-md"
            disabled={loading}
          >
            Sign Up
          </button>
          {error&&<p className="text-red-500">{error}</p>}
          <p className="text-center text-[#141415]">
            Already have an account?
            <Link to="/sign-in" className="text-[#687EFF] underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
