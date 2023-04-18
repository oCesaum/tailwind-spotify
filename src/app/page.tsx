import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { Home as ChevronLeft, ChevronLeftIcon, ChevronRightIcon, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1 cursor-pointer'><ChevronLeftIcon /></button>
            <button className='rounded-full bg-black/40 p-1 cursor-pointer'><ChevronRightIcon /></button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/mercury.jpg" width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <strong>Mercury</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75'><Play /></button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/mercury.jpg" width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <strong>Mercury</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75'><Play /></button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/mercury.jpg" width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <strong>Mercury</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75'><Play /></button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/mercury.jpg" width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <strong>Mercury</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75'><Play /></button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/mercury.jpg" width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <strong>Mercury</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75'><Play /></button>
            </a>
            <a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/mercury.jpg" width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <strong>Mercury</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105 transition-transform duration-75'><Play /></button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for César Augusto</h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative'>
              <Image src="/mercury.jpg" className='rounded w-full' width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75'><Play /></button>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 line-clamp-2'>Imagine Dragons, Imagine Dragons and more</span>
            </a>
            <a href='#' className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative'>
              <Image src="/mercury.jpg" className='rounded w-full' width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75'><Play /></button>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 line-clamp-2'>Imagine Dragons, Imagine Dragons and more</span>
            </a>
            <a href='#' className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative'>
              <Image src="/mercury.jpg" className='rounded w-full' width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75'><Play /></button>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 line-clamp-2'>Imagine Dragons, Imagine Dragons and more</span>
            </a>
            <a href='#' className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative'>
              <Image src="/mercury.jpg" className='rounded w-full' width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75'><Play /></button>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 line-clamp-2'>Imagine Dragons, Imagine Dragons and more</span>
            </a>
            <a href='#' className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10 group relative'>
              <Image src="/mercury.jpg" className='rounded w-full' width={88} height={88} alt="Capa do álbum Mercury - acts 1 da banda Imagine Dragons" />
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black invisible group-hover:visible hover:scale-105 absolute right-4 bottom-24 mr-2 mb-2 transition-transform duration-75'><Play /></button>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 line-clamp-2'>Imagine Dragons, Imagine Dragons and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
