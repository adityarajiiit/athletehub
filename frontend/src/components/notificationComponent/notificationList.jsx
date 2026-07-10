import React, { useState } from "react";
import { NotificationCard } from "./notificationCard";
import { useNotificationStore } from "@/store/useNotificationStore";
export default function NotificationList({ notifications }) {
  const { updateNotification } = useNotificationStore();

  const handleMarkAsRead = (id) => {
    updateNotification(id);
  };
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="w-full bg-background/80 rounded-xl border border-primary/50 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-primary">
        <h3 className="text-base font-medium text-accent font-poppins">
          Notifications
          {unreadCount > 0 && (
            <span className="ml-2 text-xs font-medium text-accent bg-primary px-1.5 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </h3>
      </div>

      <div>
        {notifications.map((n) => (
          <NotificationCard
            key={n.id}
            notification={n}
            onMarkAsRead={() => handleMarkAsRead(n?.id)}
          />
        ))}
      </div>
    </div>
  );
}
