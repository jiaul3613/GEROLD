import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  ChevronRight,
  Menu,
  Play,
  Sparkles,
  Star,
} from "lucide-react";
import { FormEvent, useState } from "react";

import aboutPortrait from "@/assets/swort-about-portrait.jpg";
import blogEditing from "@/assets/blog-editing.jpg";
import projectChroma from "@/assets/project-chroma.jpg";
import projectNocturne from "@/assets/project-nocturne.jpg";
import projectVelocity from "@/assets/project-velocity.jpg";
import heroPortrait from "@/assets/swort-hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SWORT — Motion Designer & Video Editor" },
      {
        name: "description",
        content: "SWORT creates cinematic edits, motion design, visual identities, and digital experiences for ambitious global brands.",
      },
      { property: "og:title", content: "SWORT — Motion Designer & Video Editor" },
      {
        property: "og:description",
        content: "Cinematic motion, editorial video, and digital experiences crafted frame by frame.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Services", "Work", "Contact"];

const skills = [
  { code: "Ae", title: "After Effects", level: "96%", copy: "Motion graphics, compositing, and kinetic systems." },
  { code: "Pr", title: "Premiere Pro", level: "94%", copy: "Narrative editing, pacing, and polished delivery." },
  { code: "Da", title: "DaVinci Resolve", level: "91%", copy: "Cinematic color, finishing, and visual continuity." },
  { code: "C4", title: "Cinema 4D", level: "88%", copy: "Dimensional worlds, products, and fluid simulations." },
];

const services = [
  { number: "01", title: "Web Development", copy: "Responsive portfolio and campaign experiences built for clarity, speed, and conversion." },
  { number: "02", title: "UI/UX Design", copy: "Distinct digital systems that translate brand energy into frictionless interactions." },
  { number: "03", title: "Content Editing", copy: "Story-led edits, motion graphics, sound, and finishing that hold attention." },
];

const projects = [
  { title: "CHROMA / 01", category: "Motion Identity", image: projectChroma, alt: "Chrome portrait wrapped in purple glass ribbons" },
  { title: "VELOCITY / 02", category: "Product Film", image: projectVelocity, alt: "Black performance shoe in magenta particles" },
  { title: "NOCTURNE / 03", category: "Music Visual", image: projectNocturne, alt: "Dancer moving through violet translucent fabric" },
];

const posts = [
  { date: "12 AUG 2026", read: "6 MIN", title: "Editing for emotion, not just rhythm", image: blogEditing },
  { date: "04 AUG 2026", read: "8 MIN", title: "Building a visual language in violet", image: projectChroma },
  { date: "28 JUL 2026", read: "5 MIN", title: "Why every frame needs intention", image: projectNocturne },
];

function Logo() {
  return (
    <a href="#home" aria-label="SWORT home" className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
      <span className="grid size-7 place-items-center border border-primary/40 bg-primary/10">
        <Asterisk className="size-4 text-primary" />
      </span>
      <span className="tracking-[0.16em]">SWORT</span>
    </a>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-7 bg-primary" /> {eyebrow}
      </div>
      <h2 className="max-w-3xl font-display text-4xl leading-[0.95] text-foreground sm:text-5xl md:text-7xl">
        {children}
      </h2>
    </div>
  );
}

