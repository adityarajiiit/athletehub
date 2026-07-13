import React, { useState, useEffect } from "react";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Card2 from "@/components/ProfileCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shadcnComponents/ui/pagination";
import no_data from "/no-data.png";
import { axiosInstant } from "@/lib/axiosInstance";
import KineticDotsLoader from "@/components/loading";
function Career() {
  const [coaches, setCoaches] = useState([]);
  const [athletes, setAthletes] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      setPageLoading(true);
      try {
        const [coachData, athleteData] = await Promise.all([
          axiosInstant
            .get("/coaches")
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error fetching coaches:", error);
              return [];
            }),
          axiosInstant
            .get("/athletes")
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error fetching athletes:", error);
              return [];
            }),
        ]);

        if (cancelled) return;

        setCoaches(coachData);
        setAthletes(athleteData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (!cancelled) {
          setPageLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);
  console.log(coaches);
  console.log(athletes);
  const rowperpage = 6;
  const totalPages = Math.ceil(coaches.length / rowperpage);
  const [currentPage, setCurrentPage] = useState(0);
  const startindex = currentPage * rowperpage;
  const endindex = Math.min(startindex + rowperpage, coaches.length);

  const totalPages2 = Math.ceil(athletes.length / rowperpage);
  const [currentPage2, setCurrentPage2] = useState(0);
  const startindex2 = currentPage * rowperpage;
  const endindex2 = Math.min(startindex2 + rowperpage, athletes.length);

  if (pageLoading) {
    return (
      <div className="flex min-h-screen flex-col justify-center items-center w-full bg-background">
        <KineticDotsLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-h-screen h-full w-full bg-background pt-28">
      <Header />
      <div className="flex flex-col items-center justify-center gap-y-10 w-full">
        <div className="flex flex-col justify-center items-center p-4 w-full">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mt-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold font-poppins  xl:pr-6 xl:border-r-2 p-2 border-r-secondary uppercase">
                our coaches
              </h1>
              <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 xl:hidden" />
            </div>
            <p className="max-w-xl md:max-w-2xl text-center xl:text-left">
              Meet the dedicated coaches who guide, motivate, and support you on
              every step of your athletic journey.
            </p>
          </div>
          {coaches.length > 0 && (
            <div className="flex flex-col items-center rounded-md mt-2 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-fit p-4 bg-muted/50 rounded-xl mt-4">
                {coaches.slice(startindex, endindex).map((user, index) => (
                  <Card2
                    key={user?.id || index}
                    user={user}
                    handleclick={() => {
                      console.log("Connect with", user?.user?.name);
                    }}
                  />
                ))}
              </div>

              <Pagination className="mt-4 w-fit">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        currentPage === 0
                          ? "pointer-events-none opacity-50 font-semibold text-accent "
                          : "text-accent text-primary"
                      }
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(0, prev - 1))
                      }
                    />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      className={
                        currentPage >= totalPages - 1
                          ? "pointer-events-none opacity-50 font-semibold text-accent"
                          : "text-accent text-primary"
                      }
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(totalPages - 1, prev + 1),
                        )
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
          {coaches.length == 0 && (
            <div className="flex flex-col justify-center items-center mt-6 bg-destructive p-10 rounded-xl md:w-[30rem] h-[25rem]">
              <img src={no_data} alt="no data" className="size-32" />

              <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                No data found
              </h1>
              <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                Currently no coaches available...
              </h1>
            </div>
          )}
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mt-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold font-poppins  xl:pr-6 xl:border-r-2 p-2 border-r-secondary uppercase">
              our events
            </h1>
            <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 xl:hidden" />
          </div>
          <p className="max-w-xl md:max-w-2xl text-center xl:text-left">
            Meet the athletes who inspire through dedication, hard work, and
            passion.Connect with athletes who share your drive and commitment to
            excellence.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-2 w-full">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mt-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold font-poppins  xl:pr-6 xl:border-r-2 p-2 border-r-secondary uppercase">
                our athletes
              </h1>
              <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 xl:hidden" />
            </div>
            <p className="max-w-xl md:max-w-2xl text-center xl:text-left">
              Discover upcoming events designed to challenge, inspire, and bring
              athletes together that fuel progress and community.
            </p>
          </div>

          {athletes.length > 0 && (
            <div className=" p-2 rounded-md mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-xl">
                {athletes.slice(startindex2, endindex2).map((user) => (
                  <Card2 key={user?.id} user={user} />
                ))}
              </div>

              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        currentPage2 === 0
                          ? "pointer-events-none opacity-50 font-semibold text-accent "
                          : "text-accent text-primary"
                      }
                      onClick={() =>
                        setCurrentPage2((prev) => Math.max(0, prev - 1))
                      }
                    />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      className={
                        currentPage2 >= totalPages2 - 1
                          ? "pointer-events-none opacity-50 font-semibold text-accent"
                          : "text-accent text-primary"
                      }
                      onClick={() =>
                        setCurrentPage2((prev) =>
                          Math.min(totalPages - 1, prev + 1),
                        )
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
          {athletes.length == 0 && (
            <div className="flex flex-col justify-center items-center mt-6 bg-destructive p-10 rounded-xl md:w-[30rem] h-[25rem]">
              <img src={no_data} alt="no data" className="size-32" />

              <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                No data found
              </h1>
              <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                Currently no athlete available...
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
