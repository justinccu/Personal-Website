import React, { useEffect, useState } from "react";
import { Project } from "../entities/Project.js";

import Navigation from "../components/Navigation.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Education.jsx";
import Skills from "../components/Skills.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    loadProjects();
    
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 如果滾動到接近底部，自動選擇最後一個區塊
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop - 50) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadProjects = async () => {
    try {
      console.log("Loading projects...");
      const data = await Project.list("-created_date");
      console.log("Projects loaded:", data);
      setProjects(data);
    } catch (error) {
      console.error("Error loading projects:", error);
      setProjects([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-x-hidden">
      {/* Apple Liquid Glass Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-400/8 to-indigo-400/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-400/6 to-blue-400/6 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-gradient-to-r from-pink-400/6 to-rose-400/6 rounded-full blur-2xl animate-float"></div>

        {/* Bottom Background Image */}
        <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-cover bg-center bg-no-repeat opacity-20"
             style={{
               backgroundImage: 'url("/personal-website/images/background.jpeg")',
               maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
             }}>
        </div>
      </div>

      <Navigation activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio projects={projects} />
        <Contact />
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        
        @keyframes slow-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(22px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(25px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12),
                      0 4px 20px rgba(0, 0, 0, 0.08),
                      inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}