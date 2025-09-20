import React from "react";
import { useState } from "react";
import { injuryData } from "@/constants/data";
import { illnessesByCategory } from "@/constants/data";
import { sportActivities } from "@/constants/data";
import { sportMechanisms } from "@/constants/data";
function InjuryAndIllnessForm() {
  const [formData, setFormData] = useState({
    troubletype: "",
    type: "",
    bodyPart: "",
    tissueType: "",
    InjuryName: "",
    category: "",
    illnessName: "",
    returntopartialtraining: "",
    levelofPain: "",
    newInjury: "",
    Priority: "",
    sport: "",
    activity: "",
    mechanism: "",
    returntofulltraining: "",
    dateofInjury: "",
    dateofIllness: "",
    trainingstatus: "",
    healthproblemresolved: "",
    returntocompetition: "",
    trainingrestriction: "",
    details: "",
    personnalprogram: "",
    additionalinformation: "",
    comments: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
                  value={formData.troubletype}
                  onChange={(e) =>
                    setFormData({ ...formData, troubletype: e.target.value })
                  }
                  required
                  className="select select-bordered"
                >
                  <option value="">Select the type of trouble</option>
                  <option value="Illness">Illness</option>
                  <option value="Injury">Injury</option>
                </select>
              </div>
              {formData.troubletype === "Injury" ? (
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
              ) : (
                ""
              )}
              {formData.troubletype === "Injury" && (
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
                        ))
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
                            : null
                        )
                      )}
                    </select>
                  </div>
                </div>
              )}
              {formData.troubletype === "Illness" && (
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
                        ))
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
                              : null
                        )
                      )}
                    </select>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2 w-full">
                {formData.troubletype === "Injury" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">Injury:</label>
                    <select
                      value={formData.InjuryName}
                      onChange={(e) =>
                        setFormData({ ...formData, InjuryName: e.target.value })
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
                                    : null
                              )
                            : null
                        )
                      )}
                    </select>
                  </div>
                )}
                {formData.troubletype === "Illness" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Returning to partail training:
                    </label>
                    <input
                      type="date"
                      value={formData.returntopartialtraining}
                      onChange={(e) =>
                        setFormData({
                          formData,
                          returntopartialtraining: e.target.value,
                        })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                )}

                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">
                    Level of pain:
                  </label>
                  <input
                    type="range"
                    value={formData.levelofPain}
                    onChange={(e) =>
                      setFormData({ ...formData, levelofPain: e.target.value })
                    }
                    required
                    min={0}
                    max={10}
                    className="range range-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">
                    New injury:
                  </label>
                  <select
                    value={formData.newInjury}
                    onChange={(e) =>
                      setFormData({ ...formData, newInjury: e.target.value })
                    }
                    required
                    className="select select-bordered"
                  >
                    <option value="">Select type</option>{" "}
                    <option value={true}>Yes</option>{" "}
                    <option value={false}>No</option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">Priority:</label>
                  <select
                    value={formData.Priority}
                    onChange={(e) =>
                      setFormData({ ...formData, Priority: e.target.value })
                    }
                    required
                    className="select select-bordered"
                  >
                    <option value="">Select type</option>{" "}
                    <option value="High">High</option>{" "}
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              {formData.troubletype === "Injury" && (
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
                        ))
                      )}
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
                                  )
                                )
                              : null
                        )
                      )}
                    </select>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2 w-full">
                {formData.troubletype === "Injury" && (
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
                                  )
                                )
                              : null
                        )
                      )}
                    </select>
                  </div>
                )}
                {formData.troubletype === "Illness" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Returning to full training:
                    </label>
                    <input
                      type="date"
                      value={formData.returntofulltraining}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          returntofulltraining: e.target.value,
                        })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                )}
                {formData.troubletype === "Injury" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Date of injury:
                    </label>
                    <input
                      type="date"
                      value={formData.dateofInjury}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateofInjury: e.target.value,
                        })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                )}
                {formData.troubletype === "Illness" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Date of illness:
                    </label>
                    <input
                      type="date"
                      value={formData.dateofIllness}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateofIllness: e.target.value,
                        })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">
                    Training status:
                  </label>
                  <select
                    value={formData.trainingstatus}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        trainingstatus: e.target.value,
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

                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">
                    Date of full recovery:
                  </label>
                  <input
                    type="date"
                    value={formData.healthproblemresolved}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        healthproblemresolved: e.target.value,
                      })
                    }
                    required
                    className="input input-bordered"
                  />
                </div>
              </div>
              {formData.troubletype === "Illness" && (
                <div className="form-control w-full">
                  <label className="label font-medium text-sm">
                    Returning to competition:
                  </label>
                  <input
                    type="date"
                    value={formData.returntocompetition}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        returntocompetition: e.target.value,
                      })
                    }
                    required
                    className="input input-bordered"
                  />
                </div>
              )}
              {formData.troubletype === "Injury" && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Training restrictions:
                    </label>
                    <input
                      type="text"
                      value={formData.trainingrestriction}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          trainingrestriction: e.target.value,
                        })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">Detail:</label>
                    <input
                      type="text"
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-x-2 w-full">
                <div className="flex flex-col mb-3">
                  <label className="label font-medium text-sm">
                    Personal program:
                  </label>
                  <input
                    type="text"
                    value={formData.personnalprogram}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personnalprogram: e.target.value,
                      })
                    }
                    required
                    className="input input-bordered"
                  />
                </div>
                {formData.troubletype === "Injury" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Additional Information:
                    </label>
                    <input
                      type="text"
                      value={formData.additionalinformation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          additionalinformation: e.target.value,
                        })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                )}
                {formData.troubletype === "Illness" && (
                  <div className="flex flex-col mb-3">
                    <label className="label font-medium text-sm">
                      Comment:
                    </label>
                    <input
                      type="text"
                      value={formData.comments}
                      onChange={(e) =>
                        setFormData({ ...formData, comments: e.target.value })
                      }
                      required
                      className="input input-bordered"
                    />
                  </div>
                )}
              </div>
              <button type="submit" className="mt-6 mb-2 btn btn-info">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default InjuryAndIllnessForm;
