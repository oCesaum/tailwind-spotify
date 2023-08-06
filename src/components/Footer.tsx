import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 max-h-20 rounded-lg">
        <Image
          src="/mix of imagine dragons.jfif"
          className="w-16 h-16"
          width={120}
          height={120}
          alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Mercury</strong>
          <span className="text-xs text-zinc-500">Imagine Dragons</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600 group">
            <div className="h-1 rounded-full w-24 bg-zinc-200 group-hover:bg-green-500 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white hidden group-hover:block"></div>
              </div>
            </div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
