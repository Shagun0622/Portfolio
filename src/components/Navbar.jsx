import { cn } from "@/lib/utils"; 
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [{ name: "Home", href: "#hero" },
   { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
     { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full h-20 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold flex items-center">
          <span className="text-foreground">Shagun</span>{" "}
          <span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 z-50"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex items-center justify-center md:hidden transition",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
