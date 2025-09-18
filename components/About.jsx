import React, { useState, useRef } from "react";
import { Code, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Manhattan, First Time in the US",
    description: "The neighborhood where Jules Ostin lives in the movie The Intern!"
  },
  {
    icon: Palette,
    title: "Denmark, with my Amazing Friend!",
    description: "Spent a week at Allerød Gymnasium on a high school exchange."
  },
  {
    icon: Rocket,
    title: "Volleyball, Freshmen in CCU",
    description: "Can't believe we won the third place in the tournament!"
  },
  {
    icon: Users,
    title: "Becoming a School Ambassador",
    description: "Took my friend, Michael to Taipei for two days!"
  },
  {
    icon: Code,
    title: "Ole Miss, First Day in Mississippi",
    description: "My first day as an exchange student at the University of Mississippi!"
  },
  {
    icon: Palette,
    title: "Atlanta, Thanksgiving Trip",
    description: "Amazing experience to Atlanta for Thanksgiving with my friends!"
  },
  {
    icon: Rocket,
    title: "Osaka, Japan Adventure",
    description: "Exploring the beautiful city, Osaka and experiencing Japanese culture!"
  },
  {
    icon: Users,
    title: "JJ Lin Concert Experience",
    description: "Amazing night at JJ Lin's concert!"
  },
  {
    icon: Code,
    title: "Graduation from CCU!",
    description: "Celebrating my graduation from National Chung Cheng University!"
  },
  {
    icon: Palette,
    title: "ITRI Internship",
    description: "Working as an intern at Industrial Technology Research Institute on AI projects!"
  }
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const card = scrollContainer.children[index];
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  };

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && scrollContainer.children.length > 0) {
      const cardWidth = scrollContainer.children[0].offsetWidth;
      const scrollLeft = scrollContainer.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="ps-body typography-ps-body ric-large-8 ric-large-offset-2 ric-small-10 ric-small-offset-1 ps-spacing-large-160 ps-spacing-medium-128 ps-spacing-small-72 text-large-center text-small-start text-2xl md:text-3xl text-black">
            My name is Chen-Han Chin, also known as Justin. <br />
            I am currently an intern at ITRI during AI stuff. 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass-card rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-black mb-6">My Journey</h3>
            <div className="space-y-4 text-black leading-relaxed">
            <p>
                I first started coding in my senior year of high school, intrigued by the possibilities of creating something impactful with just lines of code.
              </p>
              <p>
                In university, my passion for both business and software development led me to pursue a double major in Computer Science and Economics,
                where I learned to bridge technical problem-solving with strategic thinking.
              </p>
              <p>
                When I'm not coding, you'll most likely find me on the volleyball court,
                my favorite way to recharge and challenge myself.
                I also enjoy diving into emerging technologies,
                always seeking fresh ideas that inspire creativity and innovation.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-16">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-black mb-2">
                  Coding Experience
                </h4>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  5+ Years
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black mb-2">
                  Leetcode Completed (Working on it...)
                </h4>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  74
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black mb-2">
                  Volleyball Experience
                </h4>
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  10 Years
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights - Carousel with dots */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-16 pt-8 snap-x snap-mandatory scroll-smooth scrollbar-hide px-8"
            style={{ scrollPadding: "0 24px" }}
          >
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="snap-center flex-shrink-0 px-6"
                style={{ width: 'calc(100% - 8rem)' }}
              >
                <div
                  className="glass-card rounded-3xl p-16 md:p-20 w-full aspect-video flex flex-col justify-start items-start hover:bg-white/10 transition-all duration-300 group hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
                  style={title === 'Manhattan, First Time in the US' ? {
                    backgroundImage: 'url("/images/Manhattan.JPEG")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'Denmark, with my Amazing Friend!' ? {
                    backgroundImage: 'url("/images/Denmark.JPEG")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'Volleyball, Freshmen in CCU' ? {
                    backgroundImage: 'url("/images/volleyball_freshmen.JPEG")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'Becoming a School Ambassador' ? {
                    backgroundImage: 'url("/images/flagship.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'Ole Miss, First Day in Mississippi' ? {
                    backgroundImage: 'url("/images/Olemiss_firstday.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'Atlanta, Thanksgiving Trip' ? {
                    backgroundImage: 'url("/images/Gatech.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'Osaka, Japan Adventure' ? {
                    backgroundImage: 'url("/images/Osaka.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 83%',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'JJ Lin Concert Experience' ? {
                    backgroundImage: 'url("/images/JJLin.JPG")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'Graduation from CCU!' ? {
                    backgroundImage: 'url("/images/graduate.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : title === 'ITRI Internship' ? {
                    backgroundImage: 'url("/images/ITRI.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : {}}
                >
                  {(title === 'Manhattan, First Time in the US' || title === 'Denmark, with my Amazing Friend!' || title === 'Volleyball, Freshmen in CCU' || title === 'Becoming a School Ambassador' || title === 'Ole Miss, First Day in Mississippi' || title === 'Atlanta, Thanksgiving Trip' || title === 'Osaka, Japan Adventure' || title === 'JJ Lin Concert Experience' || title === 'Graduation from CCU!' || title === 'ITRI Internship') && (
                    <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                  )}
                  <h3 className={`text-3xl md:text-4xl font-bold mb-6 relative z-10 ${(title === 'Manhattan, First Time in the US' || title === 'Denmark, with my Amazing Friend!' || title === 'Volleyball, Freshmen in CCU' || title === 'Becoming a School Ambassador' || title === 'Ole Miss, First Day in Mississippi' || title === 'Atlanta, Thanksgiving Trip' || title === 'Osaka, Japan Adventure' || title === 'JJ Lin Concert Experience' || title === 'Graduation from CCU!' || title === 'ITRI Internship') ? 'text-white drop-shadow-lg' : 'text-black'}`}>
                    {title}
                  </h3>
                  <p className={`leading-relaxed text-xl font-bold relative z-10 ${(title === 'Manhattan, First Time in the US' || title === 'Denmark, with my Amazing Friend!' || title === 'Volleyball, Freshmen in CCU' || title === 'Becoming a School Ambassador' || title === 'Ole Miss, First Day in Mississippi' || title === 'Atlanta, Thanksgiving Trip' || title === 'Osaka, Japan Adventure' || title === 'JJ Lin Concert Experience' || title === 'Graduation from CCU!' || title === 'ITRI Internship') ? 'text-gray-100 drop-shadow-md' : 'text-gray-700'}`}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "bg-black scale-125 shadow-lg shadow-black/25"
                    : "bg-gray-400 hover:bg-gray-600"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
