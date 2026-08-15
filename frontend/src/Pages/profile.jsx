import React, { useEffect, useState } from "react";
import Header from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { IoIosAddCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiCalendarDateRange } from "react-icons/hi2";
import { SiReactivex } from "react-icons/si";
import { CgClose } from "react-icons/cg";
import { Carousel, CarouselCard } from "@/shadcnComponents/ui/carousel";
import { HiMiniTrophy } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { axiosInstant } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import KineticDotsLoader from "@/components/ui/loading";
import IsSubmitting from "@/components/ui/isSubmitting";

function Profile() {
  const { id } = useParams();
  const { user: loggedInUser, checkAuth } = useAuthStore();

  const [profileUser, setProfileUser] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isOwnProfile = !id || id === loggedInUser?.id;

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const fetchProfile = async () => {
    setPageLoading(true);
    try {
      if (isOwnProfile) {
        setProfileUser(loggedInUser);
      } else {
        const { data } = await axiosInstant.get(`/users/${id}`);
        setProfileUser(data.user);
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      toast.error("Failed to load profile");
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (loggedInUser !== undefined) fetchProfile();
  }, [id]);

  const handleAddAchievement = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axiosInstant.post("/achievements", { title, description, date });
      toast.success("Achievement added");
      setTitle("");
      setDescription("");
      setDate("");
      document.getElementById("my_modal_3").close();
      await fetchProfile();
    } catch (err) {
      console.error("Error adding achievement:", err);
      toast.error("Failed to add achievement");
    } finally {
      setSubmitting(false);
    }
  };

  if (pageLoading || !profileUser) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <KineticDotsLoader />
      </div>
    );
  }

  const achievements = profileUser?.athlete?.achievements || [];
  const cardData = achievements.map((achievement) => ({
    category: "Achievement",
    title: achievement.title,
    src: "/achievement.jpg",
    content: (
      <div className="overflow-x-auto">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <HiMiniTrophy className="size-8" />
            </div>
            <div className="stat-title font-semibold">{achievement.title}</div>
            <div className="stat-value uppercase text-2xl">
              {achievement.description}
            </div>
            <div className="stat-desc mt-1">
              {new Date(achievement.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    ),
  }));
  const cards = cardData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col justify-between min-h-screen h-full w-full">
      <Header></Header>
      <div className="pt-28 w-full">
        <div className="flex flex-col justify-center items-start w-full p-4">
          <div className="p-5 bg-primary-foreground rounded-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-7 w-full">
              <div className="p-4 flex flex-col justify-center items-start col-span-4">
                <h1 className="text-2xl font-poppins font-bold">
                  Personal <span className="text-warning">Information</span>
                </h1>
                <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                  <img
                    src={
                      profileUser?.athlete?.image ||
                      profileUser?.coach?.image ||
                      profileUser?.doctor?.image ||
                      "/default-profile.jpg"
                    }
                    alt="userimage"
                    className="h-40 w-40 object-cover rounded-full flex-shrink-0"
                  ></img>
                  <div className="flex flex-col justify-center items-start gap-2 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 font-medium font-inter text-sm">
                        <FaUser /> Username :
                      </div>
                      <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4">
                        {profileUser?.name || "Loading..."}
                      </div>
                    </div>
                    {isOwnProfile ? (
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center gap-2 font-medium font-inter text-sm">
                          <MdEmail /> Email :
                        </div>
                        <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4">
                          {profileUser?.email || "Loading..."}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center gap-2 font-medium font-inter text-sm">
                          <FaUser /> Role :
                        </div>
                        <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4">
                          {profileUser?.role || "Loading..."}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4 col-span-3">
                <h1 className="text-2xl font-poppins font-bold">
                  Account <span className="text-warning">Details</span>
                </h1>
                <div className="flex flex-col justify-center items-start gap-2 w-full mt-4 p-2">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-2 font-medium font-inter text-sm">
                      <HiCalendarDateRange /> Created At :
                    </div>
                    <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4">
                      {profileUser?.createdAt
                        ? new Date(profileUser.createdAt).toLocaleDateString()
                        : "N/A"}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-2 font-medium font-inter text-sm">
                      <SiReactivex /> Status :
                    </div>
                    <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4 text-white">
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isOwnProfile && !profileUser?.isOnboarded && (
              <div className="w-full flex justify-end">
                <Link to="/onboard" className="btn btn-accent">
                  Complete Profile
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start items-start w-full p-4">
            <h1 className="text-4xl font-bold uppercase">
              other <br /> informations
            </h1>
            <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />

            {profileUser?.role === "Athlete" && (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-full mt-4">
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Sport Experience
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Sport : </span>
                    {profileUser?.athlete?.sport || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Date of Birth : </span>
                    {profileUser?.athlete?.dateOfBirth
                      ? new Date(profileUser.athlete.dateOfBirth).toDateString()
                      : "N/A"}
                  </p>
                </div>
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Physical Information
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Weight : </span>
                    {profileUser?.athlete?.weight || "N/A"} kg
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Height : </span>
                    {profileUser?.athlete?.height || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Location
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Country : </span>
                    {profileUser?.athlete?.location?.country || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">State : </span>
                    {profileUser?.athlete?.location?.state || "N/A"}
                  </p>
                </div>
              </div>
            )}

            {profileUser?.role === "Doctor" && (
              <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-3 w-full mt-4">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-accent">
                    Sport Experience:
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold line-clamp-1">
                      Specialization :{" "}
                      <span className="font-medium">
                        {profileUser?.doctor?.specialization || "N/A"}
                      </span>
                    </span>
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Exp (yrs) : </span>
                    {profileUser?.doctor?.experienceYears || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Location :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Country : </span>
                    {profileUser?.doctor?.location?.country || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">State : </span>
                    {profileUser?.doctor?.location?.state || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col justify-between w-full gap-1">
                  <p className="text-base font-semibold text-accent">
                    Education :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">College : </span>
                    {profileUser?.doctor?.college || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Degree : </span>
                    {profileUser?.doctor?.degree || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">course duration: </span>
                    {profileUser?.doctor?.year || "N/A"} years
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Availability :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">
                      Availability in a week :{" "}
                    </span>
                    {profileUser?.doctor?.availability?.day || "N/A"} days
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Available from : </span>
                    {profileUser?.doctor?.availability?.startTime
                      ? new Date(
                          profileUser.doctor.availability.startTime,
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">End time : </span>
                    {profileUser?.doctor?.availability?.endTime
                      ? new Date(
                          profileUser.doctor.availability.endTime,
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </p>
                </div>
              </div>
            )}

            {profileUser?.role === "Coach" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-4">
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Sport Experience:
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Sport : </span>
                    {profileUser?.coach?.sport || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Specialization : </span>
                    {profileUser?.coach?.specialization || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Exp (yrs) : </span>
                    {profileUser?.coach?.experienceYears || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Availability :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">
                      Availability in a week :{" "}
                    </span>
                    {profileUser?.coach?.availability?.day || "N/A"} days
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground w-full">
                    <span className="font-semibold">Available from : </span>
                    {profileUser?.coach?.availability?.startTime
                      ? new Date(
                          profileUser.coach.availability.startTime,
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">End time : </span>
                    {profileUser?.coach?.availability?.endTime
                      ? new Date(
                          profileUser.coach.availability.endTime,
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Location :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">Country : </span>
                    {profileUser?.coach?.location?.country || "N/A"}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-primary-foreground">
                    <span className="font-semibold">State : </span>
                    {profileUser?.coach?.location?.state || "N/A"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {profileUser?.role === "Athlete" && (
          <div className="w-full p-4 px-8">
            <div className="flex flex-col items-start w-full mb-4">
              <div className="flex flex-col justify-center items-start gap-6 mt-4">
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-4xl font-bold font-poppins border-r-secondary uppercase">
                    Achievement <br className="lg:hidden" />
                    details
                  </h1>
                  <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
                </div>
                <p className="max-w-lg ">
                  A collection of significant accomplishments and recognitions
                  that demonstrate {isOwnProfile ? "my" : "their"} expertise,
                  dedication, and commitment to excellence throughout{" "}
                  {isOwnProfile ? "my" : "their"} career.
                </p>
              </div>
            </div>

            {isOwnProfile && (
              <div>
                <button
                  className="btn btn-info text-info-content border-0 rounded-full pl-1 mt-4 "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <IoIosAddCircle className="size-10" />
                  Add Achievements
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <CgClose className="size-5" />
                      </button>
                    </form>
                    <p className="text-sm font-inter font-medium">
                      Press ESC key or click on ✕ button to close
                    </p>
                    <form onSubmit={handleAddAchievement}>
                      <div>
                        <h1 className="text-xl font-semibold text-accent">
                          Achievement
                        </h1>
                        <div className="form-control w-full">
                          <label className="label">Competition:</label>
                          <input
                            type="text"
                            value={title}
                            placeholder="Competition Name"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <div className="form-control w-full">
                            <label className="label">Date:</label>
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              required
                              className="input input-bordered"
                            />
                          </div>
                          <div className="form-control w-full">
                            <label className="label">Position:</label>
                            <input
                              type="text"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                              placeholder="Winner/1st Runner Up/2nd Runner Up"
                              className="input input-bordered"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn bg-base-content w-full mt-4 text-base-300 hover:bg-accent"
                        >
                          {submitting ? <IsSubmitting /> : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
              </div>
            )}

            <Carousel items={cards} />
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Profile;
