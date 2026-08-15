import React, { useState, useEffect } from "react";
import NotificationList from "@/components/notificationComponent/notificationList";
import Header from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useNotificationStore } from "@/store/useNotificationStore";
import no_data from "/no-data.png";
import KineticDotsLoader from "@/components/ui/loading";
function Notification() {
  const {
    loading,
    notifications,
    fetchNotifications,
    subscribeToNotifications,
    unSubscribeFromNotifications,
  } = useNotificationStore();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await fetchNotifications();
        subscribeToNotifications();
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      cancelled = true;
      unSubscribeFromNotifications();
    };
  }, [
    fetchNotifications,
    subscribeToNotifications,
    unSubscribeFromNotifications,
  ]);
  console.log("notifications", notifications);
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center h-screen">
        <KineticDotsLoader />
      </div>
    );
  }
  return (
    <div className="min-h-screen h-full bg-base-200 w-full">
      <Header></Header>
      <div className="pt-32 p-4">
        <NotificationList notifications={notifications} />
        {isloading ||
          (notifications.length == 0 && (
            <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl w-full h-[35rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
              <img src={no_data} alt="no data" className="size-32" />

              <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                No data found
              </h1>
              <h3 className="text-base italic text-accent-foreground font-base text-center mt-2">
                Currently no notification...
              </h3>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Notification;
