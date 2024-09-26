"use client";

import Image from "next/image";
import ReactPlayer from "react-player";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button
            type="button"
            className="relative w-[58px] h-[58px] bg-white rounded-full flex justify-center items-center shadow-2xl shadow-accent"
          >
            <Image
              src="/assets/home/play.svg"
              alt="Play video"
              width={36}
              height={36}
            />
          </button>
          <span className="text-lg font-primary">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url="https://www.youtube.com/watch?v=Er5a7snyQKM"
          muted
        />
      </DialogContent>
    </Dialog>
  );
};
