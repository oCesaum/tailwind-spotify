import { ArrowRight, ChevronDown, Home as HomeIcon, Library, Plus, Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-96 bg-zinc-950 px-2 pb-2">
      <nav className='bg-white/5 space-y-5 mt-2 p-5 rounded-lg'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><HomeIcon /> Home</a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-300 transition-colors'><Search /> Search</a>
      </nav>

      <nav className='bg-white/5 mt-2 p-5 flex flex-col gap-3 text-sm text-zinc-400 rounded-lg'>
        <div className='flex items-center justify-between'>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-300 transition-colors'><Library /> Your Library</a>
          <div className='flex items-center gap-2'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-300 transition-colors'><Plus /></a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-300 transition-colors'><ArrowRight /></a>
          </div>
        </div>
        <div className='flex items-center gap-2 max-w-full my-2 overflow-hidden'>
          <a className='min-w-fit px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold rounded-full'>Playlists</a>
          <a className='min-w-fit px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold rounded-full'>Podcasts e Programas</a>
          <a className='min-w-fit px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold rounded-full'>Álbuns</a>
          <a className='min-w-fit px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold rounded-full'>Artistas</a>
          <a className='min-w-fit px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold rounded-full'>Baixados</a>
        </div>
        <div className='flex items-center justify-between'>
          <a className='hover:text-zinc-300 transition-colors'><Search className='w-5 h-5' /></a>
          <a className='flex items-center justify-between hover:text-zinc-300 transition-colors'>Recentes <ChevronDown className='w-4 h-4' /></a>
        </div>
      </nav>
    </aside>
  )
}
