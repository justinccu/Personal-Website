import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];

export default function Navigation({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -25;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`glass-morphism rounded-2xl px-6 py-3 transition-all duration-300 ${isScrolled ? "shadow-2xl" : "shadow-lg"
            }`}>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Portfolio
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-5 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${activeSection === item.href.slice(1)
                        ? "text-gray-800 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
                        : "text-gray-700 hover:text-gray-900 hover:bg-white/20"
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 left-6 right-6 glass-card rounded-2xl p-6">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${activeSection === item.href.slice(1)
                      ? "text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}