function Index() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <Logo />
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground">
                {item}
              </a>
            ))}
            <Button asChild className="h-9 rounded-full border border-primary/60 bg-gradient-neon px-5 text-xs text-primary-foreground shadow-neon hover:opacity-90">
              <a href="mailto:hello@swort.studio">Hire me <ArrowUpRight /></a>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation" className="border-border bg-card md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-border bg-background text-foreground">
              <SheetTitle className="font-display text-3xl">SWORT</SheetTitle>
              <nav className="mt-12 flex flex-col gap-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item}>
                    <a href={`#${item.toLowerCase()}`} className="font-display text-4xl text-foreground hover:text-primary">{item}</a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section id="home" className="hero-grid relative min-h-[820px] overflow-hidden border-b border-border pt-24 md:min-h-[900px]">
          <div className="hero-aura" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="relative z-10 pt-9 md:pt-16">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-muted-foreground">Independent creative studio · Available worldwide</p>
              <h1 className="font-display text-[clamp(4.2rem,13vw,11.2rem)] leading-[0.72] text-foreground">
                HELLO <span className="orb-word" aria-hidden="true" /> MOTION
              </h1>
            </div>

            <div className="relative mx-auto mt-12 h-[470px] max-w-5xl md:mt-2 md:h-[530px]">
              <div className="absolute left-1/2 top-0 h-[455px] w-[290px] -translate-x-1/2 overflow-hidden rounded-t-[150px] border border-primary/35 bg-card shadow-portrait sm:w-[330px] md:h-[510px] md:w-[370px] md:rounded-t-[190px]">
                <img src={heroPortrait} width={960} height={1280} alt="SWORT motion designer in a violet-lit studio" className="h-full w-full object-cover object-top" fetchPriority="high" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="glass-panel absolute left-0 top-16 hidden w-52 p-4 lg:block">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Now creating</p>
                <p className="mt-2 font-display text-2xl">Stories in motion.</p>
              </div>
              <div className="glass-panel absolute right-1 top-20 hidden w-44 p-5 text-right sm:block md:right-10">
                <p className="font-display text-5xl text-primary">12+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Years of craft</p>
              </div>
              <div className="glass-panel absolute bottom-16 left-3 flex items-center gap-3 px-4 py-3 sm:left-[8%]">
                <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-2 opacity-70" /><span className="relative size-2 rounded-full bg-chart-2" /></span>
                <span className="text-[10px] uppercase tracking-[0.18em]">Open for projects</span>
              </div>
              <a href="#work" className="absolute bottom-12 right-3 grid size-16 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground sm:right-[8%]" aria-label="View selected work">
                <ArrowDownRight className="size-6" />
              </a>
            </div>
          </div>
        </section>

        <div className="marquee-wrap" aria-label="Creative tools">
          <div className="marquee-track">
            {[...Array(2)].flatMap((_, cycle) => ["AFTER EFFECTS", "PREMIERE PRO", "DAVINCI RESOLVE", "CINEMA 4D", "FIGMA", "BLENDER"].map((tool) => (
              <span key={`${cycle}-${tool}`}><Sparkles className="size-3 text-primary" /> {tool}</span>
            )))}
          </div>
        </div>

        <section className="section-shell" aria-labelledby="skills-title">
          <SectionHeading eyebrow="Mastering the tools"><span id="skills-title">MY VIDEO EDITING SKILLS</span></SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <article key={skill.title} className="glass-card group p-5">
                <div className="mb-10 flex items-start justify-between">
                  <div className="grid size-11 place-items-center border border-primary/30 bg-primary/10 font-semibold text-primary">{skill.code}</div>
                  <span className="text-xs text-muted-foreground">{skill.level}</span>
                </div>
                <h3 className="text-base font-semibold">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.copy}</p>
                <div className="mt-5 h-px bg-border"><div className="h-px bg-gradient-neon transition-all duration-700 group-hover:w-full" style={{ width: skill.level }} /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-band border-y border-border">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 border border-primary/20" />
              <img src={aboutPortrait} width={960} height={1200} loading="lazy" alt="SWORT creative director looking toward studio lights" className="relative aspect-[4/5] w-full object-cover grayscale-[15%]" />
              <div className="absolute -bottom-5 -right-5 border border-primary/30 bg-background px-5 py-4 text-xs uppercase tracking-[0.15em] text-primary">Creative since 2014</div>
            </div>
            <div>
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">About SWORT</div>
              <h2 className="font-display text-4xl leading-[0.96] sm:text-6xl lg:text-7xl">PASSIONATE DIGITAL CREATOR FOCUSED ON DRIVING RESULTS.</h2>
              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">I blend cinematic editing, motion design, and digital strategy to turn ambitious ideas into clear, memorable visual stories. Every cut, transition, and interaction has a reason.</p>
              <div className="mt-10 grid grid-cols-3 border-y border-border py-7">
                {[['30+', 'Global clients'], ['100+', 'Projects made'], ['300+', 'Stories shaped']].map(([value, label]) => (
                  <div key={label} className="border-r border-border px-3 first:pl-0 last:border-0">
                    <p className="font-display text-4xl text-primary sm:text-5xl">{value}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-8 h-11 rounded-full border-primary/30 bg-primary/5 px-6 hover:bg-primary hover:text-primary-foreground">
                <a href="mailto:hello@swort.studio">Let’s create <ArrowUpRight /></a>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell">
          <SectionHeading eyebrow="What I bring"><span>HERE’S HOW I CAN HELP!</span></SectionHeading>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="service-card group">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-primary/70">{service.number}</span>
                  <span className="grid size-11 place-items-center rounded-full border border-border transition group-hover:rotate-45 group-hover:border-primary group-hover:text-primary"><ArrowUpRight /></span>
                </div>
                <h3 className="mt-16 font-display text-3xl">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-band border-y border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
            <SectionHeading eyebrow="Selected collaborations"><span>RECENT WORK FOR MY CLIENTS</span></SectionHeading>
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project, index) => (
                <article key={project.title} className={`project-card group ${index === 1 ? "md:translate-y-10" : ""}`}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} width={1280} height={800} loading="lazy" alt={project.alt} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <button type="button" aria-label={`Play ${project.title}`} className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-foreground/30 bg-background/50 text-foreground backdrop-blur-md transition group-hover:scale-110 group-hover:border-primary group-hover:text-primary">
                      <Play className="ml-0.5 size-5 fill-current" />
                    </button>
                  </div>
                  <div className="flex items-end justify-between border-t border-border p-5">
                    <div><p className="text-[10px] uppercase tracking-[0.18em] text-primary">{project.category}</p><h3 className="mt-2 text-sm font-semibold">{project.title}</h3></div>
                    <ArrowUpRight className="size-5 text-muted-foreground" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="ribbon"><div className="ribbon-track"><span>CREATIVE DIRECTION · MOTION DESIGN · VIDEO EDITING · DIGITAL EXPERIENCES ·</span><span>CREATIVE DIRECTION · MOTION DESIGN · VIDEO EDITING · DIGITAL EXPERIENCES ·</span></div></div>

        <section className="section-shell">
          <SectionHeading eyebrow="Experience & recognition"><span>MY BACKGROUND AND ACHIEVEMENTS</span></SectionHeading>
          <div className="mx-auto max-w-4xl border-t border-border">
            {[
              ["2024 — NOW", "Independent Creative Director", "Leading motion, edit, and digital projects for studios and global brands."],
              ["2021 — 2024", "Senior Motion Designer", "Built campaign systems and launch films across culture, fashion, and technology."],
              ["2018 — 2021", "Film Editor", "Cut documentaries, branded films, music visuals, and social-first stories."],
              ["2014 — 2018", "Visual Design Foundation", "Developed a rigorous approach to typography, composition, color, and narrative."],
            ].map(([year, role, detail], i) => (
              <article key={year} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[150px_1fr_auto] sm:items-center">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-primary">{year}</p>
                <div><h3 className="font-display text-2xl sm:text-3xl">{role}</h3><p className="mt-2 max-w-xl text-sm text-muted-foreground">{detail}</p></div>
                <span className="font-display text-3xl text-muted-foreground/30">0{i + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band border-y border-border">
          <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
            <p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-primary">Let’s hear from dear clients</p>
            <div className="flex justify-center gap-1 text-primary" aria-label="5 out of 5 stars">{[0,1,2,3,4].map((n) => <Star key={n} className="size-4 fill-current" />)}</div>
            <blockquote className="mt-8 font-display text-3xl leading-tight sm:text-5xl lg:text-6xl">“SWORT found the emotional center of our story and made every frame feel inevitable. The final film was sharper, stranger, and more alive than we imagined.”</blockquote>
            <div className="mt-10"><p className="text-sm font-semibold">MARA VOSS</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">Creative Director, Norte Studio</p></div>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading eyebrow="Ideas & process"><span>READ MY RECENT BLOG</span></SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="group border border-border bg-card/40 p-3">
                <img src={post.image} width={1200} height={800} loading="lazy" alt="Violet-lit motion design process" className="aspect-[3/2] w-full object-cover grayscale-[20%] transition duration-500 group-hover:grayscale-0" />
                <div className="p-4 pb-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-primary">{post.date} · {post.read}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight">{post.title}</h3>
                  <a href="mailto:hello@swort.studio?subject=Blog%20question" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition hover:text-primary">Read article <ChevronRight className="size-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-nebula relative overflow-hidden border-t border-primary/30">
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Logo />
              <h2 className="mt-8 max-w-xl font-display text-5xl leading-[0.9] sm:text-7xl">LET’S MAKE SOMETHING MOVE.</h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">Motion, edit, and digital experiences for brands with something meaningful to say.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary">Stay in the loop</p>
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <Input type="email" required aria-label="Email address" placeholder="you@studio.com" className="h-12 rounded-full border-border bg-background/60 px-5" />
                <Button type="submit" size="icon" aria-label="Subscribe" className="size-12 shrink-0 rounded-full bg-gradient-neon text-primary-foreground"><ArrowUpRight /></Button>
              </form>
              <p aria-live="polite" className="mt-3 min-h-5 text-xs text-primary">{subscribed ? "You’re on the list. Welcome to the edit." : "Occasional notes. No noise."}</p>
              <nav aria-label="Footer navigation" className="mt-10 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                {navItems.slice(1).map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-foreground">{item}</a>)}
                <a href="mailto:hello@swort.studio" className="transition hover:text-foreground">Email</a>
                <a href="#work" className="transition hover:text-foreground">Instagram</a>
              </nav>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-3 border-t border-border pt-6 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
            <p>© 2026 SWORT Studio</p><p>Made frame by frame</p>
          </div>
        </div>
      </footer>
    </div>
  );
}