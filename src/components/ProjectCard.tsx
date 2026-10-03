import type { Project } from '../data/content'
import Preview from './Previews'
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-panel p-5 transition-colors hover:border-accent/40">
      <Preview kind={p.kind} />
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
        <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-xs text-accent">{p.badge}</span>
      </div>
      <p className="text-slate-400">{p.desc}</p>
      <div><h4 className="mb-1.5 text-sm font-semibold text-white">My contribution</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">{p.contribution.map(c => <li key={c}>{c}</li>)}</ul></div>
      {p.note && <p className="rounded-lg bg-accent/10 p-3 text-sm text-slate-200">{p.note}</p>}
      {p.tech.length > 0 && <ul className="mt-auto flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map(t => <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">{t}</li>)}</ul>}
    </article>)
}
