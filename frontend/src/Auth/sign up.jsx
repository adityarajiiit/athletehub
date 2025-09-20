import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setcategory] = useState("");
  const [gender, setgender] = useState("");
  const [sport, setsport] = useState("");
  const [specialization, setspecialization] = useState("");
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
            />
          </div>
          <div className="form-control w-full">
            <label className="label font-poppins font-medium">Category:</label>
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              required
              className="select select-bordered font-poppins w-full"
            >
              <option value="">Select any option</option>
              <option value="Athlete">Athlete</option>
              <option value="Doctor">Doctor</option>
              <option value="Coach">Coach</option>
              <option value="Organisation">Organisation</option>
            </select>
          </div>
          <div className="flex flex-row justify-between space-x-2 w-full">
            {category != "Organisation" && (
              <div className="flex flex-col w-full">
                <label className="label font-poppins font-medium">
                  Gender:
                </label>
                <select
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                  required
                  className="select select-bordered font-poppins w-full"
                >
                  <option value="">Select any option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            )}
            {category === "Athlete" && (
              <div className="flex flex-col w-full">
                <label className="label font-poppins font-medium">
                  Sports:
                </label>
                <select
                  value={sport}
                  onChange={(e) => setsport(e.target.value)}
                  required
                  className="select select-bordered font-poppins w-full"
                >
                  <option value="">Select any option</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Football">Football</option>
                  <option value="Volleyball">Volleyball</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Hockey">Hockey</option>
                  <option value="Tennis">Tennis</option>
                </select>
              </div>
            )}
            {category === "Doctor" && (
              <div className="flex flex-col w-full">
                <label className="label font-poppins font-medium">
                  Specialization:
                </label>
                <select
                  value={specialization}
                  onChange={(e) => setspecialization(e.target.value)}
                  required
                  className="select select-bordered font-poppins w-full"
                >
                  <option value="">Select any option</option>
                  <option value="Physiotherapist">Physiotherapist</option>
                  <option value="Nutritionist">Nutritionist</option>
                  <option value="Psychologist">Psychologist</option>
                  <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                  <option value="Sports Medicine Specialist">
                    Sports Medicine Specialist
                  </option>
                  <option value="Rehabilitation Specialist">
                    Rehabilitation Specialist
                  </option>
                  <option value="Pain Management Expert">
                    Pain Management Expert
                  </option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Pediatric Sports Specialist">
                    Pediatric Sports Specialist
                  </option>
                  <option value="Exercise Physiologist">
                    Exercise Physiologist
                  </option>
                </select>
              </div>
            )}
            {category === "Coach" && (
              <div className="flex flex-col w-full">
                <label className="label font-poppins font-medium">
                  Sport :
                </label>
                <select
                  value={sport}
                  onChange={(e) => setsport(e.target.value)}
                  required
                  className="select select-bordered font-poppins w-full"
                >
                  <option value="">Select any option</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Football">Football</option>
                  <option value="Volleyball">Volleyball</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Hockey">Hockey</option>
                  <option value="Tennis">Tennis</option>
                </select>
              </div>
            )}
          </div>
          <button type="submit" className="mt-8 btn btn-info w-full">
            Sign Up
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
