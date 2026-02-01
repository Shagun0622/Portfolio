import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ================= COMPONENT ================= */

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />

      <motion.div
        className="container mx-auto max-w-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ===== HEADING ===== */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            className="space-y-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">
              Fresher Full-Stack Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I am a passionate fresher full-stack developer with a strong
              foundation in both frontend and backend development. I enjoy
              building responsive, user-friendly web applications.
            </p>

            <p className="text-muted-foreground">
              Along with development, I actively practice Data Structures and
              Algorithms (DSA) to improve problem-solving skills and write clean,
              efficient, and scalable code.
            </p>

            <p className="text-muted-foreground">
              Currently exploring advanced backend concepts and strengthening
              logic through consistent DSA practice.
            </p>

            {/* ===== BUTTONS ===== */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cosmic-button"
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="/Shagun_Kumari_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </motion.a>
            </div>

           
          </motion.div>

          {/* ===== RIGHT CARDS ===== */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Frontend */}
            <motion.div
              variants={fadeRight}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  Building responsive and interactive user interfaces using
                    React, Tailwind CSS, and modern JavaScript.
                </div>
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={fadeRight}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Backend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating REST APIs, handling authentication, and working
                    with databases using Node.js and Express.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* DSA */}
            <motion.div
              variants={fadeRight}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    DSA & Problem Solving
                  </h4>
                  <p className="text-muted-foreground">
                    Solving algorithmic problems to improve logic, efficiency,
                    and real-world coding skills.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
