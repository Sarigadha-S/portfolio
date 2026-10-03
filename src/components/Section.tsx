import type { ReactNode } from 'react'
import Reveal from './Reveal'
export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <h2 id={`${id}-h`} className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-slate-400">{intro}</p>}
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  )
}
