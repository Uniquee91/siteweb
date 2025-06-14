import React from "react";
import { Link } from "react-router-dom";

interface WelcomeProps {
  language: string;
  imgUrl: string;
}

const Welcome: React.FC<WelcomeProps> = ({ language, imgUrl }) => {
  const content = {
    Português: {
      welcome: "Bem-vindo ao UNIQUE4WORLD",
      title: "Sua jornada para o bem-estar começa aqui",
      description1:
        "No UNIQUE4WORLD, acreditamos que cada pessoa merece viver experiências transformadoras que nutrem o espírito, o corpo e a alma. Nossos retiros cuidadosamente projetados oferecem um espaço de reconexão profunda, longe do tumulto diário.",
      description2:
        "Seja você está procurando um simples dia de relaxamento, um retiro de vários dias ou uma experiência única do outro lado do mundo, Luis o acompanha nesta jornada de retorno ao essencial.",
      button: "Descobrir nossos retiros",
    },
    Français: {
      welcome: "Bienvenue à UNIQUE4WORLD",
      title: "Votre voyage vers le bien-être commence ici",
      description1:
        "Chez UNIQUE4WORLD, nous croyons que chacun mérite de vivre des expériences transformatrices qui nourrissent l'esprit, le corps et l'âme. Nos retraites soigneusement conçues offrent un espace de reconnexion profonde, loin de l'agitation quotidienne.",
      description2:
        "Que vous recherchiez une simple journée de détente, une retraite de plusieurs jours ou une expérience unique de l'autre côté du monde, Luis vous accompagne dans ce voyage de retour à l'essentiel.",
      button: "Découvrir nos retraites",
    },
    English: {
      welcome: "Welcome to UNIQUE4WORLD",
      title: "Your wellness journey starts here",
      description1:
        "At UNIQUE4WORLD, we believe everyone deserves transformative experiences that nourish the spirit, body, and soul. Our carefully designed retreats offer a space for deep reconnection, away from daily hustle.",
      description2:
        "Whether you're looking for a simple day of relaxation, a multi-day retreat, or a unique experience on the other side of the world, Luis accompanies you on this journey back to the essential.",
      button: "Discover our retreats",
    },
  };

  const { welcome, title, description1, description2, button } =
    content[language as keyof typeof content] || content["English"];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-amber-600 font-medium">{welcome}</span>
          <h2 className="text-4xl font-serif font-light leading-tight">
            {title}
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
          <Link
            to="/retreats"
            className="inline-flex px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
          >
            {button}
          </Link>
        </div>
        <div className="relative">
          <img
            src={imgUrl}
            alt="Zen decoration"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
