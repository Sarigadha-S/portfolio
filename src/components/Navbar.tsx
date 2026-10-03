import { useState } from 'react'
const links = [['about','About'],['skills','Skills'],['projects','Projects'],['ai','AI-Assisted Dev'],['experience','Experience'],['education','Education'],['recognition','Awards'],['contact','Contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold text-white">Sari S</a>
        <button className="rounded-md border border-white/20 px-3 py-1.5 text-sm md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        <ul id="menu" className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 border-b border-white/10 bg-ink p-4 md:static md:flex md:w-auto md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-accent md:py-0">{label}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}
