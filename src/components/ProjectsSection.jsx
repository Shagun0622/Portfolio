import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

/* ===== IMPORT IMAGE ===== */
import stayeaseCover from "../assets/projects/stayease_cover.png";

/* ===== PROJECT DATA ===== */
const projects = [
  {
    id: 1,
    title: "Stayease",
    description:
      "Stayease is a modern accommodation booking platform with a clean UI, smooth interactions, and a fully responsive design.",
    image: stayeaseCover,
    tags: [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Authentication"
],

    demoUrl: "https://stayease-5giw.onrender.com/",
    githubUrl: "https://github.com/Shagun0622/stayease",
  },
];

/* ===== COMPONENT ===== */
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-24 px-4 transition-all duration-700 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* ===== HEADING ===== */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Project</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          A highlighted project that demonstrates my frontend skills, UI design
          sense, and real-world application development.
        </p>

        {/* ===== PROJECT CARD ===== */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-card rounded-xl overflow-hidden shadow-xs card-hover
            transition-all duration-500 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            {/* Image */}
            <div className="h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-6">
                {project.description}
              </p>

              <div className="flex gap-6">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
                >
                  <Github size={18} /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
