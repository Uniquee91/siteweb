import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { nosRetraitesQuery } from '../utils/sanityQueries';

interface NosRetraitesProps {
  language: string;
}

const NosRetraites: React.FC<NosRetraitesProps> = ({ language }) => {
  const { data, isLoading, error } = useFetch(nosRetraitesQuery);

  console.log("=== NOS RETRAITES DEBUG ===");
  console.log("Données reçues:", data);
  console.log("Langue:", language);

  const typedData = data as any; // Type assertion for safety

  const getTitle = () => {
    if (typedData?.banniere?.titre) {
      switch (language) {
        case 'Français': return typedData.banniere.titre.fr;
        case 'English': return typedData.banniere.titre.en;
        case 'Português': default: return typedData.banniere.titre.pt;
      }
    }
    return '';
  };

  const getSanitySubtitle = () => {
    if (typedData?.banniere?.sousTitre) {
      switch (language) {
        case 'Français': return typedData.banniere.sousTitre.fr;
        case 'English': return typedData.banniere.sousTitre.en;
        case 'Português': default: return typedData.banniere.sousTitre.pt;
      }
    }
    return '';
  };

  const getSanityIntroTitle = () => {
    if (typedData?.introduction?.titre) {
      switch (language) {
        case 'Français': return typedData.introduction.titre.fr;
        case 'English': return typedData.introduction.titre.en;
        case 'Português': default: return typedData.introduction.titre.pt;
      }
    }
    return '';
  };

  const getSanityIntroDescription = () => {
    if (typedData?.introduction?.description) {
      switch (language) {
        case 'Français': return typedData.introduction.description.fr;
        case 'English': return typedData.introduction.description.en;
        case 'Português': default: return typedData.introduction.description.pt;
      }
    }
    return '';
  };

  const title = getTitle();
  const subtitle = getSanitySubtitle();
  const introTitle = getSanityIntroTitle();
  const introDescription = getSanityIntroDescription();

  const content = {
    Português: {
      hero: {
        title: title || "Nossos Retiros",
        subtitle: subtitle || "Explore nossa gama de retiros e experiências projetadas para seu bem-estar",
      },
      intro: {
        title: introTitle || "Encontre o retiro perfeito para você",
        description: introDescription || "Seja você está procurando um simples dia de relaxamento, um retiro de vários dias ou uma experiência única do outro lado do mundo, temos a opção ideal para você.",
      },
      categories: [
        {
          title: "Retiros de Um Dia",
          description: "Perfeitos para uma pausa rápida e revigorante",
          link: "/one-day-retreats",
        },
        {
          title: "Retiros de Bem-estar",
          description: "Experiências transformadoras de vários dias",
          link: "/wellness-retreats",
        },
        {
          title: "Eventos e Experiências",
          description: "Atividades únicas e workshops especiais",
          link: "/experiences-events",
        },
      ],
    },
    Français: {
      hero: {
        title: title || "Nos Retraites",
        subtitle: subtitle || "Découvrez notre gamme de retraites et d'expériences conçues pour votre bien-être",
      },
      intro: {
        title: introTitle || "Trouvez la retraite parfaite pour vous",
        description: introDescription || "Que vous cherchiez une simple journée de détente, une retraite de plusieurs jours ou une expérience unique à l'autre bout du monde, nous avons l'option idéale pour vous.",
      },
      categories: [
        {
          title: "Retraites d'Un Jour",
          description: "Parfaites pour une pause rapide et revigorante",
          link: "/one-day-retreats",
        },
        {
          title: "Retraites de Bien-être",
          description: "Expériences transformatrices de plusieurs jours",
          link: "/wellness-retreats",
        },
        {
          title: "Événements et Expériences",
          description: "Activités uniques et ateliers spéciaux",
          link: "/experiences-events",
        },
      ],
    },
    English: {
      hero: {
        title: title || "Our Retreats",
        subtitle: subtitle || "Discover our range of retreats and experiences designed for your wellbeing",
      },
      intro: {
        title: introTitle || "Find the perfect retreat for you",
        description: introDescription || "Whether you're looking for a simple day of relaxation, a multi-day retreat or a unique experience on the other side of the world, we have the ideal option for you.",
      },
      categories: [
        {
          title: "One Day Retreats",
          description: "Perfect for a quick and invigorating break",
          link: "/one-day-retreats",
        },
        {
          title: "Wellness Retreats",
          description: "Transformative multi-day experiences",
          link: "/experiences-events",
        },
        {
          title: "Events & Experiences",
          description: "Unique activities and special workshops",
          link: "/experiences-events",
        },
      ],
    },
  };

  const currentContent = content[language as keyof typeof content] || content.Português;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Erro ao carregar</h2>
          <p>Não foi possível carregar o conteúdo. Tente novamente mais tarde.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {currentContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {currentContent.intro.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {currentContent.intro.description}
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <a
                    href={category.link}
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    {language === 'Français' ? 'Découvrir' : language === 'English' ? 'Discover' : 'Descobrir'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosRetraites;
