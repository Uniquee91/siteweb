import React from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  language: string;
  imgUrl: string;
}

const Hero: React.FC<HeroProps> = ({ language, imgUrl }) => {
  const content = {
    Português: {
      heading: "Descubra a harmonia interior",
      subheading:
        "Retiros únicos para encontrar equilíbrio, serenidade e conexão consigo mesmo",
      buttonExplore: "Nossos retiros",
      buttonOrganize: "Organizar seu retiro",
    },
    Français: {
      heading: "Découvrez l'harmonie intérieure",
      subheading:
        "Retraites uniques pour trouver l'équilibre, la sérénité et la connexion avec soi-même",
      buttonExplore: "Nos retraites",
      buttonOrganize: "Organiser votre retraite",
    },
    English: {
      heading: "Discover inner harmony",
      subheading:
        "Unique retreats to find balance, serenity and connection with yourself",
      buttonExplore: "Our retreats",
      buttonOrganize: "Organize your retreat",
    },
  };

  const { heading, subheading, buttonExplore, buttonOrganize } =
    content[language as keyof typeof content] || content["English"];

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          filter: "brightness(0.8)",
        }}
      />

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white z-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 max-w-3xl transition-all duration-700 ease-in-out animate-fadeIn">
          {heading}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-10 font-light leading-relaxed animate-fadeIn animation-delay-300">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-600">
          <Link
            to="/retreats"
            className="px-8 py-3 bg-teal-700/80 hover:bg-teal-700 text-white rounded-md transition-all duration-300 font-medium backdrop-blur-sm"
          >
            {buttonExplore}
          </Link>
          <Link
            to="/request-retreat"
            className="px-8 py-3 bg-transparent hover:bg-white/20 border border-white/70 text-white rounded-md transition-all duration-300 backdrop-blur-sm"
          >
            {buttonOrganize}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
