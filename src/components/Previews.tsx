import type { ReactNode } from 'react'
import type { Project } from '../data/content'
const L = ({ w, c = 'bg-white/15' }: { w: string; c?: string }) => <i className={`block h-2 rounded ${c}`} style={{ width: w }} />
const Bars = ({ h, c = 'bg-accent' }: { h: number[]; c?: string }) => (
  <div className="flex h-14 items-end gap-1">{h.map((x, i) => <i key={i} style={{ height: `${x}%`, animationDelay: `${i * 60}ms` }} className={`w-full origin-bottom animate-rise rounded-sm ${c}`} />)}</div>)
const T = ({ t, children, cls = '' }: { t: string; children?: ReactNode; cls?: string }) => (
  <div className={`rounded-lg bg-white/5 p-2.5 ${cls}`}><p className="mb-2 text-[10px] text-slate-400">{t}</p>{children}</div>)
const Pill = ({ children, c = 'bg-accent/20 text-accent' }: { children: ReactNode; c?: string }) => <span className={`rounded-full px-2 py-0.5 text-[9px] ${c}`}>{children}</span>
const Line = () => (<svg viewBox="0 0 100 30" className="h-14 w-full" preserveAspectRatio="none"><path d="M0 24 C15 8 25 28 40 16 S70 4 100 12" fill="none" stroke="#2dd4bf" strokeWidth="2" /></svg>)
const Row = ({ a, b }: { a: string; b?: ReactNode }) => <div className="flex items-center justify-between gap-3 border-t border-white/10 py-1.5"><L w={a} />{b}</div>

function Body({ kind }: { kind: Project['kind'] }) {
  switch (kind) {
    case 'mccord': return (<div className="grid grid-cols-3 gap-2">
      <T t="Water flow"><Line /></T><T t="Consumption"><Bars h={[40,60,45,80,55,70]} /></T>
      <T t="Leakage alert"><Pill c="bg-amber-400/20 text-amber-300">Check zone</Pill><div className="mt-2 space-y-1.5"><L w="80%" /><L w="55%" /></div></T>
      <T t="Monitoring" cls="col-span-3"><Bars h={[30,45,35,60,50,75,55,65,40,70,60,85]} c="bg-sky-400" /></T></div>)
    case 'sales': return (<div className="space-y-2"><div className="grid grid-cols-3 gap-2">
      <T t="Sales overview"><Line /></T><T t="Returns"><Bars h={[20,35,25,15,30]} c="bg-rose-400" /></T><T t="Performance"><Bars h={[50,65,80,70,90]} /></T></div>
      <T t="Product / sales"><Row a="40%" b={<L w="18%" c="bg-accent/50" />} /><Row a="55%" b={<L w="12%" c="bg-accent/50" />} /><Row a="35%" b={<L w="22%" c="bg-accent/50" />} /></T></div>)
    case 'vssc': return (<div className="space-y-2">
      <div className="flex items-center gap-1.5">{['Request','Review','Approve','Issue'].map((s, i) => <div key={s} className="flex flex-1 items-center gap-1.5"><span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[9px] ${i < 2 ? 'bg-accent text-ink' : 'bg-white/10'}`}>{i + 1}</span><span className="hidden text-[9px] text-slate-400 sm:block">{s}</span><i className="h-px flex-1 bg-white/15" /></div>)}</div>
      <div className="grid grid-cols-2 gap-2"><T t="Material purchase"><div className="space-y-1.5"><L w="75%" /><L w="50%" /></div></T><T t="Permission"><Pill>Approved</Pill> <Pill c="bg-amber-400/20 text-amber-300">Pending</Pill></T></div>
      <T t="Requests"><Row a="45%" b={<Pill>Approved</Pill>} /><Row a="60%" b={<Pill c="bg-amber-400/20 text-amber-300">Pending</Pill>} /></T></div>)
    case 'wgs': return (<div className="space-y-2"><div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"><L w="22%" c="bg-accent/60" /><div className="flex gap-2"><L w="24px" /><L w="24px" /><L w="24px" /></div></div>
      <div className="rounded-lg bg-gradient-to-br from-accent/30 to-indigo-500/30 p-4"><div className="space-y-2"><L w="60%" c="bg-white/60" /><L w="40%" c="bg-white/30" /><Pill>Event details</Pill></div></div>
      <div className="grid grid-cols-3 gap-2"><T t="Event info"><L w="80%" /></T><T t="Prize"><L w="60%" c="bg-accent/50" /></T><T t="Award"><L w="70%" c="bg-accent/50" /></T></div></div>)
    case 'erp': return (<div className="grid grid-cols-[28%_1fr] gap-2"><div className="space-y-2 rounded-lg bg-white/5 p-2"><L w="100%" c="bg-accent/50" /><L w="70%" /><L w="85%" /><L w="60%" /></div>
      <div className="space-y-2"><T t="Projects">{[70, 45, 90].map((p, i) => <div key={i} className="mb-1.5 flex items-center gap-2"><L w="30%" /><div className="h-1.5 flex-1 rounded bg-white/10"><i className="block h-full rounded bg-accent" style={{ width: `${p}%` }} /></div></div>)}</T>
      <div className="grid grid-cols-3 gap-2">{['To do', 'In progress', 'Done'].map(c => <T key={c} t={c}><div className="space-y-1.5"><L w="90%" /><L w="60%" /></div></T>)}</div></div></div>)
    default: return (<div className="space-y-2"><div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"><L w="20%" c="bg-accent/60" /><div className="flex gap-2"><L w="24px" /><L w="24px" /></div></div>
      <div className="space-y-2 rounded-lg bg-white/5 p-4"><L w="55%" c="bg-white/60" /><L w="35%" /></div>
      <div className="grid grid-cols-3 gap-2">{[0, 1, 2].map(i => <T key={i} t="Section"><L w="80%" /></T>)}</div></div>)
  }
}
export default function Preview({ kind }: { kind: Project['kind'] }) {
  return (
    <div aria-hidden="true" className="rounded-xl border border-white/10 bg-[#0c1426] p-3">
      <div className="mb-3 flex items-center justify-between"><span className="flex gap-1"><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /></span><span className="text-[10px] text-slate-500">Illustrative concept, not a screenshot</span></div>
      <Body kind={kind} />
    </div>)
}
