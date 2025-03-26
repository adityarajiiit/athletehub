import Header from "./constants/navbar";
import Footer from "./constants/footer";
import hero from "./assets/herobg.jpg";
import coach from "./assets/coach.png";
import diagram from "./assets/diagram.png";
import injury from "./assets/injury.png";
import { Link } from "react-router-dom";
import { ArrowBigRight, ArrowBigRightDashIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-black/95 w-full h-full">
      <Header />
      <div className="flex justify-center items-center  relative">
        <img
          src={hero}
          alt="hero"
          className="w-screen h-[90vh] object-cover  mt-24 "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  w-full h-[90vh] flex flex-col justify-center items-start bg-black/40  mt-12 pl-16">
          <p className="font-semibold pl-2">
            Fuel Your Passion , Unleash Your Play !
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 w-4/5 font-poppins">
            Welcome to the <br />
            <span className="text-muted">Sports</span> Hub
          </h1>
          <p className="text-base md:text-lg lg:text-xl w-4/6 text-destructive font-semibold">
            A platform for all the sports enthusiasts to connect.Unlock endless
            opportunities in sports management—connect with experts, expand your
            scope, and take your career to the next level!
          </p>
          <div className="flex flex-row justify-center items-center mt-4">
            <div className="flex justify-center items-center h-16 w-10 bg-orange-600 font-extrabold text-xl rotate-6 z-10">
              1.
            </div>
            <div className="bg-amber-500 p-2 pl-4 rounded-md text-white font-medium relative right-2">
              Connect with Expert Coaches & Players to Take Your Performance to
              the Next Level!
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-4">
            <div className="flex justify-center items-center h-16 w-10 bg-orange-600 font-extrabold text-xl rotate-6 z-10">
              2.
            </div>
            <div className="bg-amber-500 p-2 pl-4 rounded-md text-white font-medium relative right-2">
              Get Expert Medical Assistance & Personalized Diet Plans for a
              Healthier You!
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-4">
            <div className="flex justify-center items-center h-16 w-10 bg-orange-600 font-extrabold text-xl rotate-6 z-10">
              3.
            </div>
            <div className="bg-amber-500 p-2 pl-4 rounded-md text-white font-medium relative right-2">
              Track Your Daily Progress, Get In-Depth Performance Insights, and
              Achieve Your Peak Potential!
            </div>
          </div>

          <div>
            <button className="flex justify-center items-center gap-2 px-6 py-3 font-semibold text-white border-2 border-blue-400 rounded-lg shadow-lg transition-all duration-500 hover:shadow-blue-500/50 shadow-blue-300/40 hover:border-blue-500/80 hover:scale-105 mt-6">
              Get Started
              <ArrowBigRight className="stroke-current text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center w-fit p-3 ">
        <Card className="bg-accent/60 shadow-lg shadow-slate-50/10 p-1 flex flex-col justify-center items-center max-w-96">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl gap-x-4 font-bold">
              {" "}
              <img
                src={diagram}
                alt="graph"
                className="h-12  bg-sky-200/20 p-1 rounded-md"
              />
              <p className="w-fit h-fit pt-2 text-accent-foreground">
                Performance Insights
              </p>
            </CardTitle>
            <CardDescription className="text-destructive text-center">
              Track Your Daily Progress, Get In-Depth Performance Insights, and
              Achieve Your Peak Potential!
            </CardDescription>
          </CardHeader>
          <CardContent className=" bg-blue-600/50 rounded-lg flex justify- items-center h-full">
            <p className="text-white pt-2 text-base ">
              Track your daily progress effortlessly, monitor your step count,
              heart rate, and overall performance with real-time insights.
              Connect with Google Fit to seamlessly sync your data, analyze
              trends, and take your fitness journey to the next level. Achieve
              your peak potential with expert-driven analytics and personalized
              performance tracking.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-orange-600 shadow-lg shadow-slate-50/10 p-1 flex flex-col justify-center items-center max-w-96">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl gap-x-4 font-bold">
              {" "}
              <img src={coach} alt="graph" className="h-12 " />
              <p className="w-fit h-fit pt-2 text-white">Expert guidance</p>
            </CardTitle>
            <CardDescription className="text-destructive text-center">
              Connect with Expert Coaches & Players to Take Your Performance to
              the Next Level!
            </CardDescription>
          </CardHeader>
          <CardContent className=" bg-amber-500 rounded-lg h-full flex justify-center items-center">
            <p className="text-white pt-2 text-base ">
              Connect with top expert coaches and professional players to refine
              your skills, enhance your strategy, and push your performance to
              new heights. Get personalized guidance, insider tips, and
              real-time feedback to accelerate your growth and dominate your
              game. Elevate your performance with expert-driven insights
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#2b6759]/80 shadow-lg shadow-slate-50/10 p-1 flex flex-col justify-center items-center max-w-96">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl gap-x-4 font-bold">
              {" "}
              <img
                src={injury}
                alt="injury"
                className="h-12  bg-sky-100/60 p-1 rounded-md"
              />
              <p className="w-fit h-fit pt-2 text-white">Medical Assistance</p>
            </CardTitle>
            <CardDescription className="text-white text-center">
              Get Expert Medical Assistance & Personalized Diet Plans for a
              Healthier You!
            </CardDescription>
          </CardHeader>
          <CardContent className=" bg-[#B3D8A8]/50 rounded-lg flex justify-center items-center h-full">
            <p className="text-white pt-2 text-base ">
              Access expert medical assistance and personalized diet plans
              tailored to your needs. Track your injuries, manage your diet
              effectively, and discover the best recovery strategies to heal
              faster and perform at your best. Get professional guidance on
              injury prevention, rehabilitation, and optimal nutrition, all
              while staying connected with top medical experts for a healthier,
              stronger you.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}