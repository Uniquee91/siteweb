import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import { downloadPDF } from "../utils/downloadPDF";

interface OneDayRetreatsProps {
  language: string;
}

const OneDayRetreats: React.FC<OneDayRetreatsProps> = ({ language }) => {
  useScrollToTop();
  const query = `*[_type == "onDayRetreats"][0]`;

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  const content = {
    Português: {
      title: "Experiência de um dia",
      subtitle: "Tire um dia para se reconectar consigo mesmo",
      retreats: data?.retreatsPT,
    },
    Français: {
      title: "Expérience d'une journée",
      subtitle: "Prenez une journée pour vous reconnecter avec vous-même",
      retreats: data?.retreatsFR,
    },
    English: {
      title: "One-day Experience",
      subtitle: "Take a day to reconnect with yourself",
      retreats: data?.retreatsEN,
    },
  };

  const { title, subtitle, retreats } =
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
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-serif mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
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
                      {retreat.learnMore}
                    </button>
                    <button className="px-6 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors">
                      <a
                        href={retreat.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                      >
                        {retreat.book}
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

export default OneDayRetreats;
