import {
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

/* ================= ANIMATIONS ================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ===== EmailJS ENV VARS ===== */
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "I’ll get back to you soon.",
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Try again.",
          });
          setIsSubmitting(false);
          console.error(error);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        {/* HEADER */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <InfoItem
                icon={Mail}
                title="Email"
                value="shagun.kumari.work@gmail.com"
                href="mailto:shagun.kumari.work@gmail.com"
              />
              <InfoItem
                icon={Phone}
                title="Phone"
                value="+91 8873924902"
                href="tel:+918873924902"
              />
              <InfoItem
                icon={MapPin}
                title="Location"
                value="Pune, Maharashtra, India"
              />
            </div>

            {/* SOCIALS */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-2xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <SocialIcon
                  href="https://www.linkedin.com/in/shagun-kumari-21066b318/"
                  label="LinkedIn"
                >
                  <Linkedin size={20} />
                </SocialIcon>

                <SocialIcon
                  href="https://github.com/Shagun0622"
                  label="GitHub"
                >
                  <Github size={20} />
                </SocialIcon>

                {/* LeetCode (inline SVG – reliable) */}
                <SocialIcon
                  href="https://leetcode.com/u/kumarishagun330/"
                  label="LeetCode"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-primary fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.483 0L3.99 9.494a3.403 3.403 0 000 4.811l5.705 5.705a3.403 3.403 0 004.811 0l9.494-9.494-2.42-2.42-8.362 8.362a1.72 1.72 0 01-2.432 0l-5.706-5.706a1.72 1.72 0 010-2.432l8.363-8.362L13.483 0z"/>
                    <path d="M18.004 3.996l-1.999 1.999 2.42 2.42 1.999-1.999-2.42-2.42z"/>
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href="mailto:shagun.kumari.work@gmail.com"
                  label="Email"
                >
                  <Mail size={20} />
                </SocialIcon>
              </div>
            </div>
          </motion.div>

          {/* RIGHT (FORM) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                label="Your Name"
                placeholder="Your Name"
              />
              <Input
                name="email"
                type="email"
                label="Your Email"
                placeholder="you@email.com"
              />

              {/* Required by EmailJS template */}
              <input type="hidden" name="title" value="Portfolio Contact" />

              <Textarea
                name="message"
                label="Your Message"
                placeholder="Hello, I'd like to talk about..."
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const InfoItem = ({ icon: Icon, title, value, href }) => (
  <div className="flex gap-4 items-start">
    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      {href ? (
        <a href={href} className="text-muted-foreground hover:text-primary transition">
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({ href, label, children }) => (
  <motion.a
    href={href}
    target="_blank"
    aria-label={label}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:text-primary-foreground transition"
  >
    {children}
  </motion.a>
);

const Input = ({ label, name, type = "text", placeholder }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

const Textarea = ({ label, name, placeholder }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      name={name}
      rows={4}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md resize-none bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);
