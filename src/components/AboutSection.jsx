import { Briefcase, Code, User, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14 } },
};

/* ─────────────────────────────────────────────
   CARDS DATA
───────────────────────────────────────────── */
const cards = [
  {
    icon:    Code,
    label:   "Frontend Development",
    body:    "Building responsive, animated UIs with React, Tailwind CSS, and modern JavaScript.",
    accent:  "#818cf8",
    dim:     "#818cf818",
    symbol:  "◈",
  },
  {
    icon:    User,
    label:   "Backend Development",
    body:    "Crafting REST APIs, handling auth, and working with databases via Node.js & Express.",
    accent:  "#22d3ee",
    dim:     "#22d3ee18",
    symbol:  "⬡",
  },
  {
    icon:    Briefcase,
    label:   "DSA & Problem Solving",
    body:    "Solving algorithmic challenges to sharpen logic, efficiency, and scalable thinking.",
    accent:  "#a78bfa",
    dim:     "#a78bfa18",
    symbol:  "⋈",
  },
];

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
const stats = [
  { value: "4+",  label: "Projects Built"   },
  { value: "3+",  label: "Tech Stacks"      },
  { value: "DSA", label: "Daily Practice"   },
];

/* ─────────────────────────────────────────────
   ABOUT CARD
───────────────────────────────────────────── */
const AboutCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <motion.div
      variants={fadeRight}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
      className="group relative rounded-2xl border p-5 transition-all duration-300"
      style={{
        borderColor: `${card.accent}25`,
        background:  `linear-gradient(135deg, ${card.dim}, transparent)`,
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-300 group-hover:top-2 group-hover:bottom-2"
        style={{ background: `linear-gradient(to bottom, ${card.accent}, transparent)` }}
      />

      <div className="flex items-start gap-4 pl-3">
        {/* Icon orb */}
        <div
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: card.dim,
            border:     `1px solid ${card.accent}40`,
            boxShadow:  `0 0 0 0 ${card.accent}`,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: card.accent }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-sm text-foreground">{card.label}</h4>
            <span className="text-xs opacity-40" style={{ color: card.accent }}>
              {card.symbol}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: `inset 0 0 20px ${card.accent}10` }}
      />
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">

      {/* Subtle top gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-5xl">

        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            <Sparkles size={12} /> Who I Am
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-primary">Me</span>
          </h2>

          {/* Animated divider */}
          <motion.div
            className="mx-auto h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ── LEFT — Bio + Stats + Buttons ── */}
          <motion.div
            className="space-y-7"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold leading-snug">
              Fresher Full-Stack Developer{" "}
              <span className="text-primary">&</span> Problem Solver
            </h3>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a strong foundation in
                both frontend and backend development — building responsive,
                user-friendly web applications from the ground up.
              </p>
              <p>
                Alongside development, I actively practice Data Structures &
                Algorithms to write clean, efficient, and scalable code that holds
                up under real-world conditions.
              </p>
              <p>
                Currently deepening my backend knowledge and sharpening logic
                through consistent DSA practice every day.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-0.5">
                  <span
                    className="text-2xl font-extrabold"
                    style={{
                      background: "linear-gradient(135deg, #818cf8, #c084fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] text-muted-foreground tracking-wide uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-border/50 w-full" />

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="cosmic-button flex items-center gap-2"
              >
                Get In Touch <ArrowRight size={14} />
              </motion.a>

              <motion.a
                href="/Shagun_Kumari_Resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT — Cards ── */}
          <motion.div
            className="flex flex-col gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cards.map((card) => (
              <AboutCard key={card.label} card={card} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};