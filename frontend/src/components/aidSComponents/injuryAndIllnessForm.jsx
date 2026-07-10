import React from "react";
import { useState } from "react";
import { injuryData } from "@/constants/data";
import { illnessesByCategory } from "@/constants/data";
import { sportActivities } from "@/constants/data";
import { sportMechanisms } from "@/constants/data";
import { axiosInstant } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import IsSubmitting from "../isSubmitting";
import { useNavigate } from "react-router-dom";
function InjuryAndIllnessForm() {
  const [troubletype, setTroubleType] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "",
    bodyPart: "",
    tissueType: "",
    injuryName: "",
    category: "",
    illnessName: "",
    severity: "",
    sport: "",
    activity: "",
    mechanism: "",
    isRecovered: false,
    date: "",
    trainingStatus: "",
    personalProgram: "",
    comments: "",
  });
  let payload = {
    severity: formData.severity,
    isRecovered: formData.isRecovered,
    date: formData.date,
    trainingStatus: formData.trainingStatus,
    personalProgram: formData.personalProgram,
    comments: formData.comments,
  };
  if (troubletype === "Injury") {
    payload = {
      ...payload,
      type: formData.type,
      bodyPart: formData.bodyPart,
      tissueType: formData.tissueType,
      injuryName: formData.injuryName,
      sport: formData.sport,
      activity: formData.activity,
      mechanism: formData.mechanism,
    };
  }
  if (troubletype === "Illness") {
    payload = {
      ...payload,
      category: formData.category,
      illnessName: formData.illnessName,
    };
  }
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axiosInstant.post(`/aid/${troubletype}`, payload);
      console.log(response.data);
      toast.success(`${troubletype} reported successfully!`);
      navigate(0);
    } catch (error) {
      console.error("Error reporting trouble:", error);
      toast.error(`Failed to report ${troubletype}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div type="single" collapsible>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <h1 className="text-2xl font-bold my-4 text-center uppercase">
                Injury & Illness Form
              </h1>
              <div className="form-control w-full">
                <label className="label font-medium text-sm">
                  Injury or Illness :
                </label>
                <select
                  value={troubletype}
                  onChange={(e) => setTroubleType(e.target.value)}
                  required
                  className="select select-bordered"
                >
                  <option value="">Select the type of trouble</option>
                  <option value="Illness">Illness</option>
                  <option value="Injury">Injury</option>
                </select>
              </div>
              {troubletype === "Injury" && (
                <div className="form-control w-full">
                  <label className="label font-medium text-sm">
                    Injury type :
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    required
                    className="select select-bordered"
                  >
                    <option value="">Select type</option>
                    <option value="Acute">Acute</option>
                    <option value="Overuse">Overuse</option>
                  </select>
                </div>
              )}
              {troubletype === "Injury" && (
                <div className="grid grid-cols-2 gap-2 w-full ">
                  <div className="form-control w-full">
                    <label className="label font-medium text-sm">
                      Body Part:
                    </label>
                    <select
                      value={formData.bodyPart}
                      onChange={(e) =>
                        setFormData({ ...formData, bodyPart: e.target.value })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>
                      {injuryData.map((organData, organIndex) =>
                        Object.keys(organData).map((organ) => (
                          <option key={organIndex} value={organ}>
                            {organ}
                          </option>
                        )),
                      )}
                    </select>
                  </div>

                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Affected Organ:
                    </label>
                    <select
                      value={formData.tissueType}
                      onChange={(e) =>
                        setFormData({ ...formData, tissueType: e.target.value })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>
                      {injuryData.map((organData) =>
                        Object.entries(organData).map(([organ, suborgan]) =>
                          organ === formData.bodyPart
                            ? Object.keys(suborgan).map((Affected, index) => (
                                <option value={Affected}>{Affected}</option>
                              ))
                            : null,
                        ),
                      )}
                    </select>
                  </div>
                </div>
              )}
              {troubletype === "Illness" && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Illness category:
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>
                      {illnessesByCategory.map((illness, illnessindex) =>
                        Object.keys(illness).map((illnessname) => (
                          <option key={illnessindex} value={illnessname}>
                            {illnessname}
                          </option>
                        )),
                      )}
                    </select>
                  </div>

                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Name of Illness:
                    </label>
                    <select
                      value={formData.illnessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          illnessName: e.target.value,
                        })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>
                      {illnessesByCategory.map((illnessdata, illnessindex) =>
                        Object.entries(illnessdata).map(
                          ([illness, illnessname], index) =>
                            illness === formData.category
                              ? illnessname.map((illnessnames, index) => (
                                  <option value={illnessnames}>
                                    {illnessnames}
                                  </option>
                                ))
                              : null,
                        ),
                      )}
                    </select>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2 w-full">
                {troubletype === "Injury" && (
                  <div className="flex flex-col mb-3 w-full">
                    <label className="label font-medium text-sm">Injury:</label>
                    <select
                      value={formData.injuryName}
                      onChange={(e) =>
                        setFormData({ ...formData, injuryName: e.target.value })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>
                      {injuryData.map((organData, organIndex) =>
                        Object.entries(organData).map(([organ, suborgans]) =>
                          organ === formData.bodyPart
                            ? Object.entries(suborgans).map(
                                ([suborgan, injuryList]) =>
                                  suborgan === formData.tissueType
                                    ? injuryList.map((injury, injuryIndex) => (
                                        <option
                                          key={`${organIndex}-${organ}-${suborgan}-${injuryIndex}`}
                                          value={injury}
                                        >
                                          {injury}{" "}
                                        </option>
                                      ))
                                    : null,
                              )
                            : null,
                        ),
                      )}
                    </select>
                  </div>
                )}

                <div className="flex flex-col mb-3 w-full">
                  <label className="label font-medium text-sm">
                    Severity of{" "}
                    {troubletype === "Injury" ? "Injury" : "Illness"}:
                  </label>
                  <select
                    type="range"
                    value={formData.severity}
                    onChange={(e) =>
                      setFormData({ ...formData, severity: e.target.value })
                    }
                    required
                    className="select select-bordered"
                  >
                    <option value="">Select type</option>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                  </select>
                </div>
              </div>

              {troubletype === "Injury" && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">Sport:</label>
                    <select
                      value={formData.sport}
                      onChange={(e) =>
                        setFormData({ ...formData, sport: e.target.value })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>

                      {sportActivities.map((sports) =>
                        Object.keys(sports).map((sport, sportindex) => (
                          <option
                            key={`${sportindex}`}
                            value={sport}
                            className=" custom-scrollbar"
                          >
                            {sport}
                          </option>
                        )),
                      )}
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Sport Activity:
                    </label>
                    <select
                      value={formData.activity}
                      onChange={(e) =>
                        setFormData({ ...formData, activity: e.target.value })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>
                      {sportActivities.map((sports) =>
                        Object.entries(sports).map(
                          ([sportname, sportactivity]) =>
                            sportname === formData.sport
                              ? sportactivity.map(
                                  (sportactivityname, finalindex) => (
                                    <option value={sportactivityname}>
                                      {sportactivityname}
                                    </option>
                                  ),
                                )
                              : null,
                        ),
                      )}
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
              )}
              <div className="grid gap-2 w-full">
                {troubletype === "Injury" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      cause of injury:
                    </label>
                    <select
                      value={formData.mechanism}
                      onChange={(e) =>
                        setFormData({ ...formData, mechanism: e.target.value })
                      }
                      required
                      className="select select-bordered"
                    >
                      <option value="">Select type</option>
                      {sportMechanisms.map((sports) =>
                        Object.entries(sports).map(
                          ([sportname, sportactivity]) =>
                            sportname === formData.sport
                              ? sportactivity.map(
                                  (sportactivityname, finalindex) => (
                                    <option value={sportactivityname}>
                                      {sportactivityname}
                                    </option>
                                  ),
                                )
                              : null,
                        ),
                      )}
                      <option value="Others">Others</option>
                    </select>
                  </div>
                )}
                <div>
                  <label className="label font-medium text-sm">
                    Date of {troubletype === "Injury" ? "Injury" : "Illness"}:
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        date: e.target.value,
                      })
                    }
                    required
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex gap-2 w-full items-center shrink">
                <div className="flex flex-col mb-3 w-full">
                  <label className="label font-medium text-sm">
                    Training status:
                  </label>
                  <select
                    value={formData.trainingStatus}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        trainingStatus: e.target.value,
                      })
                    }
                    required
                    className="select select-bordered"
                  >
                    <option value="">Select type</option>{" "}
                    <option value="Full Participation">
                      Full Participation
                    </option>{" "}
                    <option value="Reduced Participation">
                      Reduced Participation
                    </option>
                    <option value="No Participation">No Participation</option>
                  </select>
                </div>

                <div className="flex items-center justify-center gap-3 mb-3 w-full">
                  <input
                    type="checkbox"
                    value={formData.isRecovered}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isRecovered: e.target.checked,
                      })
                    }
                    className="checkbox checkbox-primary"
                  />
                  <label className="label font-medium text-sm line-clamp-2">
                    Are you recovered from{" "}
                    {troubletype === "Injury" ? "injury" : "illness"}?
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-2 w-full">
                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">
                    Personal program:
                  </label>
                  <input
                    type="text"
                    value={formData.personalProgram}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personalProgram: e.target.value,
                      })
                    }
                    required
                    className="textarea textarea-bordered"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">Comment:</label>
                  <input
                    type="text"
                    value={formData.comments}
                    onChange={(e) =>
                      setFormData({ ...formData, comments: e.target.value })
                    }
                    required
                    className="textarea textarea-bordered"
                  />
                </div>
              </div>
              <button type="submit" className="mt-6 mb-2 btn btn-info">
                {isloading && <IsSubmitting />}Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default InjuryAndIllnessForm;
