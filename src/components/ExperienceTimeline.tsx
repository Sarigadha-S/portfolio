import { useState } from 'react'
import { experience } from '../data/content'
export default function ExperienceTimeline() {
  const [i, setI] = useState(experience.length - 1)
  const e = experience[i]
  return (
    <div className="grid gap-8 md:grid-cols-[260px_1fr]">
      <div role="tablist" aria-label="Career timeline" className="flex gap-2 overflow-x-auto md:flex-col md:border-l md:border-white/10 md:pl-0">
        {experience.map((x, k) => (
          <button key={x.years} role="tab" aria-selected={k === i} onClick={() => setI(k)}
            className={`shrink-0 rounded-md px-4 py-2.5 text-left text-sm transition-colors md:rounded-none md:border-l-2 md:-ml-px ${k === i ? 'border-accent bg-accent/10 text-white' : 'border-transparent text-slate-400 hover:text-white'}`}>
            <span className="block font-semibold">{x.years}</span><span className="block text-xs">{x.company}</span></button>))}
      </div>
      <div role="tabpanel" key={i} className="animate-fadeIn rounded-2xl border border-white/10 bg-panel p-6">
        <h3 className="font-display text-2xl font-bold text-white">{e.role}</h3>
        <p className="mt-1 text-accent">{e.company}</p><p className="text-sm text-slate-400">{e.period}</p>
        <p className="mt-4 text-slate-300">{e.text}</p>
      </div>
    </div>)
}
