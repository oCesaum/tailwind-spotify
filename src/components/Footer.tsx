import {
  Heart,
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3 w-1/5 max-h-20 rounded-lg overflow-hidden">
        <Image
          src="/mix of imagine dragons.jfif"
          className="w-16 h-16"
          width={120}
          height={120}
          alt="Mix of Imagine Dragons"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Mix of Imagine Dragons</strong>
          <span className="text-xs text-zinc-500">Imagine Dragons</span>
        </div>
        <Heart
          size={16}
          className="hover:text-green-600 hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col items-center gap-2 w-3/5">
        <div className="flex items-center gap-6">
          <Shuffle
            size={16}
            className="text-zinc-200 hover:scale-110 transition-all hover:brightness-125"
          />
          <SkipBack
            size={16}
            className="text-zinc-200 hover:scale-110 transition-all hover:brightness-125"
          />
          <div className="w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-white text-black hover:scale-110 transition-all hover:brightness-125">
            <Play size={16} />
          </div>
          <SkipForward
            size={16}
            className="text-zinc-200 hover:scale-110 transition-all hover:brightness-125"
          />
          <Repeat
            size={16}
            className="text-zinc-200 hover:scale-110 transition-all hover:brightness-125"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600 group">
            <div className="h-1 rounded-full w-24 bg-zinc-200 group-hover:bg-green-500 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white hidden group-hover:block hover:scale-110 transition-all hover:brightness-125"></div>
              </div>
            </div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4 w-1/5">
        <Mic2
          size={16}
          className="hover:scale-110 transition-all hover:brightness-125"
        />
        <LayoutList
          size={16}
          className="hover:scale-110 transition-all hover:brightness-125"
        />
        <Laptop2
          size={16}
          className="hover:scale-110 transition-all hover:brightness-125"
        />
        <div className="flex items-center gap-2">
          <Volume
            size={16}
            className="hover:scale-110 transition-all hover:brightness-125"
          />
          <div className="h-1 rounded-full w-24 bg-zinc-600 group">
            <div className="h-1 rounded-full w-10 bg-zinc-200 group-hover:bg-green-500 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-white hidden group-hover:block hover:scale-110 transition-all hover:brightness-125"></div>
              </div>
            </div>
          </div>
        </div>
        <Maximize2
          size={16}
          className="hover:scale-110 transition-all hover:brightness-125"
        />
      </div>
    </footer>
  );
}
