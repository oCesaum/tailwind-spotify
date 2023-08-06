import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeftIcon, ChevronRightIcon, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col max-w-[1500px] mx-auto">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto rounded-lg mt-2 bg-white/5 mr-2">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1 cursor-pointer">
              <ChevronLeftIcon />
            </button>
            <button className="rounded-full bg-black/40 p-1 cursor-pointer">
              <ChevronRightIcon />
            </button>
          </div>
          <section className="mt-6">
            <p className="font-semibold text-3xl">Good Afternoon</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors relative">
                <Image
                  src="/eminem-the-eminem-show.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="The Eminem Show"
                />
                <strong>The Eminem Show</strong>
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75 absolute right-0">
                  <Play size={24} />
                </div>
              </div>
              <div className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors relative">
                <Image
                  src="/Hollywood's Bleeding.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Hollywood's Bleeding"
                />
                <strong>
                  Hollywood&apos;s Bleeding
                </strong>
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75 absolute right-0">
                  <Play size={24} />
                </div>
              </div>
              <div className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors relative">
                <Image
                  src="/imagine dragons mercury arc 1 & 2.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Imagine Dragons Mercury arc 1 & 2"
                />
                <strong>Mercury arc 1 & 2</strong>
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75 absolute right-0">
                  <Play size={24} />
                </div>
              </div>
              <div className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors relative">
                <Image
                  src="/indie gaming.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Indie Gaming"
                />
                <strong>Indie Gaming</strong>
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75 absolute right-0">
                  <Play size={24} />
                </div>
              </div>
              <div className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors relative">
                <Image
                  src="/Metro Boomin Presents Spider Man Across The Spider Verse Soundtrack From And Inspired By The Motion Picture.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Metro Boomin Presents: Spider Man Across The Spider-Verse (Soundtrack From And Inspired By The Motion Picture)"
                />
                <strong>
                  Spider Man Across The Spider-Verse
                </strong>
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75 absolute right-0">
                  <Play size={24} />
                </div>
              </div>
              <div className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors relative">
                <Image
                  src="/mix of imagine dragons.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Mix of Imagine Dragons"
                />
                <strong>
                  Mix of Imagine Dragons
                </strong>
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75 absolute right-0">
                  <Play size={24} />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-6">
            <p className="font-semibold text-2xl">Made for César Augusto</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
              <div className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative max-w-[220px] max-h-[300px] w-full h-full">
                <Image
                  src="/top gaming tracks.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Top Gaming Tracks"
                />
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play size={24} />
                </div>
                <strong className="font-semibold">DaTop Gaming Tracks</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Press play, press start.
                </span>
              </div>
              <div className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative max-w-[220px] max-h-[300px] w-full h-full">
                <Image
                  src="/imagine dragons mercury arc 1.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Imagine Dragons Mercury arc 1"
                />
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play size={24} />
                </div>
                <strong className="font-semibold">Mercury arc 1</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Imagine Dragons - Mercury arc 1.
                </span>
              </div>
              <div className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative max-w-[220px] max-h-[300px] w-full h-full">
                <Image
                  src="/eminem.jfif"
                  quality={100}
                  className="rounded-full w-full"
                  width={200}
                  height={200}
                  alt="Eminem"
                />
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play size={24} />
                </div>
                <strong className="font-semibold">Eminem</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Artist
                </span>
              </div>
              <div className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative max-w-[220px] max-h-[300px] w-full h-full">
                <Image
                  src="/imagine dragons mercury arc 1 & 2.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Imagine Dragons Mercury arc 1 & 2"
                />
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play size={24} />
                </div>
                <strong className="font-semibold">Mercury arc 1 & 2</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Imagine Dragons - Mercury arc 1 & 2
                </span>
              </div>
              <div className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative max-w-[220px] max-h-[300px] w-full h-full">
                <Image
                  src="/Metro Boomin Presents Spider Man Across The Spider Verse Soundtrack From And Inspired By The Motion Picture.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Metro Boomin Presents: Spider Man Across The Spider-Verse (Soundtrack From And Inspired By The Motion Picture)"
                />
                <div className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play size={24} />
                </div>
                <strong className="font-semibold">
                  Spider Man Across The Spider-Verse
                </strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Metro Boomin
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
