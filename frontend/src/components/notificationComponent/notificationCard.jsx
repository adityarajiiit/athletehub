import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";
import { FaCheck, FaClipboard } from "react-icons/fa";

const TYPE_META = {
  Appointment: {
    icon: MdCalendarToday,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  Message: {
    icon: IoIosMail,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  Transaction: {
    icon: FaReceipt,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
  },
  Other: {
    icon: MdNotificationsActive,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
};

function timeAgo(dateInput) {
  const date = new Date(dateInput);
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function formatTime(startTime, endTime) {
  const fmt = (d) =>
    new Date(d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  if (!startTime) return null;
  return endTime ? `${fmt(startTime)} - ${fmt(endTime)}` : fmt(startTime);
}

function formatDate(date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function NotificationCard({ notification, onMarkAsRead }) {
  const meta = TYPE_META[notification.type] || TYPE_META.Other;
  const Icon = meta.icon;
  const appointment = notification?.note?.appointment;
  const note = notification?.note;

  return (
    <div
      className={`flex gap-3 px-5 py-4 border-b border-muted last:border-b-0 ${
        notification.isRead ? "bg-background" : "bg-primary/50"
      }`}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${meta.iconBg}`}
      >
        <Icon size={18} className={meta.iconColor} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-accent truncate font-poppins">
              {notification.title}
            </p>
            {!notification.isRead && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            )}
          </div>

          {!notification.isRead && (
            <button
              onClick={() => onMarkAsRead(notification.id)}
              className="flex items-center gap-1 text-xs font-medium btn btn-info btn-sm font-poppins  flex-shrink-0"
            >
              <FaCheck size={14} />
              <span className="hidden md:block">Mark as read</span>
            </button>
          )}
        </div>

        <p className="text-sm text-foreground font-poppins leading-relaxed">
          {notification.message}
        </p>

        {appointment && (
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-background bg-accent border border-accent rounded-md px-3 py-2">
            <span className="flex items-center gap-1">
              <MdCalendarToday size={14} className="text-gray-400" />
              {formatDate(appointment.date)}
            </span>
            {formatTime(appointment.startTime, appointment.endTime) && (
              <span>
                {formatTime(appointment.startTime, appointment.endTime)}
              </span>
            )}

            {appointment.status && (
              <span
                className={`capitalize px-1.5 py-0.5 rounded ${
                  appointment.status === "accepted"
                    ? "bg-green-100 text-green-700"
                    : appointment.status === "declined"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                }`}
              >
                {appointment.status}
              </span>
            )}
          </div>
        )}

        {note && (
          <div className="mt-2 flex gap-2 text-xs text-gray-600 bg-amber-50 border border-amber-100 rounded-md px-3 py-2">
            <FaClipboard
              size={14}
              className="text-amber-600 flex-shrink-0 mt-0.5"
            />
            <div className="space-y-0.5">
              {note.assessment && (
                <p>
                  <span className="font-medium text-gray-700">
                    Assessment:{" "}
                  </span>
                  {note.assessment}
                </p>
              )}
              {note.plan && (
                <p>
                  <span className="font-medium text-gray-700">Plan: </span>
                  {note.plan}
                </p>
              )}
              {note.subjective && (
                <p>
                  <span className="font-medium text-gray-700">
                    subjective:{" "}
                  </span>
                  {note.subjective}
                </p>
              )}
              {note.task && (
                <p>
                  <span className="font-medium text-gray-700">task: </span>
                  {note.task}
                </p>
              )}
            </div>
          </div>
        )}

        <p className="text-xs text-accent mt-2">
          {timeAgo(notification.createdAt)}
        </p>
      </div>
    </div>
  );
}
