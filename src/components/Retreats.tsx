import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import imgSrc from "../images/img1.jpg";
import { useFetch } from '../hooks/useFetch';
import { nosRetraitesQuery } from '../utils/sanityQueries';
interface RetreatsProps {
  language: string;
}

const Retreats: React.FC<RetreatsProps> = ({ language }) => {
  useScrollToTop();
  
  const { data: sanityData } = useFetch(nosRetraitesQuery);
  const typedSanityData = sanityData as any;

  const getSanityTitle = () => {
    if (typedSanityData?.banniere?.titre) {
      switch (language) {
        case 'Français': return typedSanityData.banniere.titre.fr;
        case 'English': return typedSanityData.banniere.titre.en;
        case 'Português': default: return typedSanityData.banniere.titre.pt;
      }
    }
    return '';
  };

  const getSanitySubtitle = () => {
    if (typedSanityData?.banniere?.sousTitre) {
      switch (language) {
        case 'Français': return typedSanityData.banniere.sousTitre.fr;
        case 'English': return typedSanityData.banniere.sousTitre.en;
        case 'Português': default: return typedSanityData.banniere.sousTitre.pt;
      }
    }
    return '';
  };

  const getSanityIntroTitle = () => {
    if (typedSanityData?.introduction?.titre) {
      switch (language) {
        case 'Français': return typedSanityData.introduction.titre.fr;
        case 'English': return typedSanityData.introduction.titre.en;
        case 'Português': default: return typedSanityData.introduction.titre.pt;
      }
    }
    return '';
  };

  const getSanityIntroDescription = () => {
    if (typedSanityData?.introduction?.description) {
      switch (language) {
        case 'Français': return typedSanityData.introduction.description.fr;
        case 'English': return typedSanityData.introduction.description.en;
        case 'Português': default: return typedSanityData.introduction.description.pt;
      }
    }
    return '';
  };

  const sanityTitle = getSanityTitle();
  const sanitySubtitle = getSanitySubtitle();
  const sanityIntroTitle = getSanityIntroTitle();
  const sanityIntroDescription = getSanityIntroDescription();

  // NOUVELLES FONCTIONS pour les 4 sections de retraites
  const getSectionContent = (sectionKey: string, field: string) => {
    if (typedSanityData?.[sectionKey]?.[field]) {
      switch (language) {
        case 'Français': return typedSanityData[sectionKey][field].fr;
        case 'English': return typedSanityData[sectionKey][field].en;
        case 'Português': default: return typedSanityData[sectionKey][field].pt;
      }
    }
    return '';
  };


  const getSectionImage = (sectionKey: string) => {
    if (!typedSanityData?.[sectionKey]?.image) return '';
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    const dataset = import.meta.env.VITE_SANITY_DATASET;
    const imageRef = typedSanityData[sectionKey].image.asset._ref;
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageRef.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`;
  };

  const content = {
    Português: {
      hero: {
        title: sanityTitle || "Nossos Retiros",
        subtitle: sanitySubtitle || "Explore nossa gama de retiros e experiências projetadas para seu bem-estar",
      },
      intro: {
        title: sanityIntroTitle || "Encontre o retiro perfeito para você",
        description: sanityIntroDescription || "Seja você está procurando um simples dia de relaxamento, um retiro de vários dias ou uma experiência única do outro lado do mundo, temos a opção ideal para você.",
      },
      oneDayRetreats: {
        title: "Experiência de um dia",
        description:
          "Tire um dia para se reconectar consigo mesmo através de atividades de bem-estar e desenvolvimento pessoal.",
        button: "Descobrir estes retiros",
        retreats: [
          {
            title: "Dia de relaxamento e meditação",
            duration: "1 dia",
            location: "Lisboa, Portugal",
            link: "Saber mais",
          },
          {
            title: "Workshop de yoga e alimentação consciente",
            duration: "1 dia",
            location: "Porto, Portugal",
            link: "Saber mais",
          },
        ],
      },
      wellnessRetreats: {
        title: "Retiro bem-estar 3/4 dias",
        description:
          "Ofereça a si mesmo vários dias de desconexão para uma transformação mais profunda e duradoura.",
        button: "Descobrir estes retiros",
        retreats: [
          {
            title: "Retiro bem-être no coração da natureza",
            duration: "3 dias",
            location: "Alentejo, Portugal",
            link: "Saber mais",
          },
          {
            title: "Fim de semana detox corpo e mente",
            duration: "2 dias",
            location: "Sintra, Portugal",
            link: "Saber mais",
          },
        ],
      },
      experiences: {
        title: "Experiência & Events unique4world",
        description:
          "Eventos excepcionais em locais únicos ao redor do mundo para experiências inesquecíveis.",
        button: "Descobrir estes retiros",
        retreats: [
          {
            title: "Experiência única na ilha de Bali",
            duration: "7 dias",
            location: "Ubud, Bali",
            link: "Saber mais",
          },
          {
            title: "Retiro yoga e surf em Portugal",
            duration: "5 dias",
            location: "Ericeira, Portugal",
            link: "Saber mais",
          },
        ],
      },
      upcoming: {
        title: "Outro evento em preparação",
        description:
          "Descubra nossos futuros retiros e eventos atualmente em preparação.",
        button: "Descobrir estes retiros",
        retreats: [
          {
            title: "Estadia mindfulness na montanha",
            duration: "4 dias",
            location: "Serra da Estrela, Portugal",
            link: "Saber mais",
          },
          {
            title: "Retiro silêncio e meditação",
            duration: "5 dias",
            location: "Gerês, Portugal",
            link: "Saber mais",
          },
        ],
      },
    },
    Français: {
      hero: {
        title: sanityTitle || "Nos Retraites",
        subtitle: sanitySubtitle || "Explorez notre gamme de retraites et d'expériences conçues pour votre bien-être",
      },
      intro: {
        title: sanityIntroTitle || "Trouvez la retraite parfaite pour vous",
        description: sanityIntroDescription || "Que vous recherchiez une simple journée de détente, une retraite de plusieurs jours ou une expérience unique à l'autre bout du monde, nous avons l'option idéale pour vous.",
      },
      oneDayRetreats: {
        title: "Expérience d'une journée",
        description:
          "Prenez une journée pour vous reconnecter avec vous-même à travers des activités de bien-être et de développement personnel.",
        button: "Découvrir ces retraites",
        retreats: [
          {
            title: "Journée de relaxation et méditation",
            duration: "1 jour",
            location: "Lisbonne, Portugal",
            link: "En savoir plus",
          },
          {
            title: "Atelier yoga et alimentation consciente",
            duration: "1 jour",
            location: "Porto, Portugal",
            link: "En savoir plus",
          },
        ],
      },
      wellnessRetreats: {
        title: "Retraite bien-être 3/4 jours",
        description:
          "Offrez-vous plusieurs jours de déconnexion pour une transformation plus profonde et durable.",
        button: "Découvrir ces retraites",
        retreats: [
          {
            title: "Retraite bien-être au cœur de la nature",
            duration: "3 jours",
            location: "Alentejo, Portugal",
            link: "En savoir plus",
          },
          {
            title: "Week-end détox corps et esprit",
            duration: "2 jours",
            location: "Sintra, Portugal",
            link: "En savoir plus",
          },
        ],
      },
      experiences: {
        title: "Expérience & Events unique4world",
        description:
          "Événements exceptionnels dans des lieux uniques autour du monde pour des expériences inoubliables.",
        button: "Découvrir ces retraites",
        retreats: [
          {
            title: "Expérience unique sur l'île de Bali",
            duration: "7 jours",
            location: "Ubud, Bali",
            link: "En savoir plus",
          },
          {
            title: "Retraite yoga et surf au Portugal",
            duration: "5 jours",
            location: "Ericeira, Portugal",
            link: "En savoir plus",
          },
        ],
      },
      upcoming: {
        title: "Autre événement en préparation",
        description:
          "Découvrez nos futures retraites et événements actuellement en préparation.",
        button: "Découvrir ces retraites",
        retreats: [
          {
            title: "Séjour mindfulness en montagne",
            duration: "4 jours",
            location: "Serra da Estrela, Portugal",
            link: "En savoir plus",
          },
          {
            title: "Retraite silence et méditation",
            duration: "5 jours",
            location: "Gerês, Portugal",
            link: "En savoir plus",
          },
        ],
      },
    },
    English: {
      hero: {
        title: sanityTitle || "Our Retreats",
        subtitle: sanitySubtitle || "Explore our range of retreats and experiences designed for your well-being",
      },
      intro: {
        title: sanityIntroTitle || "Find the perfect retreat for you",
        description: sanityIntroDescription || "Whether you're looking for a simple day of relaxation, a multi-day retreat, or a unique experience on the other side of the world, we have the ideal option for you.",
      },
      oneDayRetreats: {
        title: "One-day Experience",
        description:
          "Take a day to reconnect with yourself through wellness and personal development activities.",
        button: "Discover these retreats",
        retreats: [
          {
            title: "Relaxation and meditation day",
            duration: "1 day",
            location: "Lisbon, Portugal",
            link: "Learn more",
          },
          {
            title: "Yoga and mindful eating workshop",
            duration: "1 day",
            location: "Porto, Portugal",
            link: "Learn more",
          },
        ],
      },
      wellnessRetreats: {
        title: "Wellness Retreat 3/4 days",
        description:
          "Give yourself several days of disconnection for a deeper and lasting transformation.",
        button: "Discover these retreats",
        retreats: [
          {
            title: "Wellness retreat in the heart of nature",
            duration: "3 days",
            location: "Alentejo, Portugal",
            link: "Learn more",
          },
          {
            title: "Body and mind detox weekend",
            duration: "2 days",
            location: "Sintra, Portugal",
            link: "Learn more",
          },
        ],
      },
      experiences: {
        title: "Experience & Events unique4world",
        description:
          "Exceptional events in unique locations around the world for unforgettable experiences.",
        button: "Discover these retreats",
        retreats: [
          {
            title: "Unique experience in Bali island",
            duration: "7 days",
            location: "Ubud, Bali",
            link: "Learn more",
          },
          {
            title: "Yoga and surf retreat in Portugal",
            duration: "5 days",
            location: "Ericeira, Portugal",
            link: "Learn more",
          },
        ],
      },
      upcoming: {
        title: "Other upcoming event",
        description:
          "Discover our future retreats and events currently in preparation.",
        button: "Discover these retreats",
        retreats: [
          {
            title: "Mountain mindfulness stay",
            duration: "4 days",
            location: "Serra da Estrela, Portugal",
            link: "Learn more",
          },
          {
            title: "Silence and meditation retreat",
            duration: "5 days",
            location: "Gerês, Portugal",
            link: "Learn more",
          },
        ],
      },
    },
  };

  const {
    hero,
    intro,
    oneDayRetreats,
    wellnessRetreats,
    experiences,
    upcoming,
  } = content[language as keyof typeof content] || content["English"];

  const RetreatList = ({
    retreats,
  }: {
    retreats: any[];
  }) => (
    <div className="space-y-4">
      {retreats.map((retreat, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 text-gray-600 group"
        >
          <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
          <div className="flex-grow">
            <h4 className="font-medium text-gray-800 group-hover:text-amber-600 transition-colors">
              {retreat.title}
            </h4>
            <div className="flex items-center space-x-4 text-sm mt-1">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{retreat.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{retreat.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg")',
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif mb-4">{hero.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-6">{intro.title}</h2>
          <p className="text-gray-600">{intro.description}</p>
        </div>

                            {/* Section 1: Expérience d'une journée - DYNAMIQUE SANITY */}
                    {typedSanityData?.experienceUneJournee && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <img
                src={getSectionImage('experienceUneJournee') || "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg"}
                alt={getSectionContent('experienceUneJournee', 'titre')}
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-4">
                {getSectionContent('experienceUneJournee', 'titre') || oneDayRetreats.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {getSectionContent('experienceUneJournee', 'description') || oneDayRetreats.description}
              </p>
              
                                                        {/* Liste des retraites dynamiques */}
                          {typedSanityData.experienceUneJournee.retraites && typedSanityData.experienceUneJournee.retraites.length > 0 ? (
                            <div className="space-y-4 mb-6">
                              {typedSanityData.experienceUneJournee.retraites.map((retraite: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {retraite.titre[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {retraite.duree[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {retraite.lieu[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 mb-6">
                    {oneDayRetreats.retreats.map((retreat, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {retreat.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {retreat.duration}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {retreat.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              
              <Link
                to="/one-day-retreats"
                className="inline-block mt-8 px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
              >
                {oneDayRetreats.button}
              </Link>
            </div>
          </div>
        )}

                            {/* Section 2: Retraite bien-être 3/4 jours - DYNAMIQUE SANITY */}
                    {typedSanityData?.retraiteBienEtre && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-serif mb-4">
                {getSectionContent('retraiteBienEtre', 'titre') || wellnessRetreats.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {getSectionContent('retraiteBienEtre', 'description') || wellnessRetreats.description}
              </p>
              
                                        {/* Liste des retraites dynamiques */}
                          {typedSanityData.retraiteBienEtre.retraites && typedSanityData.retraiteBienEtre.retraites.length > 0 ? (
                            <div className="space-y-4 mb-6">
                              {typedSanityData.retraiteBienEtre.retraites.map((retraite: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {retraite.titre[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {retraite.duree[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {retraite.lieu[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <RetreatList retreats={wellnessRetreats.retreats} />
              )}
              
              <Link
                to="/wellness-retreats"
                className="inline-block mt-8 px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
              >
                {wellnessRetreats.button}
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getSectionImage('retraiteBienEtre') || "https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg"}
                alt={getSectionContent('retraiteBienEtre', 'titre')}
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
            </div>
          </div>
        )}

                            {/* Section 3: Expérience & Events unique4world - DYNAMIQUE SANITY */}
                    {typedSanityData?.experienceEvents && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <img
                src={getSectionImage('experienceEvents') || "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg"}
                alt={getSectionContent('experienceEvents', 'titre')}
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-4">
                {getSectionContent('experienceEvents', 'titre') || experiences.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {getSectionContent('experienceEvents', 'description') || experiences.description}
              </p>
              
                                        {/* Liste des expériences dynamiques */}
                          {typedSanityData.experienceEvents.retraites && typedSanityData.experienceEvents.retraites.length > 0 ? (
                            <div className="space-y-4 mb-6">
                              {typedSanityData.experienceEvents.retraites.map((experience: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {experience.titre[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {experience.duree[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.lieu[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <RetreatList retreats={experiences.retreats} />
              )}
              
              <Link
                to="/experiences-events"
                className="inline-block mt-8 px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
              >
                {experiences.button}
              </Link>
            </div>
          </div>
        )}

                            {/* Section 4: Autre événement en préparation - DYNAMIQUE SANITY */}
                    {typedSanityData?.autreEvenement && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-serif mb-4">
                {getSectionContent('autreEvenement', 'titre') || upcoming.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {getSectionContent('autreEvenement', 'description') || upcoming.description}
              </p>
              
                                        {/* Liste des événements dynamiques */}
                          {typedSanityData.autreEvenement.retraites && typedSanityData.autreEvenement.retraites.length > 0 ? (
                            <div className="space-y-4 mb-6">
                              {typedSanityData.autreEvenement.retraites.map((evenement: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {evenement.titre[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {evenement.duree[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {evenement.lieu[language === 'Français' ? 'fr' : language === 'English' ? 'en' : 'pt']}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <RetreatList retreats={upcoming.retreats} />
              )}
              
              <Link
                to="/upcoming-events"
                className="inline-block mt-8 px-6 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
              >
                {upcoming.button}
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={getSectionImage('autreEvenement') || imgSrc}
                alt={getSectionContent('autreEvenement', 'titre')}
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Retreats;
