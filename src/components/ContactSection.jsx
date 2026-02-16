import {
  Linkedin, Github, Mail, Phone, MapPin, Send, Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

/* ─────────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────────── */
const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   INFO ITEMS DATA
───────────────────────────────────────────── */
const INFO_ITEMS = [
  {
    icon:   Mail,
    title:  "Email",
    value:  "shagun.kumari.work@gmail.com",
    href:   "mailto:shagun.kumari.work@gmail.com",
    accent: "#818cf8",
  },
  {
    icon:   Phone,
    title:  "Phone",
    value:  "+91 8873924902",
    href:   "tel:+918873924902",
    accent: "#a78bfa",
  },
  {
    icon:   MapPin,
    title:  "Location",
    value:  "Pune, Maharashtra, India",
    accent: "#22d3ee",
  },
];

/* ─────────────────────────────────────────────
   SOCIAL LINKS
───────────────────────────────────────────── */
const SOCIALS = [
  {
    href:   "https://www.linkedin.com/in/shagun-kumari-21066b318/",
    label:  "LinkedIn",
    accent: "#818cf8",
    icon:   <Linkedin size={18} />,
  },
  {
    href:   "https://github.com/Shagun0622",
    label:  "GitHub",
    accent: "#a78bfa",
    icon:   <Github size={18} />,
  },
  {
    href:   "https://leetcode.com/u/kumarishagun330/",
    label:  "LeetCode",
    accent: "#22d3ee",
    icon:   (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.483 0L3.99 9.494a3.403 3.403 0 000 4.811l5.705 5.705a3.403 3.403 0 004.811 0l9.494-9.494-2.42-2.42-8.362 8.362a1.72 1.72 0 01-2.432 0l-5.706-5.706a1.72 1.72 0 010-2.432l8.363-8.362L13.483 0z"/>
        <path d="M18.004 3.996l-1.999 1.999 2.42 2.42 1.999-1.999-2.42-2.42z"/>
      </svg>
    ),
  },
  {
    href:   "mailto:shagun.kumari.work@gmail.com",
    label:  "Email",
    accent: "#c084fc",
    icon:   <Mail size={18} />,
  },
];

/* ─────────────────────────────────────────────
   INFO CARD
───────────────────────────────────────────── */
const InfoCard = ({ icon: Icon, title, value, href, accent }) => (
  <motion.div
    variants={itemVariants}
    className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
    style={{ borderColor: `${accent}20`, background: `${accent}08` }}
    whileHover={{ x: 4 }}
  >
    {/* Icon orb */}
    <div
      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
      style={{
        background:   `${accent}18`,
        border:       `1px solid ${accent}35`,
        boxShadow:    `0 0 0 0 ${accent}`,
      }}
    >
      <Icon className="h-5 w-5" style={{ color: accent }} />
    </div>

    <div className="min-w-0">
      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">{title}</p>
      {href ? (
        <a
          href={href}
          className="text-sm font-medium truncate block transition-colors duration-200 hover:underline"
          style={{ color: "inherit" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
        >
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium">{value}</p>
      )}
    </div>

    {/* Right accent bar */}
    <div
      className="ml-auto shrink-0 w-0.5 h-6 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-300"
      style={{ background: accent }}
    />
  </motion.div>
);

/* ─────────────────────────────────────────────
   SOCIAL BUTTON
───────────────────────────────────────────── */
const SocialBtn = ({ href, label, accent, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.12, y: -2 }}
    whileTap={{ scale: 0.93 }}
    className="relative flex flex-col items-center gap-1.5 group"
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
      style={{
        borderColor: `${accent}30`,
        background:  `${accent}10`,
        color:        accent,
      }}
    >
      {icon}
      {/* Glow on hover via inline style swap — handled by framer whileHover scale */}
    </div>
    <span className="text-[10px] text-muted-foreground tracking-wide">{label}</span>
  </motion.a>
);

/* ─────────────────────────────────────────────
   FORM FIELD
───────────────────────────────────────────── */
const Field = ({ label, name, type = "text", placeholder, multiline }) => {
  const [focused, setFocused] = useState(false);
  const base =
    "w-full px-4 py-3 rounded-xl text-sm bg-transparent border transition-all duration-300 outline-none placeholder:text-muted-foreground/50";
  const style = {
    borderColor: focused ? "#818cf880" : "#ffffff14",
    boxShadow:   focused ? "0 0 0 3px #818cf818" : "none",
    background:  focused ? "#818cf808" : "transparent",
  };

  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          rows={4}
          required
          placeholder={placeholder}
          className={cn(base, "resize-none")}
          style={style}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className={base}
          style={style}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────── */
export const ContactSection = () => {
  const { toast }                   = useToast();
  const [isSubmitting, setSubmitting] = useState(false);

  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      () => {
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        setSubmitting(false);
        e.target.reset();
      },
      (err) => {
        toast({ title: "Error", description: "Something went wrong. Try again." });
        setSubmitting(false);
        console.error(err);
      }
    );
  };

  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* ── Heading ── */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            <Sparkles size={12} /> Let&apos;s Connect
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out — I&apos;m always open to new opportunities.
          </p>

          <motion.div
            className="mx-auto mt-5 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* ── LEFT — Info + Socials ── */}
          <motion.div variants={containerVariants} className="space-y-4">

            <motion.h3 variants={itemVariants} className="text-lg font-bold mb-5 flex items-center gap-2">
              <span
                className="w-5 h-px rounded-full inline-block"
                style={{ background: "linear-gradient(to right, #818cf8, #22d3ee)" }}
              />
              Contact Information
            </motion.h3>

            {/* Info cards */}
            {INFO_ITEMS.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}

            {/* Social icons */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Find me on
              </p>
              <div className="flex gap-4">
                {SOCIALS.map((s) => (
                  <SocialBtn key={s.label} {...s} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Form ── */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl border p-7 transition-all duration-300"
            style={{ borderColor: "#818cf825", background: "#818cf806" }}
            whileHover={{ borderColor: "#818cf840" }}
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, #818cf812, transparent 70%)" }}
            />

            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span
                className="w-5 h-px rounded-full inline-block"
                style={{ background: "linear-gradient(to right, #818cf8, #22d3ee)" }}
              />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Field name="name"    label="Your Name"    placeholder="Shagun Kumari"         />
              <Field name="email"   label="Your Email"   placeholder="you@email.com" type="email" />
              <input type="hidden"  name="title"         value="Portfolio Contact" />
              <Field name="message" label="Your Message" placeholder="Hello, I'd like to talk about..." multiline />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 transition-opacity",
                  isSubmitting && "opacity-60 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};