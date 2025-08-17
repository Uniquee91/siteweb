import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { nosRetraitesQuery } from '../utils/sanityQueries';

const DebugNosRetraites: React.FC = () => {
  const { data: nosRetraitesData, isLoading, error } = useFetch(nosRetraitesQuery);

  if (isLoading) return <div className="p-4 bg-blue-100 text-blue-800">Chargement des données...</div>;
  if (error) return <div className="p-4 bg-red-100 text-red-800">Erreur: {String(error)}</div>;

  const data = nosRetraitesData as any;

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Debug - Page Nos Retraites</h2>
      
      {/* Données de base */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Données de base (Nos Retraites)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Bannière titre (FR):</strong> {data?.banniere?.titre?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Bannière sous-titre (FR):</strong> {data?.banniere?.sousTitre?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Introduction titre (FR):</strong> {data?.introduction?.titre?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Introduction description (FR):</strong> {data?.introduction?.description?.fr || 'NON DÉFINI'}
          </div>
        </div>
      </div>

      {/* Structure des 4 sections */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-green-600">Structure des 4 sections imbriquées</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>experienceUneJournee existe:</strong> 
            <span className={`ml-2 px-2 py-1 rounded ${data?.experienceUneJournee ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {data?.experienceUneJournee ? 'OUI' : 'NON'}
            </span>
          </div>
          <div>
            <strong>retraiteBienEtre existe:</strong> 
            <span className={`ml-2 px-2 py-1 rounded ${data?.retraiteBienEtre ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {data?.retraiteBienEtre ? 'OUI' : 'NON'}
            </span>
          </div>
          <div>
            <strong>experienceEvents existe:</strong> 
            <span className={`ml-2 px-2 py-1 rounded ${data?.experienceEvents ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {data?.experienceEvents ? 'OUI' : 'NON'}
            </span>
          </div>
          <div>
            <strong>autreEvenement existe:</strong> 
            <span className={`ml-2 px-2 py-1 rounded ${data?.autreEvenement ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {data?.autreEvenement ? 'OUI' : 'NON'}
            </span>
          </div>
        </div>
      </div>

      {/* Section 1: Expérience d'une journée */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">Section 1 - Expérience d'une journée</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Titre (FR):</strong> {data?.experienceUneJournee?.titre?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Description (FR):</strong> {data?.experienceUneJournee?.description?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Image:</strong> {data?.experienceUneJournee?.image ? 'DÉFINIE' : 'NON DÉFINIE'}
          </div>
          <div>
            <strong>Liste des retraites:</strong> {data?.experienceUneJournee?.retraites ? `${data.experienceUneJournee.retraites.length} retraites` : 'NON DÉFINIE'}
          </div>
        </div>
        
        {data?.experienceUneJournee?.retraites && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <strong>Détails des retraites:</strong>
            {data.experienceUneJournee.retraites.map((retraite: any, index: number) => (
              <div key={index} className="ml-4 mt-2 text-sm">
                • {retraite.titre?.fr || 'Sans titre'} - {retraite.duree?.fr || 'Durée non définie'} - {retraite.lieu?.fr || 'Lieu non défini'}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 2: Retraite bien-être */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">Section 2 - Retraite bien-être 3/4 jours</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Titre (FR):</strong> {data?.retraiteBienEtre?.titre?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Description (FR):</strong> {data?.retraiteBienEtre?.description?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Image:</strong> {data?.retraiteBienEtre?.image ? 'DÉFINIE' : 'NON DÉFINIE'}
          </div>
          <div>
            <strong>Liste des retraites:</strong> {data?.retraiteBienEtre?.retraites ? `${data.retraiteBienEtre.retraites.length} retraites` : 'NON DÉFINIE'}
          </div>
        </div>
        
        {data?.retraiteBienEtre?.retraites && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <strong>Détails des retraites:</strong>
            {data.retraiteBienEtre.retraites.map((retraite: any, index: number) => (
              <div key={index} className="ml-4 mt-2 text-sm">
                • {retraite.titre?.fr || 'Sans titre'} - {retraite.duree?.fr || 'Durée non définie'} - {retraite.lieu?.fr || 'Lieu non défini'}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 3: Expérience & Events */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">Section 3 - Expérience & Events unique4world</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Titre (FR):</strong> {data?.experienceEvents?.titre?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Description (FR):</strong> {data?.experienceEvents?.description?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Image:</strong> {data?.experienceEvents?.image ? 'DÉFINIE' : 'NON DÉFINIE'}
          </div>
          <div>
            <strong>Liste des expériences:</strong> {data?.experienceEvents?.retraites ? `${data.experienceEvents.retraites.length} expériences` : 'NON DÉFINIE'}
          </div>
        </div>
        
        {data?.experienceEvents?.retraites && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <strong>Détails des expériences:</strong>
            {data.experienceEvents.retraites.map((experience: any, index: number) => (
              <div key={index} className="ml-4 mt-2 text-sm">
                • {experience.titre?.fr || 'Sans titre'} - {experience.duree?.fr || 'Durée non définie'} - {experience.lieu?.fr || 'Lieu non défini'}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 4: Autre événement */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">Section 4 - Autre événement en préparation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Titre (FR):</strong> {data?.autreEvenement?.titre?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Description (FR):</strong> {data?.autreEvenement?.description?.fr || 'NON DÉFINI'}
          </div>
          <div>
            <strong>Image:</strong> {data?.autreEvenement?.image ? 'DÉFINIE' : 'NON DÉFINIE'}
          </div>
          <div>
            <strong>Liste des événements:</strong> {data?.autreEvenement?.retraites ? `${data.autreEvenement.retraites.length} événements` : 'NON DÉFINIE'}
          </div>
        </div>
        
        {data?.autreEvenement?.retraites && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <strong>Détails des événements:</strong>
            {data.autreEvenement.retraites.map((evenement: any, index: number) => (
              <div key={index} className="ml-4 mt-2 text-sm">
                • {evenement.titre?.fr || 'Sans titre'} - {evenement.duree?.fr || 'Durée non définie'} - {evenement.lieu?.fr || 'Lieu non défini'}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DebugNosRetraites;
