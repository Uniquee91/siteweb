import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";
import { downloadPDF } from "../utils/downloadPDF";

interface WellnessRetreatsProps {
  language: string;
}

const WellnessRetreats: React.FC<WellnessRetreatsProps> = ({ language }) => {
  useScrollToTop();

  const query = `*[_type == "wellnessRetreats"][0]`;

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  const content = {
    Português: {
      title: "Retiro bem-estar 3/4 dias",
      subtitle:
        "Ofereça-se vários dias de desconexão para uma transformação mais profunda",
      retreats: data?.retreatsPT,
      learnMore: "Saber mais",
      book: "Reservar agora",
    },
    Français: {
      title: "Retraite bien-être 3/4 jours",
      subtitle:
        "Offrez-vous plusieurs jours de déconnexion pour une transformation plus profonde",
      retreats: data?.retreatsFR,
      learnMore: "En savoir plus",
      book: "Réserver maintenant",
    },
    English: {
      title: "Wellness Retreat 3/4 days",
      subtitle:
        "Treat yourself to several days of disconnection for a deeper transformation",
      retreats: data?.retreatsEN,
      learnMore: "Learn more",
      book: "Book now",
    },
  };

  const { title, subtitle, retreats, learnMore, book } =
    content[language as keyof typeof content] || content["English"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data?.heroImgUrl})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>

      {/* Retreats Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {retreats.map((retreat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={retreat.image}
                  alt={retreat.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{retreat.title}</h3>
                <p className="text-gray-600 mb-4">{retreat.date}</p>
                <p className="text-gray-700 mb-6">{retreat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif text-amber-600">
                    {retreat.price}
                  </span>
                  <div className="space-x-4">
                    <button
                      className="px-6 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                      style={
                        retreat?.pdfFile?.asset
                          ? null
                          : { cursor: "not-allowed" }
                      }
                      onClick={() => downloadPDF(retreat.pdfFile)}
                    >
                      {learnMore}
                    </button>
                    <button className="px-6 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors">
                      <a
                        href={retreat.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                      >
                        {book}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessRetreats;
