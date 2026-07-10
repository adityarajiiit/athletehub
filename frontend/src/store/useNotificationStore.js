import { create } from "zustand";
import { axiosInstant } from "@/lib/axiosInstance";
import { useAuthStore } from "./useAuthStore";

export const useNotificationStore = create((set, get) => ({
  loading: false,
  notifications: [],
  fetchNotifications: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstant.get("/notifications");
      set({ notifications: response.data });
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      set({ loading: false });
    }
  },
  updateNotification: async (notificationId) => {
    try {
      const response = await axiosInstant.patch(
        `/notifications/${notificationId}`,
      );
      set((state) => ({
        notifications: state.notifications.map((notification) =>
          notification.id === notificationId ? response.data : notification,
        ),
      }));
    } catch (error) {
      console.error("Error updating notification:", error);
    }
  },
  subscribeToNotifications: () => {
    const socket = useAuthStore.getState().socket;
    if (!socket) return;
    socket.on("notification", (newNotification) => {
      set((state) => ({
        notifications: [newNotification, ...state.notifications],
      }));
    });
  },
  unSubscribeFromNotifications: () => {
    const socket = useAuthStore.getState().socket;
    if (!socket) return;
    socket.off("notification");
  },
}));
