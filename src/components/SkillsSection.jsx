import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, 
  Palette, 
  Zap, 
  Wind, 
  Server, 
  Database, 
  Binary, 
  Cpu, 
  FileCode, 
  GitBranch, 
  Terminal 
} from "lucide-react";

/* ================= SKILLS DATA ================= */

const skills = [
  // Frontend
  { name: "HTML & CSS", category: "frontend", level: 90, icon: Palette },
  { name: "JavaScript", category: "frontend", level: 85, icon: Zap },
  { name: "React", category: "frontend", level: 80, icon: Code2 },
  { name: "Tailwind CSS", category: "frontend", level: 88, icon: Wind },

  // Backend
  { name: "Node.js", category: "backend", level: 75, icon: Server },
  { name: "Express.js", category: "backend", level: 78, icon: Server },
  { name: "MongoDB", category: "backend", level: 72, icon: Database },

  // DSA
  { name: "Data Structures", category: "dsa", level: 82, icon: Binary },
  { name: "Algorithms", category: "dsa", level: 80, icon: Cpu },
  
  // Languages
  { name: "C", category: "languages", level: 85, icon: FileCode },
  { name: "C++", category: "languages", level: 88, icon: FileCode },
  { name: "Java", category: "languages", level: 83, icon: FileCode },

  // Tools
  { name: "Git & GitHub", category: "tools", level: 90, icon: GitBranch },
  { name: "VS Code", category: "tools", level: 92, icon: Terminal },
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
      className="py-24 px-4 relative bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* ===== CATEGORY FILTER ===== */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300 border-2",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                  : "bg-background border-border text-foreground hover:border-primary/50 hover:bg-secondary/50"
              )}
            >
              {category === "all"
                ? "All"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* ===== SKILLS GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                style={{ animationDelay: `${index * 50}ms` }}
                className="relative group bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              >
                {/* Header with Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  {/* Icon */}
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Category badge */}
                  <span className="inline-block text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>

                {/* Skill name */}
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Sparkle effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary rounded-full animate-pulse delay-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};