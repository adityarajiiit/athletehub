import { axiosInstant } from "@/lib/axiosInstance";
import { create } from "zustand";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_SOCKET_URL;
export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthLoading: true,
  onlineUsers: [],
  socket: null,
  checkAuth: async () => {
    try {
      const response = await axiosInstant.get("/auth/check");
      set({ user: response.data.user });
      get().connectSocket();
    } catch (error) {
      console.error("Error checking auth:", error);
      set({ user: null });
    } finally {
      set({ isAuthLoading: false });
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstant.post("/auth/logout");
      set({ user: null });
      get().disConnectSocket();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  },
  connectSocket: () => {
    const { user } = get();
    if (!user || get().socket?.connected) {
      return;
    }
    const socket = io(BASE_URL, {
      query: {
        userId: user.id,
      },
    });
    socket.connect();
    set({ socket: socket });
    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },
  disConnectSocket: () => {
    const socket = get().socket;
    if (socket?.connected) {
      socket.disconnect();
      set({ socket: null, onlineUsers: [] });
    }
  },
}));
