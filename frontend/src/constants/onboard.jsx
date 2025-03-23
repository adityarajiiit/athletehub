import React, { useState } from "react";
import { X } from "lucide-react";
function Onboard(props) {
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState("");

  const [dateofbirth, setdateofbirth] = useState("");
  const [organizationId, setorganizationId] = useState("");
  const [image, setimage] = useState("");
  const [category, setCategory] = useState("Coach");
  const [experience, setexperience] = useState(0);
  const [days, setdays] = useState(0);
  const [startTime, setstartTime] = useState(0);
  const [endTime, setendTime] = useState(0);
  const [specialization, setspecialization] = useState("");
  const [degree, setdegree] = useState("");
  const [college, setcollege] = useState("");
  const [year, setyear] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({});
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black/50 fixed z-40 ">
      <div className="bg-gradient-to-r from-[#0F044C] via-purple-900 to-[#141E61] shadow-lg shadow-slate-200/20 rounded-md w-11/12 max-w-lg">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-3xl p-4 text-[#687EFF]">Logo.</h1>
          <button onClick={props.function}>
            <X className="stroke-slate-50 stroke-2 h-6 w-6 mr-4 border-2 border-slate-100 rounded-lg" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-bold text-3xl text-[#80B3FF] mb-2">
            Complete your profile
          </h2>
          <p className="text-center w-4/6 font-semibold text-base mb-6 text-[#B6FFFA]">
            Fill the form given ..
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-t-xl p-6 z-50 max-h-[36rem] overflow-auto custom-scrollbar"
        >
          <div className="flex flex-col mb-3">
            <label className="relative top-3 bg-white w-fit left-2 px-1">
              Set you profile picture :
            </label>
            <input
              type="file"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md file:bg-white file:border-none text-base file:font-semibold"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="relative top-3 bg-white w-fit left-2 px-1">
              country:
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="relative top-3 bg-white w-fit left-2 px-1">
              state:
            </label>
            <input
              type="text"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="relative top-3 bg-white w-fit left-2 px-1">
              organization:
            </label>
            <select
              value={organizationId}
              onChange={(e) => setorganizationId(e.target.value)}
              required
              className="border-2 border-[#687EFF] p-2 rounded-md bg-white"
            >
              <option value="">Select any option</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {category === "Player" && (
              <div className="flex flex-col w-fit">
                <div className="flex flex-row gap-x-2 w-fit">
                  <div className="flex flex-col mb-3">
                    <label className="relative top-3 bg-white w-fit left-2 px-1">
                      height:
                    </label>
                    <input
                      type="text"
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                      required
                      className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                    />
                  </div>

                  <div className="flex flex-col mb-3">
                    <label className="relative top-3 bg-white w-fit left-2 px-1">
                      weight:
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setweight(e.target.value)}
                      required
                      className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label className="relative top-3 bg-white w-fit left-2 px-1">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    value={dateofbirth}
                    onChange={(e) => setdateofbirth(e.target.value)}
                    required
                    className="border-2 border-[#687EFF] p-2 rounded-md"
                  />
                </div>
              </div>
            )}

            {category === "Medician" && (
              <div className="flex flex-col w-full">
                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2 px-1">
                    Years of Expreience:
                  </label>
                  <input
                    type="number"
                    value={experience}
                    onChange={(e) => setexperience(e.target.value)}
                    required
                    className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-md border-muted p-2 mt-2">
                  <h1 className="text-xl font-semibold">Qualifications</h1>
                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 px-1">
                      College:
                    </label>
                    <input
                      type="text"
                      value={college}
                      onChange={(e) => setcollege(e.target.value)}
                      required
                      className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                    />
                  </div>
                  <div className="flex flex-row gap-x-2 w-fit">
                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1">
                        year:
                      </label>
                      <input
                        type="number"
                        value={year}
                        onChange={(e) => setyear(e.target.value)}
                        required
                        className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                      />
                    </div>

                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1">
                        Degree:
                      </label>
                      <input
                        type="text"
                        value={degree}
                        onChange={(e) => setdegree(e.target.value)}
                        required
                        className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-md border-muted p-2 mt-2">
                  <h1 className="text-xl font-semibold">Availability</h1>
                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 px-1">
                      Days:
                    </label>
                    <input
                      type="number"
                      value={days}
                      onChange={(e) => setdays(e.target.value)}
                      required
                      className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                    />
                  </div>
                  <div className="flex flex-row gap-x-2 w-fit">
                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1">
                        Start Time:
                      </label>
                      <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setstartTime(e.target.value)}
                        required
                        className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                      />
                    </div>

                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1">
                        End Time:
                      </label>
                      <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setendTime(e.target.value)}
                        required
                        className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {category === "Coach" && (
              <div className="flex flex-col w-full">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1">
                    Specialization:
                  </label>
                  <input
                    type="text"
                    value={specialization}
                    onChange={(e) => setspecialization(e.target.value)}
                    required
                    className="border-2 border-[#687EFF] p-2 rounded-md file:bg-white file:border-none text-base file:font-semibold"
                  />
                </div>
                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2 px-1">
                    Years of Expreience:
                  </label>
                  <input
                    type="number"
                    value={experience}
                    onChange={(e) => setexperience(e.target.value)}
                    required
                    className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-center border-2 rounded-md border-muted p-2 mt-2">
                  <h1 className="text-xl font-semibold">Availability</h1>
                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 px-1">
                      Days:
                    </label>
                    <input
                      type="number"
                      value={days}
                      onChange={(e) => setdays(e.target.value)}
                      required
                      className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                    />
                  </div>
                  <div className="flex flex-row gap-x-2 w-fit">
                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1">
                        Start Time:
                      </label>
                      <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setstartTime(e.target.value)}
                        required
                        className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                      />
                    </div>

                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1">
                        End Time:
                      </label>
                      <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setendTime(e.target.value)}
                        required
                        className="border-2 border-[#687EFF] p-2 rounded-md w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 mb-2 p-3 bg-[#301E67] text-[#98E4FF] font-semibold rounded-md w-full hover:bg-[#4b2c97] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Onboard;
