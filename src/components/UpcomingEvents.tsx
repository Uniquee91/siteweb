import React, { useState } from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import WaitingListModal from "./WaitingListModal";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import { downloadPDF } from "../utils/downloadPDF";

interface UpcomingEventsProps {
  language: string;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ language }) => {
  useScrollToTop();
  const [product, setProduct] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const query = `*[_type == "upcomingEvents"][0]`;

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  const content = {
    Português: {
      title: "Outros eventos em preparação",
      subtitle:
        "Descubra nossos futuros retiros e reserve seu lugar com antecedência",
      comingSoon: "Em breve",
      learnMore: "Saber mais",
      waitingList: "Lista de espera",
      events: data?.eventsPT,
    },
    Français: {
      title: "Autres événements en préparation",
      subtitle:
        "Découvrez nos futures retraites et réservez votre place à l'avance",
      comingSoon: "Bientôt",
      learnMore: "En savoir plus",
      waitingList: "Liste d'attente",
      events: data?.eventsFR,
    },
    English: {
      title: "Other events in preparation",
      subtitle: "Discover our future retreats and reserve your spot in advance",
      comingSoon: "Coming soon",
      learnMore: "Learn more",
      waitingList: "Waiting list",
      events: data?.eventsEN,
    },
  };

  const { title, subtitle, comingSoon, learnMore, waitingList, events } =
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

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-amber-600 text-sm mb-2">{comingSoon}</div>
                <h3 className="text-xl font-serif mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.date}</p>
                <p className="text-gray-700 text-sm mb-6">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif text-amber-600">
                    {event.price}
                  </span>
                  <div className="space-x-4">
                    <button
                      className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                      style={
                        event?.pdfFile?.asset ? null : { cursor: "not-allowed" }
                      }
                      onClick={() => downloadPDF(event.pdfFile)}
                    >
                      {learnMore}
                    </button>
                    <button
                      className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors text-sm"
                      onClick={() => {
                        setIsModalOpen(true);
                        setProduct(event.title);
                      }}
                    >
                      {waitingList}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waiting List Modal */}
      <WaitingListModal
        product={product}
        language={language}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default UpcomingEvents;
