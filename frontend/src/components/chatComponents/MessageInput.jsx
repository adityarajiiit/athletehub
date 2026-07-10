import React, { useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Image, Send, X } from "lucide-react";
import { useChatStore } from "@/store/useChatStore";
import toast from "react-hot-toast";
function MessageInput() {
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setimage] = useState(null);
  const inputref = useRef(null);
  const { selectedUser, sendMessage } = useChatStore();
  const { register, control, reset } = useForm({
    defaultValues: {
      text: "",
    },
  });
  const text = useWatch({ control, name: "text" });
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "athleteHub_preset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dss7k4wej/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    setimage(data.secure_url);
  };
  const removeImg = () => {
    setImagePreview(null);
    if (inputref.current) inputref.current.value = "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text && !imagePreview) return;
    try {
      const content = text;
      await sendMessage(content, image);
      setImagePreview(null);
      if (inputref.current) inputref.current.value = "";
      reset({ text: "" });
      toast.success("Message sent");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    } finally {
      setImagePreview(null);
      if (inputref.current) inputref.current.value = "";
      reset({ text: "" });
    }
  };
  return (
    <div className="p-4 w-full ">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="preview"
              className="h-20 w-30 object-cover"
            />
            <button
              onClick={removeImg}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300 flex justify-center items-center"
            >
              <X className="size-3"></X>
            </button>
          </div>
        </div>
      )}
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex-1 flex gap-1">
          <input
            type="text"
            placeholder="Type your messages here ..."
            className="input input-neutral w-full input-bordered"
            {...register("text")}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={inputref}
            onChange={handleChange}
          ></input>
          <button
            type="button"
            className={`flex btn btn-circle bg-destructive ${
              imagePreview ? "text-emerald-500" : "text-zinc-400"
            }`}
            onClick={() => inputref.current.click()}
          >
            <Image size={20} />
          </button>
          <button
            type="submit"
            className={`flex btn btn-circle bg-muted`}
            disabled={!text && !imagePreview}
          >
            <Send size={20} className="" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
