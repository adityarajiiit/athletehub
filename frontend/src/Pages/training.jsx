import React, { useEffect, useState } from "react";
import Header from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { axiosInstant } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import KineticDotsLoader from "@/components/ui/loading";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaShoePrints, FaFire } from "react-icons/fa";
import { SiGooglefit } from "react-icons/si";
import { useSearchParams } from "react-router-dom";
import IsSubmitting from "@/components/ui/isSubmitting";
const STEP_GOAL = 10000;
const CALORIE_GOAL = 2500;

function Training() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState({ connected: false });
  const [activity, setActivity] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const fetchAll = async () => {
    try {
      const [statusRes, activityRes] = await Promise.all([
        axiosInstant.get("/fitness/status").then((r) => r.data),
        axiosInstant.get("/fitness/activity?days=30").then((r) => r.data),
      ]);
      setStatus(statusRes);
      setActivity(activityRes.activity ?? []);
    } catch (err) {
      console.error("Error fetching fitness data:", err);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (searchParams.get("connected") === "true") {
      toast.success("Google Fit connected!");
      setSearchParams({}, { replace: true });
    }
    const fitError = searchParams.get("fitness_error");
    if (fitError) {
      toast.error("Couldn't connect Google Fit. Please try again.");
      setSearchParams({}, { replace: true });
    }
    fetchAll();
  }, []);

  const handleConnect = async () => {
    try {
      const { data } = await axiosInstant.get("/fitness/connect");
      window.location.href = data.url; // redirect to Google consent screen
    } catch (err) {
      console.error("Error starting Google Fit connect:", err);
      toast.error("Failed to start Google Fit connection");
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      await axiosInstant.post("/fitness/sync");
      toast.success("Activity synced");
      await fetchAll();
    } catch (err) {
      console.error("Error syncing activity:", err);
      toast.error("Sync failed");
    } finally {
      setSyncing(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await axiosInstant.delete("/fitness/disconnect");
      toast.success("Google Fit disconnected");
      setStatus({ connected: false });
    } catch (err) {
      console.error("Error disconnecting:", err);
      toast.error("Failed to disconnect");
    }
  };

  if (pageLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <KineticDotsLoader />
      </div>
    );
  }

  const today = activity[activity.length - 1] ?? { steps: 0, calories: 0 };
  const chartData = activity.map((a) => ({
    date: new Date(a.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    steps: a.steps,
    calories: Math.round(a.calories),
  }));

  return (
    <div>
      <Header></Header>
      <div className="bg-background h-full pt-24 pb-16">
        <div className="flex flex-col items-center px-4">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mt-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold font-poppins xl:pr-6 xl:border-r-2 p-2 border-r-secondary uppercase">
                training
              </h1>
              <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 xl:hidden" />
            </div>
            <p className="max-w-xl md:max-w-2xl text-center xl:text-left">
              Track your daily steps and calorie burn by connecting your Google
              Fit account, and visualize your progress over time.
            </p>
          </div>

          <div className="mt-6 w-full max-w-3xl bg-muted/50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SiGooglefit className="size-8 text-info" />
              <div>
                <p className="font-poppins font-semibold">
                  {status.connected
                    ? "Google Fit connected"
                    : "Google Fit not connected"}
                </p>
                {status.connected && (
                  <p className="text-sm text-accent-foreground">
                    {status.email}
                    {status.lastSyncedAt &&
                      ` · last synced ${new Date(status.lastSyncedAt).toLocaleString()}`}
                  </p>
                )}
              </div>
            </div>
            {status.connected ? (
              <div className="flex gap-2">
                <button
                  className="btn btn-info text-info-content border-0 rounded-full"
                  onClick={handleSync}
                  disabled={syncing}
                >
                  {syncing ? <IsSubmitting /> : "Sync now"}
                </button>
                <button
                  className="btn btn-ghost rounded-full"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                className="btn btn-info text-info-content border-0 rounded-full"
                onClick={handleConnect}
              >
                Connect Google Fit
              </button>
            )}
          </div>

          {!status.connected && (
            <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[20rem] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
              <SiGooglefit className="size-16 opacity-60" />
              <h1 className="text-2xl font-semibold font-poppins text-center uppercase mt-4">
                No data yet
              </h1>
              <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                Connect Google Fit to start tracking your training.
              </h1>
            </div>
          )}

          {status.connected && (
            <>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-muted/50 rounded-xl p-8 w-full max-w-2xl">
                <div className="flex flex-col items-center gap-2">
                  <AnimatedCircularProgressBar
                    max={STEP_GOAL}
                    min={0}
                    value={today.steps}
                    gaugePrimaryColor="hsl(var(--info))"
                    gaugeSecondaryColor="rgba(255,255,255,0.1)"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <FaShoePrints className="text-info" />
                    <span className="font-poppins font-medium">
                      {today.steps.toLocaleString()} /{" "}
                      {STEP_GOAL.toLocaleString()} steps
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <AnimatedCircularProgressBar
                    max={CALORIE_GOAL}
                    min={0}
                    value={Math.round(today.calories)}
                    gaugePrimaryColor="hsl(var(--secondary))"
                    gaugeSecondaryColor="rgba(255,255,255,0.1)"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <FaFire className="text-secondary" />
                    <span className="font-poppins font-medium">
                      {Math.round(today.calories)} / {CALORIE_GOAL} kcal
                    </span>
                  </div>
                </div>
              </div>

              {/* Trend charts */}
              <div className="mt-8 w-full max-w-4xl bg-muted/50 rounded-xl p-6">
                <h2 className="font-poppins font-semibold text-lg mb-4">
                  Steps — last 30 days
                </h2>
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis
                      dataKey="date"
                      fontSize={12}
                      interval="preserveStartEnd"
                    />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="steps"
                      stroke="hsl(var(--info))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 w-full max-w-4xl bg-muted/50 rounded-xl p-6">
                <h2 className="font-poppins font-semibold text-lg mb-4">
                  Calorie burn — last 30 days
                </h2>
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis
                      dataKey="date"
                      fontSize={12}
                      interval="preserveStartEnd"
                    />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Bar
                      dataKey="calories"
                      fill="hsl(var(--secondary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Training;
