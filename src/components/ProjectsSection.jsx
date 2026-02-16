import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

/* ===== IMPORT IMAGES ===== */
import stayeaseCover      from "../assets/projects/stayease_cover.png";
import davsasLandingCover from "../assets/projects/davsas_cover.png";
import sundownCover       from "../assets/projects/sundown_cover.png";
import gta6Cover          from "../assets/projects/gta6_cover.png";

/* ─────────────────────────────────────────────
   PROJECT DATA
   accent     — used in dark mode for glows/badges
   accentLight — used in light mode (deeper/richer tone)
───────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "Stayease",
    description:
      "A modern accommodation booking platform with clean UI, smooth interactions, and fully responsive design. Features property listings, search filters, and secure authentication.",
    image: stayeaseCover,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Authentication"],
    demoUrl: "https://stayease-5giw.onrender.com/",
    githubUrl: "https://github.com/Shagun0622/stayease",
    accent:      "#818cf8", // indigo-400  — dark mode
    accentLight: "#4f46e5", // indigo-600  — light mode
    number: "01",
  },
  {
    id: 2,
    title: "Davsas Landing",
    description:
      "A sleek, conversion-focused landing page for Davsas — built with pixel-perfect attention to layout, typography, and responsive behaviour across all screen sizes.",
    image: davsasLandingCover,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    demoUrl: "https://saas-landing-dashboard-ruddy.vercel.app/",
    githubUrl: "https://github.com/Shagun0622/saas-landing-dashboard.git",
    accent:      "#a78bfa", // violet-400
    accentLight: "#7c3aed", // violet-600
    number: "02",
  },
  {
    id: 3,
    title: "Sundown Studio – UI Clone",
    description:
      "A pixel-perfect UI clone of Sundown Studio focusing on smooth GSAP animations, locomotive scroll, modern layout, and an immersive user experience.",
    image: sundownCover,
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
    demoUrl: "https://sundown-studio-clonee.netlify.app/",
    githubUrl: "https://github.com/Shagun0622/sundown-studio-clone",
    accent:      "#22d3ee", // cyan-400
    accentLight: "#0891b2", // cyan-600
    number: "03",
  },
  {
    id: 4,
    title: "GTA 6 Landing Page",
    description:
      "A cinematic, fan-made landing page inspired by GTA VI — featuring bold typography, immersive hero visuals, parallax effects, and a dark atmospheric design.",
    image: gta6Cover,
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "Parallax"],
    demoUrl: "https://gta-6-landing-page-ten.vercel.app/",
    githubUrl: "https://github.com/Shagun0622/GTA6_LANDING_PAGE.git",
    accent:      "#f472b6", // pink-400
    accentLight: "#db2777", // pink-600
    number: "04",
  },
];

/* ─────────────────────────────────────────────
   TAG COLOR MAP
   Each tag: light bg + dark bg + light text + dark text + light border + dark border
───────────────────────────────────────────── */
const tagColorMap = {
  "HTML":              "bg-indigo-100  dark:bg-indigo-500/10  text-indigo-700  dark:text-indigo-300  border-indigo-200  dark:border-indigo-500/20",
  "CSS":               "bg-violet-100  dark:bg-violet-500/10  text-violet-700  dark:text-violet-300  border-violet-200  dark:border-violet-500/20",
  "JavaScript":        "bg-amber-100   dark:bg-cyan-500/10    text-amber-700   dark:text-cyan-300    border-amber-200   dark:border-cyan-500/20",
  "Node.js":           "bg-emerald-100 dark:bg-teal-500/10    text-emerald-700 dark:text-teal-300    border-emerald-200 dark:border-teal-500/20",
  "Express.js":        "bg-slate-100   dark:bg-slate-500/10   text-slate-600   dark:text-slate-300   border-slate-200   dark:border-slate-500/20",
  "MongoDB":           "bg-green-100   dark:bg-indigo-400/10  text-green-700   dark:text-indigo-300  border-green-200   dark:border-indigo-400/20",
  "Authentication":    "bg-purple-100  dark:bg-purple-500/10  text-purple-700  dark:text-purple-300  border-purple-200  dark:border-purple-500/20",
  "React":             "bg-sky-100     dark:bg-sky-500/10     text-sky-700     dark:text-sky-300     border-sky-200     dark:border-sky-500/20",
  "Tailwind CSS":      "bg-cyan-100    dark:bg-cyan-600/10    text-cyan-700    dark:text-cyan-300    border-cyan-200    dark:border-cyan-600/20",
  "Framer Motion":     "bg-fuchsia-100 dark:bg-violet-600/10  text-fuchsia-700 dark:text-violet-300  border-fuchsia-200 dark:border-violet-600/20",
  "Responsive Design": "bg-blue-100    dark:bg-indigo-600/10  text-blue-700    dark:text-indigo-300  border-blue-200    dark:border-indigo-600/20",
  "GSAP":              "bg-purple-100  dark:bg-purple-600/10  text-purple-700  dark:text-purple-300  border-purple-200  dark:border-purple-600/20",
  "Locomotive Scroll": "bg-sky-100     dark:bg-sky-600/10     text-sky-700     dark:text-sky-300     border-sky-200     dark:border-sky-600/20",
  "Parallax":          "bg-pink-100    dark:bg-pink-500/10    text-pink-700    dark:text-pink-300    border-pink-200    dark:border-pink-500/20",
};

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
const ProjectCard = ({ project, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  // pick accent based on theme via CSS custom property trick —
  // we pass both and let inline style use the correct one via JS
  // (simplest cross-theme approach without a useTheme hook)
  const isDark  = document.documentElement.classList.contains("dark");
  const accent  = isDark ? project.accent : project.accentLight;

  return (
    <div
      className={`group relative flex flex-col h-full transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${150 + index * 160}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Ambient glow (dark only) ── */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10 dark:block hidden"
        style={{ background: `${project.accent}20` }}
      />

      {/* ── Card shell ── */}
      <div className="relative flex flex-col h-full
        bg-white dark:bg-card
        border border-slate-200/80 dark:border-white/8
        rounded-2xl overflow-hidden
        shadow-sm hover:shadow-lg dark:shadow-md dark:hover:shadow-2xl
        hover:border-slate-300 dark:hover:border-white/15
        transition-all duration-500"
      >

        {/* ── Image ── */}
        <div className="relative h-52 shrink-0 overflow-hidden bg-slate-100 dark:bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out
              ${hovered ? "scale-105" : "scale-100"}`}
          />

          {/* Scrim — lighter in light mode */}
          <div className="absolute inset-0
            bg-gradient-to-t
            from-white/60 dark:from-black/60
            via-transparent to-transparent"
          />

          {/* Number badge */}
          <div
            className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full flex items-center justify-center
              text-[11px] font-bold text-white shadow-md ring-1 ring-white/20"
            style={{ background: accent }}
          >
            {project.number}
          </div>

          {/* Hover CTA overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-3
              transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                text-xs font-semibold text-white
                shadow-xl backdrop-blur-sm border border-white/20
                hover:brightness-110 transition"
              style={{ background: `${accent}dd` }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                text-xs font-semibold text-white
                shadow-xl backdrop-blur-sm border border-white/20
                bg-black/40 hover:bg-black/60 transition"
            >
              <Github size={12} /> Code
            </a>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 p-5">

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2.5 py-0.5 text-[10px] font-medium border rounded-full
                  ${tagColorMap[tag] ?? "bg-secondary text-secondary-foreground border-border"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title + arrow */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-foreground">
              {project.title}
            </h3>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 mt-0.5 p-1.5 rounded-full
                border border-slate-200 dark:border-border
                hover:border-slate-400 dark:hover:border-primary/50
                hover:bg-slate-100 dark:hover:bg-primary/10
                transition"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight size={14} className="text-slate-400 dark:text-muted-foreground" />
            </a>
          </div>

          {/* Description */}
          <p className="flex-1 text-xs text-slate-500 dark:text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Footer links */}
          <div className="flex items-center gap-5 pt-3.5 border-t border-slate-100 dark:border-border/60">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium
                text-slate-500 dark:text-muted-foreground
                hover:text-indigo-600 dark:hover:text-primary transition"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium
                text-slate-500 dark:text-muted-foreground
                hover:text-indigo-600 dark:hover:text-primary transition"
            >
              <Github size={13} /> Source Code
            </a>
          </div>
        </div>

        {/* Accent sweep bar */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
        />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <div
          className={`text-center mb-14 transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Eyebrow */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase
            text-indigo-500 dark:text-primary mb-3">
            My Work
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-3
            text-slate-900 dark:text-foreground">
            Featured{" "}
            <span className="text-indigo-600 dark:text-primary">Projects</span>
          </h2>

          <p className="text-slate-500 dark:text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            A curated set of projects spanning full-stack development,
            landing pages, and immersive UI experiments.
          </p>

          {/* Animated divider */}
          <div
            className={`mx-auto mt-6 h-px transition-all duration-1000 ease-out
              bg-gradient-to-r from-transparent via-indigo-400/60 dark:via-primary/40 to-transparent
              ${visible ? "w-40 opacity-100" : "w-0 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        {/* ── Footer ── */}
        <p
          className={`text-center text-xs text-slate-400 dark:text-muted-foreground mt-10
            transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "550ms" }}
        >
          More on{" "}
          <a
            href="https://github.com/Shagun0622"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium text-indigo-800 dark:text-primary underline underline-offset-8 hover:opacity-75 transition"

          >
            GitHub ↗
          </a>
        </p>
      </div>
    </section>
  );
};