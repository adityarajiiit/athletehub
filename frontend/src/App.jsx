import Header from "./components/navbar";
import Footer from "./components/footer";
import hero from "/herobg.png";
import { ArrowBigRight, ArrowBigRightDashIcon } from "lucide-react";
import { HoverBorderGradient } from "./shadcnComponents/ui/border-gradient";
import { GiPayMoney } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { SiProgress } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { SiFsecure } from "react-icons/si";
import frame from "/frame.png";
export default function App() {
  const features = [
    {
      title: "Health Monitoring",
      description:
        "Track vital signs, injury history, nutrition, and recovery stats to stay on top of overall wellness.",
      icon: <GiHealthNormal className="size-10 p-2 bg-muted rounded-full" />,
    },
    {
      title: "Financial Management",
      description:
        "Keep a clear view of expenses, sponsorship deals, and income streams — all in one place.",
      icon: <GiPayMoney className="size-10 p-2 bg-muted rounded-full" />,
    },
    {
      title: "Track Progress",
      description:
        "Analyze training data, track milestones, and measure improvements with detailed progress reports.",
      icon: <SiProgress className="size-10 p-2 bg-muted rounded-full" />,
    },
    {
      title: "Smart Connections",
      description:
        "Chat seamlessly with coaches, doctors, and athletes to get instant feedback and guidance.",
      icon: <FaConnectdevelop className="size-10 p-2 bg-muted rounded-full" />,
    },
    {
      title: "Data Insights & Reports",
      description:
        "Generate easy-to-understand reports on health, finance, and training to make informed decisions.",
      icon: <TbReportAnalytics className="size-10 p-2 bg-muted rounded-full" />,
    },
    {
      title: "Secure & Private",
      description:
        "Your personal data is safeguarded with top-level security, ensuring full control and privacy.",
      icon: <SiFsecure className="size-10 p-2 bg-muted rounded-full" />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-background w-full h-full">
      <Header />
      <div className="flex justify-center items-center  relative pt-28 p-2">
        <img
          src={hero}
          alt="hero"
          className="w-screen h-full min-h-[55vh] max-h-[85vh] object-cover relative rounded-xl md:rounded-2xl lg:rounded-4xl"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  w-full  flex flex-col justify-center items-start  mt-12 pl-4 lg:pl-8 xl:pl-12">
          <div className="flex flex-col justify-center items-start xl:max-w-4xl md:max-w-2xl sm:max-w-2xl max-w-sm gap-2">
            <button className="hidden bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px font-semibold leading-6  text-white md:inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-muted/60 py-1 px-4 ring-1 ring-white/10 ">
                <span className="font-poppins md:text-sm lg:text-base font-medium">{` Fuel Your Passion , Unleash Your Play !`}</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-poppins uppercase lg:mt-2">
              Welcome to the <br />
              <span className="text-muted">Sports</span> Hub
            </h1>
            <p className="text-sm sm:text-base md:text-base lg:text-lg  w-4/6 text-accent font-semibold">
              A platform for all the sports enthusiasts to connect.Unlock
              endless opportunities in sports management—connect with experts,
              expand your scope, and take your career to the next level!
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <button className="btn glass  bg-muted text-accent-foreground md:text-base font-poppins hover:bg-muted/70 lg:text-lg">
                Get Started
                <ArrowBigRight className="stroke-current " />
              </button>
              <button className="px-6 py-2.5 rounded-lg relative bg-muted text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20 font-poppins font-medium text-base lg:text-lg">
                  Explore More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-4">
        <HoverBorderGradient
          className={"bg-gray-800 font-poppins font-medium "}
        >
          <span>Key Features</span>
        </HoverBorderGradient>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold font-poppins  lg:pr-6 lg:border-r-2 p-2 border-r-secondary">
              Why us
            </h1>
            <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-3 lg:hidden" />
          </div>
          <p className="max-w-lg md:max-w-2xl text-center lg:text-left">
            We stand out for our commitment to quality, innovation, and
            customer-first solutions. With us, you get reliability and value you
            can trust.
          </p>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-content-center w-fit p-10 mt-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center gap-2 max-w-[30rem] mt-4"
            >
              <img
                src={frame}
                alt={feature.title}
                className="relative min-h-72"
              />
              <div className="absolute flex flex-col justify-center items-center text-center gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 w-full h-full ">
                {feature.icon}
                <p className="text-xl font-semibold text-primary">
                  {feature.title}
                </p>
                <p className="font-medium font-poppins max-w-md text-accent">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
