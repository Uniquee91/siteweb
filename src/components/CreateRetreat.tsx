import React from "react";
import { Link } from "react-router-dom";

interface CreateRetreatProps {
  language: string;
  imgUrl: string;
}

const CreateRetreat: React.FC<CreateRetreatProps> = ({ language, imgUrl }) => {
  const content = {
    Português: {
      title: "Crie seu próprio retiro",
      description:
        "Você sonha com um retiro sob medida para você, sua família ou sua empresa? Luis o acompanha na criação de uma experiência única que atenda às suas necessidades específicas.",
      button: "Solicite seu retiro personalizado",
    },
    Français: {
      title: "Créez votre propre retraite",
      description:
        "Vous rêvez d'une retraite sur mesure pour vous, votre famille ou votre entreprise ? Luis vous accompagne dans la création d'une expérience unique qui répond à vos besoins spécifiques.",
      button: "Demandez votre retraite personnalisée",
    },
    English: {
      title: "Create your own retreat",
      description:
        "Do you dream of a tailored retreat for yourself, your family, or your company? Luis accompanies you in creating a unique experience that meets your specific needs.",
      button: "Request your personalized retreat",
    },
  };

  const { title, description, button } =
    content[language as keyof typeof content] || content["English"];

  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          filter: "brightness(0.4)",
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-serif font-light text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          to="/request-retreat"
          className="inline-block px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
        >
          {button}
        </Link>
      </div>
    </section>
  );
};

export default CreateRetreat;
