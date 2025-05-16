import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { List } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [category, setcategory] = useState("Athlete");
  const [isSignin, setIssignin] = useState(true);
  return (
    <header className=" h-20 mt-0 w-full flex items-center  top-0 fixed z-50 border-b-2 border-muted/30">
      <nav className="w-full flex flex-row items-center justify-between bg-amber-600">
        <div className="pl-2 flex flex-row justify-center items-center">
          <h2 className="pl-4 pr-4 font-bold text-white text-3xl font-custom">
            Logo.
          </h2>
        </div>
        <div className="flex flex-row w-full lg:justify-center justify-end items-center">
          <div className="w-0 h-0 border-l-[3rem] border-l-transparent border-r-[0rem] border-r-transparent border-b-[5rem] border-b-black"></div>
          <div className="flex flex-row items-center justify-between bg-black lg:w-full w-20 h-20 ">
            <ul className="hidden lg:flex  flex-row pr-4 items-center justify-center gap-x-4 lg:gap-x-5 w-full">
              <Link
                className="text-lg font-semibold text-destructive hover:text-orange-300"
                to="/"
              >
                Home
              </Link>
              <NavigationMenu className="z-50">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent  text-white font-semibold text-lg focus:text-orange-300">
                      Career
                    </NavigationMenuTrigger>
                    {category === "Athlete" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-black pr-[5px]">
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/career">Mentors</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/career">Events</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start  text-destructive font-semibold  bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/career">Athletes</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}
                    {category === "Doctor" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-black pr-[5px]">
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/career-doc">Appointments</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/career-doc">Athletes</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}
                    {category === "Organization" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-black pr-[5px]">
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/org">Athletes</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/org">Coaches</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/org">Doctors</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/org">Events</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}
                    {category === "Coach" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-black pr-[5px]">
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/career-coach">Requests</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                          <Link to="/career-coach">Athletes</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {category === "Athlete" && (
                <div className="flex justify-center items-center gap-4">
                  <NavigationMenu className="z-50">
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent text-white font-semibold text-lg focus:text-orange-300">
                          Aids
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col bg-black p-1 ">
                          <NavigationMenuLink className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                            <Link to="/aid">Medicians</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="p-2 text-start  text-destructive font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                            <Link to="/aid">Diet plan</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="p-2 text-start  text-destructive font-semibold bg-white/10 mb-[1px] hover:bg-white/20">
                            <Link to="/aid">Injury & illness</Link>
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  <Link className="text-lg font-semibold text-destructive hover:text-orange-300">
                    Progress
                  </Link>

                  <NavigationMenu className="z-50">
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent text-white font-semibold text-lg focus:text-orange-300">
                          Finance
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col bg-black p-1 pr-[6px]">
                          <Link
                            to="/finance"
                            className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20"
                          >
                            {" "}
                            <NavigationMenuLink>Account</NavigationMenuLink>
                          </Link>
                          <Link
                            to="/finance"
                            className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20"
                          >
                            {" "}
                            <NavigationMenuLink>Transaction</NavigationMenuLink>
                          </Link>
                          <Link
                            to="/finance"
                            className="p-2 text-start text-destructive  font-semibold bg-white/10 mb-[1px] hover:bg-white/20"
                          >
                            {" "}
                            <NavigationMenuLink>Budget</NavigationMenuLink>
                          </Link>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              )}

              <Link
                className="text-lg font-semibold text-destructive hover:text-orange-300 "
                to="/chat"
              >
                Chat
              </Link>

              <Link
                className="text-lg font-semibold text-destructive hover:text-orange-300"
                to="/profile"
              >
                Profile
              </Link>
            </ul>
            {isSignin ? (
              <button className="p-2 text-white border-2 border-orange-400 hover:bg-orange-500 font-lato text-lg h-fit w-52 font-semibold mr-4 hidden lg:flex justify-center items-center rounded-sm">
                Sign Out
              </button>
            ) : (
              <button className="p-2 text-white border-2 border-orange-400 hover:bg-orange-500 font-lato text-lg h-fit w-52 font-semibold mr-4 hidden lg:flex justify-center items-center rounded-sm">
                Sign In
              </button>
            )}

            <Sheet className="bg-black lg:hidden">
              <SheetTrigger className="pr-4 lg:hidden flex justify-end items-center w-full">
                <List className="stroke-slate-200 h-8 w-8 fill-slate-200" />
              </SheetTrigger>
              <SheetContent className="bg-black">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription className="flex flex-col w-full">
                    <div className="flex flex-row justify-center items-center w-full h-24">
                      <h2 className="pl-1 font-bold text-white text-3xl font-custom">
                        AthleteHub.
                      </h2>
                    </div>
                    <ul className="flex flex-col items-start justify-center gap-x-4 lg:gap-x-5 w-full">
                      <Link
                        className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2 border-b "
                        to="/"
                      >
                        Home
                      </Link>

                      <Accordion className="z-50 w-full" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2">
                            Career
                          </AccordionTrigger>

                          {category === "Athlete" && (
                            <AccordionContent className="flex flex-col bg-black p-1 pl-4">
                              <Link
                                to="/career"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Mentors
                              </Link>
                              <Link
                                to="/career"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Events
                              </Link>
                              <Link
                                to="/career"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Athletes
                              </Link>
                            </AccordionContent>
                          )}

                          {category === "Doctor" && (
                            <AccordionContent className="flex flex-col bg-black p-1 pl-4">
                              <Link
                                to="/career-doc"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Appointments
                              </Link>
                              <Link
                                to="/career-doc"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Athletes
                              </Link>
                            </AccordionContent>
                          )}

                          {category === "Organization" && (
                            <AccordionContent className="flex flex-col bg-black p-1 pl-4">
                              <Link
                                to="/org"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Athletes
                              </Link>
                              <Link
                                to="/org"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Coaches
                              </Link>
                              <Link
                                to="/org"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Doctors
                              </Link>
                              <Link
                                to="/org"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Events
                              </Link>
                            </AccordionContent>
                          )}

                          {category === "Coach" && (
                            <AccordionContent className="flex flex-col bg-black p-1 pl-4">
                              <Link
                                to="/career-coach"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Requests
                              </Link>
                              <Link
                                to="/career-coach"
                                className="text-base text-white/70 hover:text-white font-semibold"
                              >
                                Athletes
                              </Link>
                            </AccordionContent>
                          )}
                        </AccordionItem>
                      </Accordion>

                      {category === "Athlete" && (
                        <div className="flex flex-col justify-center items-center w-full">
                          <Accordion className="z-50 w-full" collapsible>
                            <AccordionItem value="item-1">
                              <AccordionTrigger className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2 ">
                                Aids
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col bg-black p-1 pl-4">
                                <Link
                                  to="/aid"
                                  className="text-base text-white/70 hover:text-white font-semibold"
                                >
                                  Medicians
                                </Link>

                                <Link
                                  to="/aid"
                                  className="text-base text-white/70 hover:text-white font-semibold"
                                >
                                  Diet plan
                                </Link>

                                <Link
                                  to="/aid"
                                  className="text-base text-white/70 hover:text-white font-semibold"
                                >
                                  Injury & illness
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <Link
                            to="/progress"
                            className="text-xl font-semibold text-destructive border-b hover:text-white w-full p-2 hover:bg-white/20 "
                          >
                            Progress
                          </Link>

                          <Accordion className="z-50 w-full" collapsible>
                            <AccordionItem value="item-1">
                              <AccordionTrigger className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2 ">
                                Finance
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col bg-black p-1 pl-4">
                                <Link
                                  to="/finance"
                                  className="text-base text-white/70 hover:text-white font-semibold"
                                >
                                  {" "}
                                  Account
                                </Link>
                                <Link
                                  to="/finance"
                                  className="text-base text-white/70 hover:text-white font-semibold"
                                >
                                  {" "}
                                  Transaction
                                </Link>
                                <Link
                                  to="/finance"
                                  className="text-base text-white/70 hover:text-white font-semibold"
                                >
                                  {" "}
                                  Budget
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      )}

                      <Link className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2 border-b">
                        Chat
                      </Link>

                      <Link
                        className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2 border-b"
                        to="/profile"
                      >
                        Profile
                      </Link>
                      {isSignin ? (
                        <Link className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2 border-b">
                          Sign Out
                        </Link>
                      ) : (
                        <Link className="bg-transparent text-white font-semibold text-xl w-full hover:no-underline hover:bg-white/20 p-2 border-b">
                          Sign In
                        </Link>
                      )}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
