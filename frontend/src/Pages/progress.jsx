import React from "react";
import Header from "@/constants/navbar";
import Footer from "@/constants/footer";
import {
  FlameKindlingIcon,
  FootprintsIcon,
  HeartHandshakeIcon,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartTooltipContent,
} from "@/components/ui/chart";
function Progress() {
  const [stepCount, setStepCount] = React.useState(0);
  const [pulseRate, setPulseRate] = React.useState(0);
  const [calories, setCalories] = React.useState(0);
  const [googleFitData, setGoogleFitData] = React.useState(false);
  const chartConfig = {
    Steps: {
      color: "#F97316",
      label: "Steps",
    },
    Pulse: {
      color: "#38BDF8",
      label: "Pulse",
    },
  };

  const chartData = [
    { name: "Mon", Steps: 3000, Pulse: 70 },
    { name: "Tue", Steps: 4500, Pulse: 72 },
    { name: "Wed", Steps: 5000, Pulse: 75 },
    { name: "Thu", Steps: 5500, Pulse: 74 },
    { name: "Fri", Steps: 6000, Pulse: 78 },
    { name: "Sat", Steps: 7000, Pulse: 80 },
    { name: "Sun", Steps: 4000, Pulse: 76 },
  ];
  return (
    <div>
      <Header></Header>
      <div className="pt-20 flex flex-col bg-black w-full ">
        {googleFitData ? (
          <div>
            <div className="flex flex-col items-start justify-center p-4">
              <h1 className="text-4xl text-white font-bold font-custom">
                PROGRESS
              </h1>
              <hr className="h-1 w-40 bg-orange-500 border-none" />
              <p className="text-gray-400 mt-2">
                Track your progress, stay motivated, and achieve your goals with
                consistency.
              </p>
            </div>
            <div className="flex flex-row items-center justify-start ml-4">
              <div className="flex items-center justify-center gap-x-2">
                <FootprintsIcon className="stroke-secondary h-7 w-7" />
                <p className="text-white text-lg font-semibold">
                  Step Counts : {stepCount}
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-2 ml-6">
                <HeartHandshakeIcon className="stroke-secondary h-7 w-7" />
                <p className="text-white text-lg font-semibold">
                  Pulse Rate : {pulseRate} bpm
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-2 ml-6">
                <FlameKindlingIcon className="stroke-secondary h-7 w-7" />
                <p className="text-white text-lg font-semibold">
                  Calories burned : {calories} kcal
                </p>
              </div>
            </div>
            <div className="min-h-[300px] w-full mt-8 p-2 xl:w-4/6">
              <ChartContainer config={chartConfig}>
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="Steps"
                    fill="var(--color-Steps)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="Pulse"
                    fill="var(--color-Pulse)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
              <p className="text-gray-400 text-sm px-4 text-center mb-4">
                Chart shown above provides the weekly steps count and pulse
                reate within the period.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl text-white font-bold font-custom">
              PROGRESS
            </h1>
            <hr className="h-1 w-40 bg-orange-500 border-none" />
            <p className="text-gray-400 mt-2">
              Connect your Google Fit account to track your progress.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Connect Google Fit
            </button>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Progress;
