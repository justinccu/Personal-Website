import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "C/C++", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "R", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Verilog", level: "Intermediate" }
    ]
  },
  {
    title: "Languages",
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "Chinese", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Taiwanese", level: "Advanced" },
      { name: "French", level: "Basic Conversation" },
      { name: "Japanese", level: "Basic Conversation" }
    ]
  },
  {
    title: "Tools & Others",
    color: "from-pink-400 to-orange-400",
    skills: [
      { name: "Docker", level: "", percentage: 90 },
      { name: "Git", level: "", percentage: 90 },
      { name: "Linux", level: "", percentage: 90 },
      { name: "VSCode", level: "", percentage: 90 },
      { name: "LaTeX", level: "", percentage: 90 }
    ]
  }
];

export default function Skills() {
  const getLevelPercentage = (skill) => {
    if (skill.percentage) return skill.percentage;
    if (typeof skill.level === 'number') return skill.level;
    if (typeof skill.level === 'string' && skill.level.includes('%')) {
      return parseInt(skill.level.replace('%', ''));
    }
    if (skill.name === 'Java' || skill.name === 'Verilog') return 60;

    switch(skill.level) {
      case 'Expert': return 90;
      case 'Advanced': return 80;
      case 'Intermediate': return 60;
      case 'Beginner': return 30;
      case 'Native': return 100;
      case 'Basic Conversation': return 50;
      default: return skill.level;
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-8 text-black">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      {skill.level && <span className="text-black text-sm">{skill.level}</span>}
                    </div>
                    <div className="glass-morphism rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{ width: `${getLevelPercentage(skill)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-black mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "PyTorch", "TensorFlow", "Transformers", "Keras", "Scikit-learn", "NumPy",
                "Pandas", "OpenCV", "Flask", "React", "BeautifulSoup", "Selenium",
                "MongoDB", "Matlab", "ggplot2", "Rstudio", "HuggingFace"
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 glass-morphism rounded-full text-black hover:text-gray-800 hover:bg-white/20 transition-all duration-300 cursor-default hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}