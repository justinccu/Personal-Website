import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "/images/profile.jpeg";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollWithOffset = (id, offset) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="glass-card rounded-3xl p-16 md:p-24 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="w-96 h-96 mx-auto mb-16 relative">
            <img
              src={profileImage}
              alt="Chen-Han Chin (Justin)"
              className="w-full h-full rounded-2xl object-cover border-4 border-white/30 shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Chen-Han Chin (Justin)
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
            Industrial Technology Research Institute (ITRI), Taiwan <br />AI Data Annotation Intern
          </p>

          <p className="text-lg text-black mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm passionate about NLP and deep learning, and I aim to create scalable technologies that make a real impact in everyday life.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/justinccu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/chenhan-chin-2a4b65310/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hank9185@icloud.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="glass-morphism p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollWithOffset("portfolio", -25)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 glass-morphism rounded-xl text-gray-800 font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="mt-16 mx-auto block glass-morphism p-4 rounded-full hover:bg-white/30 transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
}