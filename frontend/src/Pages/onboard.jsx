import React, { useState, useEffect } from "react";
import { FileUpload } from "@/shadcnComponents/ui/file-upload";
import onboard from "/onBoard.png";
import Header from "@/components/navbar";
import { axiosInstant } from "@/lib/axiosInstance";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TbLoader3 } from "react-icons/tb";
function Onboard() {
  const { user, checkAuth } = useAuthStore();
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  // const [organizationId, setorganizationId] = useState("");
  const [image, setimage] = useState("");
  const [experienceYears, setexperienceYears] = useState(0);
  const [day, setday] = useState(0);
  const [startTime, setstartTime] = useState(null);
  const [endTime, setendTime] = useState(null);
  const [specialization, setspecialization] = useState("");
  const [degree, setdegree] = useState("");
  const [college, setcollege] = useState("");
  const [year, setyear] = useState(0);
  const [city, setCity] = useState("");
  const [pinCode, setPincode] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [gender, setgender] = useState("");
  const [sport, setsport] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  const category = user?.role;
  let payload = {
    image,
    state,
    country,
  };

  if (category === "Athlete") {
    payload = {
      ...payload,
      dateOfBirth,
      height,
      weight,
      gender,
      sport,
    };
  }

  if (category === "Coach") {
    payload = {
      ...payload,
      specialization,
      experienceYears,
      day,
      startTime,
      endTime,
      sport,
      gender,
    };
  }

  if (category === "Doctor") {
    payload = {
      ...payload,
      degree,
      college,
      year,
      specialization,
      experienceYears,
      day,
      startTime,
      endTime,
      gender,
    };
  }

  if (category === "Organisation") {
    payload = {
      ...payload,
      city,
      pinCode,
      phone,
      website,
      description,
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!user) {
      toast.error("User not loaded");
      return;
    }
    try {
      const response = await axiosInstant.post(
        `/onboard/${user.role}`,
        payload,
      );
      console.log(response.data);
      toast.success("Onboarded successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error during onboarding:", error.response?.data || error);
      toast.error(
        error.response?.data?.message || "Onboarding failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleFileUpload = async (files) => {
    const file = files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "athleteHub_preset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dss7k4wej/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    setimage(data.secure_url);
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
                    Personal <span className="text-primary">Info</span>
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
                        placeholder="height in feet(eg. 5'10)"
                      />
                    </div>

                    <div className="form-control w-full font-poppins">
                      <label className="label">weight(kg):</label>
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
                      value={dateOfBirth}
                      onChange={(e) => setdateOfBirth(e.target.value)}
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
                      Qualifications & Others
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
                        value={experienceYears}
                        onChange={(e) => setexperienceYears(e.target.value)}
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
                    Personal <span className="text-primary">Info</span>
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
                        value={experienceYears}
                        min={0}
                        onChange={(e) => setexperienceYears(e.target.value)}
                        required
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              {(category === "Coach" || category === "Doctor") && (
                <div className="flex flex-col w-full">
                  <div className="flex flex-col justify-center items-start mt-2">
                    <div className="form-control w-full font-poppins">
                      <label className="label">
                        Days (availablity in a week):
                      </label>
                      <input
                        type="number"
                        value={day}
                        min={0}
                        max={7}
                        onChange={(e) => setday(e.target.value)}
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
                      <option value="Orthopedic Surgeon">
                        Orthopedic Surgeon
                      </option>
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                      required
                      className="textarea textarea-bordered w-full"
                    />
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="mt-6 btn btn-info w-full">
              {isSubmitting && <TbLoader3 className="size-4 animate-spin" />}
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
