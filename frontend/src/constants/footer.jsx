import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Github, Linkedin } from "lucide-react";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col md:flex-row justify-center md:justify-between lg:justify-around items-center  w-full min-h-80 max-h-full gap-x-4 p-4 max-sm:gap-y-10 sm:gap-y-10 bg-[#131d2b] border-t-2 drop-shadow-md border-muted/30 ">
      <div className="flex flex-col xl:flex-row gap-4 justify-around lg:w-3/6">
        <div className="flex flex-col justify-start  relative ">
          <form action="" className="flex flex-col justify-center ">
            <h1 className="text-2xl text-accent-foreground font-bold ">
              GET IN TOUCH
            </h1>
            <div className="flex flex-row justify-start items-start gap-x-2">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-transparent border-b-2 border-destructive outline-none focus:outline-none  focus:ring-0 p-1 text-destructive w-72"
              />
              <button className="p-1 rounded-sm text-destructive border-2 border-secondary">
                Submit
              </button>
            </div>
          </form>
          <div>
            <h1 className="text-2xl text-accent-foreground font-bold mt-4 mb-4">
              Follow Us
            </h1>
            <ul className="flex flex-row gap-4">
              <li>
                <Instagram className="stroke-secondary bg-sky-800/20 p-2 h-10 w-10 rounded-2xl"></Instagram>
              </li>
              <li>
                <Github className="stroke-secondary bg-sky-800/20 p-2 h-10 w-10 rounded-2xl "></Github>
              </li>
              <li>
                <Linkedin className="stroke-secondary bg-sky-800/20 p-2 h-10 w-10 rounded-2xl"></Linkedin>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl text-accent-foreground font-bold mb-2">
              Contact us
            </h1>
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-destructive">Email : _ _</p>
              </li>
              <li>
                <p className="text-destructive">Phone Number : +91 _ _</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 place-content-center">
          <ul className="flex flex-col justify-center gap-y-2">
            <li className="text-secondary font-bold text-lg">Menu</li>
            <li className="text-destructive">Home</li>
            <li className="text-destructive">Services</li>
            <li className="text-destructive">About Us</li>
            <li className="text-destructive">Contact Us</li>
          </ul>
          <ul className="flex flex-col justify-center gap-y-2">
            <li className="text-secondary font-bold text-lg">Support</li>
            <li className="text-destructive">Help & FAQ</li>
            <li className="text-destructive">Terms & Conditiions</li>
            <li className="text-destructive">Instagram</li>
            <li className="text-destructive">Privacy Poilcy</li>
          </ul>
        </div>
        <div>
          <p className="text-center text-accent-foreground mt-5">
            &copy; {year} All Rights Reserved , Sportify Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
