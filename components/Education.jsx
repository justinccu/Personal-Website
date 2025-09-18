import React from "react";
import { GraduationCap, Calendar, MapPin, Award, Briefcase } from "lucide-react";

const educationData = [
  {
    id: 1,
    school: "National Chung Cheng University (CCU)",
    degree: "B.S. in Computer Science / B.A. in Economics",
    fieldOfStudy: "Computer Science & Economics",
    location: "Chia-Yi, Taiwan",
    startDate: "Sep. 2020",
    endDate: "Jun. 2025",
    description: "",
    achievements: ["GPA: 3.88/4.3", "Volleyball Team Captain/Coach", "TA for Economics", "School Ambassador"]
  },
  {
    id: 2,
    school: "University of Mississippi (Ole Miss)",
    degree: "Exchange Student in Computer Science",
    fieldOfStudy: "Computer Science",
    location: "Mississippi, USA",
    startDate: "Aug. 2023",
    endDate: "Dec. 2023",
    description: "",
    achievements: ["GPA: 4.0/4.0", "TA for Chinese Flagship Program", "CS Group Project", "Olemiss Volleyball Club"]
  },
  {
    id: 3,
    school: "Industrial Technology Research Institute (ITRI)",
    degree: "Intern",
    fieldOfStudy: "AI Data Annotation Intern",
    location: "Hsinchu, Taiwan",
    startDate: "Jul. 2025",
    endDate: "Present",
    description: "",
    achievements: ["AI Data Annotation", "Deep Learning Engineer", "NLP Algorithm Development", "Group Meeting"]
  }
];

const EducationCard = ({ education, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row md:items-center w-full">
      {/* Mobile layout - single column */}
      <div className="md:hidden w-full">
        <div className="flex items-start gap-4 mb-4">
          {/* Mobile timeline dot */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              {education.school.includes('ITRI') ?
                <Briefcase className="w-6 h-6 text-blue-400" /> :
                <GraduationCap className="w-6 h-6 text-blue-400" />
              }
            </div>
            {index < educationData.length - 1 && (
              <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400/50 to-purple-400/30 mt-4"></div>
            )}
          </div>

          {/* Mobile content */}
          <div className="flex-1">
            <div className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{education.school}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>{education.degree}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{education.startDate} - {education.endDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              <h4 className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {education.fieldOfStudy}
              </h4>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                {education.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {education.achievements.map((achievement, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 glass-morphism rounded-full text-xs text-gray-700 hover:bg-white/20 transition-all duration-300"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - alternating sides */}
      <div className="hidden md:flex w-full items-center">
        {/* Left side content */}
        <div className={`w-6/12 ${isLeft ? 'pr-8' : 'pl-8 order-3'}`}>
          <div className={`glass-card rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group ${isLeft ? 'text-right' : 'text-left'}`}>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{education.school}</h3>
              <div className={`flex flex-wrap gap-4 text-sm text-gray-600 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>{education.degree}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{education.startDate} - {education.endDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              {education.fieldOfStudy}
            </h4>

            <p className="text-gray-700 leading-relaxed mb-4">
              {education.description}
            </p>

            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {education.achievements.map((achievement, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 glass-morphism rounded-full text-sm text-gray-700 hover:bg-white/20 transition-all duration-300"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center timeline with icon */}
        <div className="w-2/12 flex justify-center order-2">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 glass-morphism rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 relative z-10">
              {education.school.includes('ITRI') ?
                <Briefcase className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" /> :
                <GraduationCap className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
              }
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right side spacer */}
        <div className={`w-4/12 ${isLeft ? 'order-3' : 'pr-8 order-1'}`}>
          {/* Empty space for alternating layout */}
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education & Work Experience
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-400/30 via-purple-400/40 to-blue-400/30 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-purple-400/30 to-blue-400/20 rounded-full blur-sm"></div>
          </div>

          <div className="space-y-4 md:space-y-6">
            {educationData.map((education, index) => (
              <EducationCard key={education.id} education={education} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}