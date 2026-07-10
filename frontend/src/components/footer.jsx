import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import logo from "/logo.png";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col  justify-center  items-center  w-full bg-destructive p-6 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_auto_auto_auto] gap-6 w-full ">
        <div>
          <div className="flex flex-row justify-start items-center gap-4">
            <img src={logo} alt="Logo" className="h-16 w-auto mb-2" />
            <div className="flex flex-col justify-center items-start">
              <h1 className="uppercase text-xl font-bold">athletehub</h1>
              <p className="font-inter -mt-1 text-accent">
                Track, Connect, Grow.
              </p>
            </div>
          </div>

          <p className="max-w-xs font-poppins text-accent mb-2 font-medium">
            Sportify is your ultimate destination for all things sports. We
            bring you the latest news, scores, and updates from the world of
            sports.
          </p>
        </div>
        <form action="" className="flex flex-col justify-center ">
          <h1 className="text-2xl text-primary font-bold my-2 ">Subscribe</h1>
          <p className="max-w-xs font-poppins text-accent mb-2 font-medium">
            Enter your email and get latest updates and offers subscribe us.
          </p>
          <div className="flex flex-col justify-start items-start gap-y-2 shrink">
            <div className="join max-w-xs">
              <input
                className="input input-bordered join-item max-w-52 bg-muted text-accent placeholder:text-accent-foreground"
                placeholder="Email"
              />
              <button className="btn btn-info join-item rounded-r-full font-inter">
                Subscribe
              </button>
            </div>
          </div>
        </form>
        <div>
          <h1 className="text-2xl text-primary font-bold mb-2">Contact us</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <p className="text-accent">Email : _ _</p>
            </li>
            <li>
              <p className="text-accent">Phone Number : +91 _ _</p>
            </li>
          </ul>
          <div>
            <h1 className="text-xl text-primary font-bold mt-2 mb-2">
              Follow Us
            </h1>
            <ul className="flex flex-row gap-2">
              <button className="inline-flex  animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-accent-foreground transition-colors focus:outline-none p-3">
                <BsInstagram className="size-6"></BsInstagram>
              </button>
              <button className="inline-flex  animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-accent-foreground transition-colors focus:outline-none p-3">
                <IoLogoGithub className="size-6"></IoLogoGithub>
              </button>
              <button className="inline-flex  animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-accent-foreground transition-colors focus:outline-none p-3">
                <FaLinkedinIn className="size-6"></FaLinkedinIn>
              </button>
            </ul>
          </div>
        </div>
        <ul className="flex flex-col justify-center gap-y-2 w-fit">
          <li className="text-primary font-bold text-2xl">Support</li>
          <li className="text-accent">Help & FAQ</li>
          <li className="text-accent">Terms & Conditiions</li>
          <li className="text-accent">Instagram</li>
          <li className="text-accent">Privacy Poilcy</li>
        </ul>
      </div>

      <p className="text-center text-accent mt-10">
        &copy; {year} All Rights Reserved , AthleteHub Inc.
      </p>
    </footer>
  );
}

export default Footer;
