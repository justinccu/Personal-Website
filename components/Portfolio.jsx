import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";

export default function Portfolio({ projects }) {
  const displayProjects = projects;
  const featuredProjects = displayProjects.filter(p => p.featured);
  const otherProjects = displayProjects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A showcase of projects that demonstrate my passion for <br />
            creating innovative solutions and exceptional user experiences.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="glass-card rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-3 py-1 glass-morphism rounded-full text-sm">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-medium">Featured</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
                    <p className="text-black mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies?.map((tech) => (
                        <span key={tech} className="px-3 py-1 glass-morphism rounded-full text-sm text-black">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.project_url && (
                        <a 
                          href={project.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-black font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {(project.title === 'Longphase' || project.title === 'Courses Recommendation') ? 'PowerPoint' : 'Live Demo'}
                        </a>
                      )}
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 glass-morphism rounded-xl text-black font-medium hover:bg-white/20 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                More Projects
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
                  {project.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-black mb-3">{project.title}</h4>
                    <p className="text-black mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies?.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 glass-morphism rounded text-xs text-black">
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="px-2 py-1 glass-morphism rounded text-xs text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {project.project_url && (
                        <a
                          href={project.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 glass-morphism rounded-lg text-sm text-black hover:bg-white/20 transition-all duration-300"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {(project.title === 'Longphase' || project.title === 'Courses Recommendation') ? 'PowerPoint' : 'Demo'}
                        </a>
                      )}
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 glass-morphism rounded-lg text-sm text-black hover:bg-white/20 transition-all duration-300"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}