import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeftIcon, ChevronRightIcon, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-zinc-950">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto rounded-lg mt-2 bg-white/5 mr-2">
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
            <div className="grid grid-cols-3 gap-6 mt-4">
              <a
                href="#"
                className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/eminem-the-eminem-show.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <strong>Mercury</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/Hollywood's Bleeding.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <strong>Mercury</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/imagine dragons mercury arc 1 & 2.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <strong>Mercury</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/indie gaming.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <strong>Mercury</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/Metro Boomin Presents Spider Man Across The Spider Verse Soundtrack From And Inspired By The Motion Picture.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <strong>Mercury</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/mix of imagine dragons.jfif"
                  quality={100}
                  width={80}
                  height={80}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <strong>Mercury</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75">
                  <Play />
                </button>
              </a>
            </div>
          </section>
          <section className="mt-6">
            <p className="font-semibold text-2xl">
              Made for César Augusto
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
              <a
                href="#"
                className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative"
              >
                <Image
                  src="/top gaming tracks.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play />
                </button>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Imagine Dragons, Imagine Dragons and more
                </span>
              </a>
              <a
                href="#"
                className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative"
              >
                <Image
                  src="/imagine dragons mercury arc 1.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play />
                </button>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Imagine Dragons, Imagine Dragons and more
                </span>
              </a>
              <a
                href="#"
                className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative"
              >
                <Image
                  src="/eminem.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play />
                </button>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Imagine Dragons, Imagine Dragons and more
                </span>
              </a>
              <a
                href="#"
                className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative"
              >
                <Image
                  src="/imagine dragons mercury arc 1 & 2.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play />
                </button>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Imagine Dragons, Imagine Dragons and more
                </span>
              </a>
              <a
                href="#"
                className="bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative"
              >
                <Image
                  src="/Metro Boomin Presents Spider Man Across The Spider Verse Soundtrack From And Inspired By The Motion Picture.jfif"
                  quality={100}
                  className="rounded w-full"
                  width={200}
                  height={200}
                  alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons"
                />
                <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75">
                  <Play />
                </button>
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400 line-clamp-2">
                  Imagine Dragons, Imagine Dragons and more
                </span>
              </a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
