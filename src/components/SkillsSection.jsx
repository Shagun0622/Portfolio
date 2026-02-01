import { useState } from "react";
import { cn } from "@/lib/utils";

/* ================= SKILLS DATA ================= */

const skills = [
  

  // Frontend
  { name: "HTML & CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },

  // DSA
  { name: "Data Structures", category: "dsa" },
  { name: "Algorithms", category: "dsa" },
  // Languages
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Java", category: "languages" },

  // Tools
  { name: "Git & GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
];

/* ================= CATEGORIES ================= */

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "dsa",
  "tools",
];

/* ================= COMPONENT ================= */

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        {/* ===== HEADING ===== */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* ===== CATEGORY FILTER ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "all"
                ? "All"
                : category.charAt(0).toUpperCase() +
                  category.slice(1)}
            </button>
          ))}
        </div>

        {/* ===== SKILLS GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* Skill name */}
              <h3 className="font-semibold text-lg mb-2">
                {skill.name}
              </h3>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
