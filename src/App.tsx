import Navbar from './components/Navbar'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import ExperienceTimeline from './components/ExperienceTimeline'
import { profile, skills, projects, recognition } from './data/content'
const btn = 'rounded-lg px-5 py-3 text-sm font-semibold transition-colors'
export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main id="main">
        <section id="top" className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8">
          <div aria-hidden className="absolute -right-24 top-10 h-96 w-96 animate-drift rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1"><span className="font-display text-4xl font-extrabold text-accent sm:text-6xl">{profile.name}</span><span className="text-slate-400">{profile.location}</span></p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Senior UI Developer</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">Building responsive, accessible and performant web experiences with React.js and modern frontend technologies.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={`${btn} bg-accent text-ink hover:bg-teal-300`}>View Projects</a>
              <a href="#contact" className={`${btn} border border-white/25 text-white hover:border-accent`}>Contact Me</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${btn} border border-white/25 text-white hover:border-accent`}>LinkedIn</a>
            </div>
            <ul className="mt-12 flex flex-wrap gap-3 text-sm">{['6+ Years Experience', 'React.js', 'Responsive UI', 'AI-Assisted Development'].map(h => <li key={h} className="rounded-full border border-white/15 px-4 py-1.5 text-slate-300">{h}</li>)}</ul>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/10 bg-panel p-2">
              {/* Replace public/profile-photo.jpg with your photo. */}
              <img src="profile-photo.jpg" alt="Portrait of Sari S" className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
                onError={e => { e.currentTarget.style.visibility = 'hidden' }} />
            </div>
            <div className="space-y-4 text-slate-300">
              <p>I'm a Senior UI Developer with over 6 years of experience in web and application development and a strong background in frontend work, with React.js as my main strength. I build responsive, accessible and performant interfaces and turn design concepts into production-ready code.</p>
              <p>I work closely with backend developers, designers and other cross-functional Agile teams. I'm interested in modern development tools, including AI-assisted development, and I keep learning as the frontend landscape changes.</p>
              <p>I started with an academic background in Economics and moved into technology through web development education and professional experience.</p>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(g => (
              <div key={g.group} className="rounded-2xl border border-white/10 bg-panel p-5">
                <h3 className="font-display text-lg font-bold text-white">{g.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{g.items.map(s => <li key={s} className="rounded-md bg-white/5 px-3 py-1.5 text-sm transition-transform hover:-translate-y-0.5 hover:text-accent">{s}</li>)}</ul>
              </div>))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects" intro="Professional and company projects. The previews are illustrative concepts I drew in CSS, not screenshots, and no confidential details are shown.">
          <div className="grid gap-6 lg:grid-cols-2">{projects.map(p => <ProjectCard key={p.id} p={p} />)}</div>
        </Section>

        <Section id="ai" title="AI-Assisted Development">
          <p className="max-w-2xl text-slate-300">I use AI-assisted development tools to accelerate coding, debugging, problem solving, documentation, and development workflows while reviewing and adapting the generated output to meet project requirements.</p>
          <ul className="mt-6 flex flex-wrap gap-3">{['Claude AI', 'ChatGPT', 'GitHub Copilot', 'Cursor AI'].map(t => <li key={t} className="rounded-xl border border-accent/30 bg-accent/10 px-5 py-3 font-semibold text-white">{t}</li>)}</ul>
        </Section>

        <Section id="experience" title="Experience"><ExperienceTimeline /></Section>

        <Section id="education" title="Education">
          <div className="grid gap-5 sm:grid-cols-2">
            {[['M.A. Economics', '2015'], ['Higher Diploma in Web Technology', 'C-Tech, 2018']].map(([a, b]) => <div key={a} className="rounded-2xl border border-white/10 bg-panel p-5"><h3 className="font-display text-lg font-bold text-white">{a}</h3><p className="text-slate-400">{b}</p></div>)}
          </div>
          <p className="mt-6 max-w-2xl text-slate-300">Started with an academic background in Economics and transitioned into technology through web development education and professional experience.</p>
        </Section>

        <Section id="recognition" title="Awards & Certifications">
          <div className="grid gap-5 md:grid-cols-3">
            {recognition.map(r => (
              <article key={r.title} className="flex flex-col rounded-2xl border border-accent/25 bg-panel p-5">
                <p className="text-sm text-accent">{r.org}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">{r.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{r.meta}</p>
                <p className="mt-4 text-slate-300">{r.text}</p>
              </article>))}
          </div>
        </Section>

        <Section id="contact" title="Let's Connect" intro="I'm open to opportunities where I can contribute my frontend and UI development experience while continuing to grow with modern web technologies.">
          <ul className="grid gap-4 sm:grid-cols-3">
            {[['Email', profile.email, `mailto:${profile.email}`], ['LinkedIn', profile.linkedinLabel, profile.linkedin], ['Phone', profile.phone, `tel:${profile.phone}`]].map(([l, v, h]) => (
              <li key={l}><a href={h} className="block rounded-2xl border border-white/10 bg-panel p-5 hover:border-accent/50"><span className="text-sm text-slate-400">{l}</span><span className="mt-1 block break-all font-semibold text-white">{v}</span></a></li>))}
          </ul>
        </Section>
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Sari S · Senior UI Developer</footer>
    </>)
}
