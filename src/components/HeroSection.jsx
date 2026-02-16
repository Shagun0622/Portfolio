import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   TYPEWRITER ROLES
───────────────────────────────────────────── */
const ROLES = [
  "Full-Stack Developer",
  "React Enthusiast",
  "DSA Problem Solver",
  "UI/UX Craftsman",
];

const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay   = deleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
};

/* ─────────────────────────────────────────────
   FLOATING PARTICLES
───────────────────────────────────────────── */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id:    i,
  size:  i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
  left:  `${(i * 43.7) % 100}%`,
  top:   `${(i * 67.3) % 100}%`,
  dur:   `${6 + (i % 5) * 2}s`,
  delay: `${(i * 0.4) % 5}s`,
  color: i % 3 === 0 ? "#818cf8" : i % 3 === 1 ? "#22d3ee" : "#a78bfa",
}));

/* ─────────────────────────────────────────────
   SOCIAL LINKS
───────────────────────────────────────────── */
const SOCIALS = [
  { icon: Github,   href: "https://github.com/Shagun0622",          label: "GitHub"   },
  { icon: Linkedin, href: "https://linkedin.com/in/shagun-kumari",  label: "LinkedIn" },
  { icon: Mail,     href: "mailto:shagun@example.com",              label: "Email"    },
];

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
export const HeroSection = () => {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width:  p.size,
              height: p.size,
              left:   p.left,
              top:    p.top,
              background:  p.color,
              opacity:     0.5,
              animation:   `floatDot ${p.dur} ${p.delay} ease-in-out infinite alternate`,
              boxShadow:   `0 0 ${p.size * 3}px ${p.color}`,
            }}
          />
        ))}
      </div>

      
          
       
      

      {/* ── Main content ── */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase opacity-0 animate-fade-in"
            style={{
              borderColor: "#818cf840",
              background:  "#818cf810",
              color:       "#a5b4fc",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#818cf8", boxShadow: "0 0 6px #818cf8", animation: "pulse 2s infinite" }}
            />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in text-foreground">
              Hi, I&apos;m{" "}
            </span>
            <span
              className="opacity-0 animate-fade-in-delay-1"
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
              }}
            >
              Shagun Kumari
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-8 flex items-center justify-center opacity-0 animate-fade-in-delay-2">
            <span className="text-lg md:text-xl font-semibold text-muted-foreground">
              {"< "}
              <span className="text-primary">{role}</span>
              <span
                className="inline-block w-0.5 h-5 ml-0.5 align-middle"
                style={{
                  background: "#818cf8",
                  animation:  "blink 1s step-end infinite",
                }}
              />
              {" />"}
            </span>
          </div>

          {/* Bio */}
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            I build scalable, user-focused web applications — from clean,
            accessible frontends to reliable backend APIs and databases.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary"
              style={{ borderColor: "#818cf840", color: "#a5b4fc" }}
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2 rounded-full border transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: "#ffffff12",
                  color:       "#94a3b8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#818cf880";
                  e.currentTarget.style.color       = "#a5b4fc";
                  e.currentTarget.style.boxShadow   = "0 0 12px #818cf830";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ffffff12";
                  e.currentTarget.style.color       = "#94a3b8";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <div
          className="w-px h-8 rounded-full"
          style={{
            background: "linear-gradient(to bottom, #818cf8, transparent)",
            animation:  "scrollPulse 2s ease-in-out infinite",
          }}
        />
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes floatDot {
          from { transform: translateY(0px)   scale(1);   }
          to   { transform: translateY(-18px) scale(1.3); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50%       { opacity: 1;   transform: scaleY(1);   }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;   transform: scale(1);   }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
};