import { create } from "zustand";
import { axiosInstant } from "@/lib/axiosInstance";
import { useAuthStore } from "./useAuthStore";
export const useChatStore = create((set, get) => ({
  users: [],
  messages: [],
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  getUsers: async () => {
    try {
      const response = await axiosInstant.get("/message/user");
      set({ users: response.data });
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  },
  getMessage: async () => {
    const { selectedUser } = get();
    if (!selectedUser) return null;
    try {
      const response = await axiosInstant.get(
        `/message/get?userId2=${selectedUser.id}`,
      );
      set({ messages: response.data });
      return response.data;
    } catch (error) {
      console.error("Error fetching messages:", error);
      return null;
    }
  },
  sendMessage: async (content, image) => {
    try {
      const { selectedUser } = get();
      const response = await axiosInstant.post("/message/send", {
        content,
        recieverId: selectedUser.id,
        image,
      });
      set((state) => ({
        messages: [...state.messages, response.data],
      }));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  },
  subscribeToMessages: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;
    const socket = useAuthStore.getState().socket;
    socket.on("newMessage", (newMessage) => {
      set({
        messages: [...get().messages, newMessage],
      });
    });
  },
  unSubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },
}));
