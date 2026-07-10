import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shadcnComponents/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shadcnComponents/ui/navigation-menu";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "/logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcnComponents/ui/accordion";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { FaUserClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Component } from "./glowButton";
import { IoNotifications } from "react-icons/io5";
function Header() {
  const { user, checkAuth, logout } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(user);
  const category = user?.role;
  const navigate = useNavigate();
  return (
    <header className=" h-30 mt-0 w-full flex flex-col items-center  top-0 fixed z-50 bg-muted/90">
      <div className="w-full h-10 bg-base-200 flex justify-end items-center gap-4 px-6 font-inter">
        <p className="uppercase px-4 border-r-2 text-sm text-secondary border-accent font-bold">
          athletehub
        </p>

        <p className="flex-row justify-center items-center gap-2 text-sm font-medium hidden md:flex pr-4 border-r-2 border-accent font-poppins text-secondary">
          {" "}
          <FaUserClock className="text-accent" />
          <span className="text-accent">We are open : 9:00 AM - 6:00 PM</span>
        </p>
      </div>
      <nav className=" w-full flex flex-row items-center justify-between h-14">
        <div className="h-[6.6rem] w-48 flex flex-row justify-center items-center absolute left-0 top-0 bg-destructive custom-shape">
          <img src={logo} alt="logo" className="h-28 mr-8" />
        </div>
        <div className="flex flex-row w-full lg:justify-center justify-end items-center">
          <div className="flex flex-row items-center justify-end w-full h-20 ">
            <ul className="hidden lg:flex  flex-row pr-4 items-center justify-center gap-x-4 lg:gap-x-6 w-full ml-40">
              <Link
                className="text-base font-semibold text-accent-foreground hover:text-accent font-poppins uppercase "
                to="/"
              >
                Home
              </Link>
              <NavigationMenu className="z-50">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent  text-white font-semibold text-base hover:text-accent uppercase">
                      Career
                    </NavigationMenuTrigger>
                    {category === "Athlete" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-background pr-[5px] rounded-lg border-none">
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/career">Mentors</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/career">Events</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start  text-accent-foreground font-semibold   mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/career">Athletes</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}
                    {category === "Doctor" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-background pr-[5px] rounded-lg border-none">
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/career-doc">Appointments</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/career-doc">Athletes</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}

                    {category === "Organisation" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-background pr-[5px] rounded-lg border-none">
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/org">Athletes</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/org">Coaches</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/org">Doctors</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/org">Events</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}
                    {category === "Coach" && (
                      <NavigationMenuContent className="flex p-1 flex-col bg-background pr-[5px] rounded-lg border-none">
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/career-coach">Requests</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                          <Link to="/career-coach">Athletes</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {category === "Athlete" && (
                <div className="flex justify-center items-center gap-6">
                  <NavigationMenu className="z-50">
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent text-white font-semibold text-base hover:text-accent uppercase">
                          Aids
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col bg-background p-1 w-32 rounded-lg">
                          <NavigationMenuLink className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                            <Link to="/aid">Medicians</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="p-2 text-start  text-accent-foreground font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                            <Link to="/aid">Diet plan</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="p-2 text-start  text-accent-foreground font-semibold  mb-[1px] hover:bg-muted hover:rounded-md">
                            <Link to="/aid">Healthcare</Link>
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  <Link className="text-base font-semibold text-white hover:text-accent uppercase">
                    Progress
                  </Link>

                  <NavigationMenu className="z-50">
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent text-white font-semibold text-base hover:text-accent uppercase font-poppins">
                          Finance
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col bg-background p-1 pr-[6px] rounded-lg">
                          <Link
                            to="/finance"
                            className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md"
                          >
                            {" "}
                            <NavigationMenuLink>Account</NavigationMenuLink>
                          </Link>
                          <Link
                            to="/finance"
                            className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md"
                          >
                            {" "}
                            <NavigationMenuLink>Transaction</NavigationMenuLink>
                          </Link>
                          <Link
                            to="/finance"
                            className="p-2 text-start text-accent-foreground  font-semibold  mb-[1px] hover:bg-muted hover:rounded-md"
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
                className="text-base font-semibold text-accent-foreground hover:text-accent font-poppins uppercase  "
                to="/chat"
              >
                Chat
              </Link>

              <Link
                className="text-base font-semibold text-accent-foreground hover:text-accent font-poppins uppercase "
                to="/profile"
              >
                Profile
              </Link>
            </ul>
            <IoNotifications
              className="size-7 fill-accent mr-2"
              onClick={() => navigate("/notifications")}
            />
            <div className="flex flex-row justify-end items-center px-4">
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    navigate("/sign-in");
                  }}
                >
                  <Component
                    glowColor="#22d3ee"
                    className="lg:flex hidden justify-center items-center p-2.5 w-30 rounded-xl mr-4 font-semibold hover:text-blue-200"
                  >
                    Sign out
                  </Component>
                </button>
              ) : (
                <Link to="/sign-in">
                  <Component
                    glowColor="#22d3ee"
                    className="lg:flex hidden justify-center items-center p-2.5 w-30 rounded-xl mr-4 font-semibold hover:text-blue-200"
                  >
                    Sign in
                  </Component>
                </Link>
              )}
              <Sheet className="bg-background lg:hidden">
                <SheetTrigger className=" lg:hidden">
                  <Component
                    glowColor="#22d3ee"
                    className={"hover:text-blue-200 rounded-2xl !px-2.5"}
                  >
                    <RiMenu3Fill className="size-6 fill-white" />
                  </Component>
                </SheetTrigger>
                <SheetContent className="bg-background border-none">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <div className="flex flex-col  w-full">
                      <div className="flex flex-row justify-start items-center gap-4">
                        <img
                          src={logo}
                          alt="Logo"
                          className="h-20 w-auto mb-2"
                        />
                        <div className="flex flex-col justify-center items-start">
                          <h1 className="uppercase font-poppins text-2xl font-bold text-accent">
                            athletehub
                          </h1>
                          <p className="font-inter -mt-1 text-accent-foreground font-medium text-base">
                            Track, Connect, Grow.
                          </p>
                        </div>
                      </div>

                      <ul className="flex flex-col items-start justify-center gap-x-4 lg:gap-x-5 w-full bg-muted rounded-md">
                        <Link
                          className="font-poppins bg-transparent text-white font-semibold text-base w-full hover:no-underline hover:bg-primary p-2.5 uppercase px-6 flex justify-start"
                          to="/"
                        >
                          Home
                        </Link>

                        <Accordion className="z-50 w-full" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="font-poppins bg-transparent text-white font-semibold text-base w-full hover:no-underline hover:bg-primary p-2.5 uppercase px-6">
                              Career
                            </AccordionTrigger>

                            {category === "Athlete" && (
                              <AccordionContent className="flex flex-col p-1 pl-4 bg-base-200">
                                <Link
                                  to="/career"
                                  className="font-poppins text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Mentors
                                </Link>
                                <Link
                                  to="/career"
                                  className="font-poppins text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Events
                                </Link>
                                <Link
                                  to="/career"
                                  className="font-poppins text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Athletes
                                </Link>
                              </AccordionContent>
                            )}

                            {category === "Doctor" && (
                              <AccordionContent className="flex flex-col p-1 pl-4 bg-base-200">
                                <Link
                                  to="/career-doc"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Appointments
                                </Link>
                                <Link
                                  to="/career-doc"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Athletes
                                </Link>
                              </AccordionContent>
                            )}

                            {category === "Organisation" && (
                              <AccordionContent className="flex flex-col p-1 pl-4 bg-base-200">
                                <Link
                                  to="/org"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Athletes
                                </Link>
                                <Link
                                  to="/org"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Coaches
                                </Link>
                                <Link
                                  to="/org"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Doctors
                                </Link>
                                <Link
                                  to="/org"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Events
                                </Link>
                              </AccordionContent>
                            )}

                            {category === "Coach" && (
                              <AccordionContent className="flex flex-col p-1 pl-4 bg-base-200">
                                <Link
                                  to="/career-coach"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
                                  Requests
                                </Link>
                                <Link
                                  to="/career-coach"
                                  className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                >
                                  <PiArrowBendDownRightBold />
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
                                <AccordionTrigger className="font-poppins bg-transparent text-white font-semibold text-base w-full hover:no-underline hover:bg-primary p-2.5 uppercase px-6 ">
                                  Aids
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col p-1 pl-4 bg-base-200">
                                  <Link
                                    to="/aid"
                                    className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                  >
                                    <PiArrowBendDownRightBold />
                                    Medicians
                                  </Link>

                                  <Link
                                    to="/aid"
                                    className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                  >
                                    <PiArrowBendDownRightBold />
                                    Diet plan
                                  </Link>

                                  <Link
                                    to="/aid"
                                    className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                  >
                                    <PiArrowBendDownRightBold />
                                    Healthcare
                                  </Link>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>

                            <Link
                              to="/progress"
                              className="text-base font-semibold text-accent-foreground hover:text-white w-full p-2.5 hover:bg-primary uppercase px-6 flex justify-start"
                            >
                              Progress
                            </Link>

                            <Accordion className="z-50 w-full" collapsible>
                              <AccordionItem value="item-1">
                                <AccordionTrigger className="font-poppins bg-transparent text-white font-semibold text-base w-full hover:no-underline hover:bg-primary p-2 uppercase px-6 ">
                                  Finance
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col p-1 pl-4 bg-base-200">
                                  <Link
                                    to="/finance"
                                    className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                  >
                                    <PiArrowBendDownRightBold /> Account
                                  </Link>
                                  <Link
                                    to="/finance"
                                    className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                  >
                                    <PiArrowBendDownRightBold /> Transaction
                                  </Link>
                                  <Link
                                    to="/finance"
                                    className="text-base text-white/70 hover:text-white font-medium p-1 flex items-center gap-2"
                                  >
                                    <PiArrowBendDownRightBold /> Budget
                                  </Link>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        )}

                        <Link
                          to="/chat"
                          className="bg-transparent text-white font-semibold text-base w-full hover:no-underline hover:bg-primary p-2.5 uppercase px-6 flex justify-start"
                        >
                          Chat
                        </Link>

                        <Link
                          className="font-poppins bg-transparent text-white font-semibold text-base w-full hover:no-underline hover:bg-primary p-2.5 uppercase px-6 flex justify-start"
                          to="/profile"
                        >
                          Profile
                        </Link>
                        {user ? (
                          <button
                            className="bg-transparent text-white font-semibold text-base w-full hover:no-underline hover:bg-primary p-2.5 uppercase px-6 flex justify-start"
                            onClick={() => {
                              logout();
                              navigate("/sign-in");
                            }}
                          >
                            Sign out
                          </button>
                        ) : (
                          <Link className=" flex justify-start" to="/sign-in">
                            Sign in
                          </Link>
                        )}
                      </ul>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
