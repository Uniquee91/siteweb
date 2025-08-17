import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { nosRetraitesQuery } from '../utils/sanityQueries';

const NosRetraites: React.FC = () => {
  // TEST SIMPLE - Ceci devrait s'afficher immédiatement
  console.log("🚀 COMPOSANT NOS RETRAITES CHARGÉ !");
  
  const { data, isLoading, error } = useFetch(nosRetraitesQuery);

  // DEBUG: Ajout de logs pour voir ce qui se passe
  console.log("=== NOS RETRAITES DEBUG ===");
  console.log("Data reçue:", data);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-xl">Erreur lors du chargement des données</div>
      </div>
    );
  }

  const retreatData = data as any;

  // Fonction pour construire l'URL de l'image Sanity
  const getImageUrl = (image: any) => {
    if (!image) return '';
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    const dataset = import.meta.env.VITE_SANITY_DATASET;
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`;
  };

  // Fonction pour obtenir le contenu dans la langue actuelle (FR par défaut)
  const getContent = (obj: any, lang: string = 'fr') => {
    return obj?.[lang] || obj?.fr || 'Contenu non disponible';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section Bannière */}
      {retreatData?.banniere && (
        <div className="relative h-96 bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: `url(${getImageUrl(retreatData.banniere.image)})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">
              {getContent(retreatData.banniere.titre)}
            </h1>
            <p className="text-xl max-w-3xl">
              {getContent(retreatData.banniere.sousTitre)}
            </p>
          </div>
        </div>
      )}

      {/* Section Introduction */}
      {retreatData?.introduction && (
        <div className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {getContent(retreatData.introduction.titre)}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {getContent(retreatData.introduction.description)}
            </p>
          </div>
        </div>
      )}

      {/* Section 1: Expérience d'une journée */}
      {retreatData?.experienceUneJournee && (
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {getContent(retreatData.experienceUneJournee.titre)}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {getContent(retreatData.experienceUneJournee.description)}
                </p>
                
                {retreatData.experienceUneJournee.retraites && (
                  <div className="space-y-4">
                    {retreatData.experienceUneJournee.retraites.map((retraite: any, index: number) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {getContent(retraite.titre)}
                        </h4>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {getContent(retraite.duree)}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {getContent(retraite.lieu)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {retreatData.experienceUneJournee.image && (
                <div className="relative">
                  <img 
                    src={getImageUrl(retreatData.experienceUneJournee.image)}
                    alt={getContent(retreatData.experienceUneJournee.titre)}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Section 2: Retraite bien-être 3/4 jours */}
      {retreatData?.retraiteBienEtre && (
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {retreatData.retraiteBienEtre.image && (
                <div className="relative order-2 lg:order-1">
                  <img 
                    src={getImageUrl(retreatData.retraiteBienEtre.image)}
                    alt={getContent(retreatData.retraiteBienEtre.titre)}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {getContent(retreatData.retraiteBienEtre.titre)}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {getContent(retreatData.retraiteBienEtre.description)}
                </p>
                
                {retreatData.retraiteBienEtre.retraites && (
                  <div className="space-y-4">
                    {retreatData.retraiteBienEtre.retraites.map((retraite: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {getContent(retraite.titre)}
                        </h4>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {getContent(retraite.duree)}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {getContent(retraite.lieu)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 3: Expérience & Events unique4world */}
      {retreatData?.experienceEvents && (
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {getContent(retreatData.experienceEvents.titre)}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {getContent(retreatData.experienceEvents.description)}
                </p>
                
                {retreatData.experienceEvents.retraites && (
                  <div className="space-y-4">
                    {retreatData.experienceEvents.retraites.map((experience: any, index: number) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {getContent(experience.titre)}
                        </h4>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {getContent(experience.duree)}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {getContent(experience.lieu)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {retreatData.experienceEvents.image && (
                <div className="relative">
                  <img 
                    src={getImageUrl(retreatData.experienceEvents.image)}
                    alt={getContent(retreatData.experienceEvents.titre)}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Section 4: Autre événement en préparation */}
      {retreatData?.autreEvenement && (
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {retreatData.autreEvenement.image && (
                <div className="relative order-2 lg:order-1">
                  <img 
                    src={getImageUrl(retreatData.autreEvenement.image)}
                    alt={getContent(retreatData.autreEvenement.titre)}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {getContent(retreatData.autreEvenement.titre)}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {getContent(retreatData.autreEvenement.description)}
                </p>
                
                {retreatData.autreEvenement.retraites && (
                  <div className="space-y-4">
                    {retreatData.autreEvenement.retraites.map((evenement: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {getContent(evenement.titre)}
                        </h4>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {getContent(evenement.duree)}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {getContent(evenement.lieu)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NosRetraites;
