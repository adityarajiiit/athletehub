import React, { useState } from "react";
import { FileUpload } from "@/shadcnComponents/ui/file-upload";
import onboard from "/onBoard.png";
import Header from "@/components/navbar";
function Onboard(props) {
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [organizationId, setorganizationId] = useState("");
  const [image, setimage] = useState("");
  const [category, setCategory] = useState("Organisation");
  const [experience, setexperience] = useState(0);
  const [days, setdays] = useState(0);
  const [startTime, setstartTime] = useState(0);
  const [endTime, setendTime] = useState(0);
  const [specialization, setspecialization] = useState("");
  const [degree, setdegree] = useState("");
  const [college, setcollege] = useState("");
  const [year, setyear] = useState(0);
  const [city, setCity] = useState("");
  const [pinCode, setPincode] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({});
  };
  const handleFileUpload = (files) => {
    setimage(files);
    console.log(files);
  };
  return (
    <div className="flex-1">
      <Header></Header>
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full min-h-screen h-full  bg-base-100 pt-24">
        <div className="w-full h-full xl:h-[calc(100vh-6rem)] overflow-y-auto p-4 scrollbar-hide">
          <form onSubmit={handleSubmit} className="">
            <div className="form-control w-full font-poppins">
              <label className="label">Set you profile picture :</label>

              <FileUpload onChange={handleFileUpload}></FileUpload>
            </div>
            <h1 className="text-3xl font-bold mt-4 uppercase font-poppins">
              Location <span className="text-primary">Info</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="form-control w-full font-poppins">
                <label className="label">country:</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  placeholder="Country Name"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full font-poppins">
                <label className="label">state:</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                  placeholder="State Name"
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {category === "Organisation" && (
              <div className="flex flex-col md:flex-row gap-2">
                <div className="form-control w-full font-poppins">
                  <label className="label">City:</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City Name"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control w-full font-poppins">
                  <label className="label">PinCode:</label>
                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Pin Code"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3">
              {category === "Athlete" && (
                <div className="flex flex-col w-full">
                  <h1 className="text-3xl font-bold mt-4 uppercase font-poppins">
                    Physical <span className="text-primary">Info</span>
                  </h1>
                  <div className="flex flex-row gap-x-2 w-full">
                    <div className="form-control w-full font-poppins">
                      <label className="label">height:</label>
                      <input
                        type="text"
                        value={height}
                        onChange={(e) => setheight(e.target.value)}
                        required
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div className="form-control w-full font-poppins">
                      <label className="label">weight:</label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setweight(e.target.value)}
                        required
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="label">Date of Birth:</label>
                    <input
                      type="date"
                      value={dateofbirth}
                      onChange={(e) => setdateofbirth(e.target.value)}
                      required
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
              )}

              {category === "Doctor" && (
                <div className="flex flex-col w-full">
                  <div className="flex flex-col justify-center items-start mt-4">
                    <h1 className="text-3xl font-bold uppercase">
                      Qualifications
                    </h1>
                    <div className="form-control w-full font-poppins">
                      <label className="label">College:</label>
                      <input
                        type="text"
                        value={college}
                        onChange={(e) => setcollege(e.target.value)}
                        required
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="flex flex-row gap-x-2 w-full">
                      <div className="form-control w-full font-poppins">
                        <label className="label">year:</label>
                        <input
                          type="number"
                          value={year}
                          onChange={(e) => setyear(e.target.value)}
                          required
                          className="input input-bordered w-full"
                        />
                      </div>

                      <div className="form-control w-full font-poppins">
                        <label className="label">Degree:</label>
                        <input
                          type="text"
                          value={degree}
                          onChange={(e) => setdegree(e.target.value)}
                          required
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                    <div className="form-control w-full font-poppins">
                      <label className="label">Years of Expreience:</label>
                      <input
                        type="number"
                        value={experience}
                        onChange={(e) => setexperience(e.target.value)}
                        required
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {category === "Coach" && (
                <div className="flex flex-col w-full">
                  <h1 className="text-3xl font-bold mt-4 uppercase font-poppins">
                    Experience <span className="text-primary">Info</span>
                  </h1>
                  <div className="flex flex-col md:flex-row gap-2 ">
                    <div className="form-control w-full font-poppins">
                      <label className="label">Specialization:</label>
                      <input
                        type="text"
                        value={specialization}
                        onChange={(e) => setspecialization(e.target.value)}
                        required
                        className="input input-bordered w-full file:bg-white file:border-none text-base file:font-semibold"
                      />
                    </div>
                    <div className="form-control w-full font-poppins">
                      <label className="label">Years of Expreience:</label>
                      <input
                        type="number"
                        value={experience}
                        onChange={(e) => setexperience(e.target.value)}
                        required
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              {(category === "Coach" || category === "Doctor") && (
                <div className="flex flex-col w-full">
                  <div className="flex flex-col justify-center items-start mt-4">
                    <h1 className="text-3xl font-bold uppercase">
                      Availability
                    </h1>
                    <div className="form-control w-full font-poppins">
                      <label className="label">Days:</label>
                      <input
                        type="number"
                        value={days}
                        min={0}
                        onChange={(e) => setdays(e.target.value)}
                        required
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="flex flex-row gap-x-2 w-full">
                      <div className="form-control w-full font-poppins">
                        <label className="label">Start Time:</label>
                        <input
                          type="time"
                          value={startTime}
                          onChange={(e) => setstartTime(e.target.value)}
                          required
                          className="input input-bordered w-full"
                        />
                      </div>

                      <div className="form-control w-full font-poppins">
                        <label className="label">End Time:</label>
                        <input
                          type="time"
                          value={endTime}
                          onChange={(e) => setendTime(e.target.value)}
                          required
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {category === "Organisation" && (
                <div>
                  <h1 className="text-3xl font-bold mt-4 uppercase font-poppins">
                    Contact <span className="text-primary">Details</span>
                  </h1>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="form-control w-full font-poppins">
                      <label className="label">Phone Number:</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        required
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div className="form-control w-full font-poppins">
                      <label className="label">Website Link:</label>
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Website Link"
                        required
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold mt-4 uppercase font-poppins">
                    Description
                  </h1>
                  <div className="form-control w-full font-poppins">
                    <label className="label">Description: </label>
                    <textarea
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="Description"
                      required
                      className="textarea textarea-bordered w-full"
                    />
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="mt-6 btn btn-info w-full">
              Submit
            </button>
          </form>
        </div>
        <img
          src={onboard}
          alt=""
          className="w-full xl:h-[calc(100vh-6rem)] object-cover xl:block hidden"
        />
      </div>
    </div>
  );
}

export default Onboard;
