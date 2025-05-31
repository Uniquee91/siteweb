import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

interface MindfulEatingPostProps {
  language: string;
}

const MindfulEatingPost: React.FC<MindfulEatingPostProps> = ({ language }) => {
  useScrollToTop();

  const content = {
    'Português': {
      title: 'Alimentação consciente: nutrir o corpo e a mente',
      subtitle: 'Uma jornada sensorial para uma relação mais saudável com a comida',
      intro: {
        sections: [
          {
            title: 'O que é alimentação consciente?',
            description: 'A alimentação consciente é uma abordagem que nos convida a prestar atenção especial à forma como comemos, usando todos os nossos sentidos e estando plenamente presentes no momento.'
          },
          {
            title: 'Por que é importante?',
            description: 'Em nossa sociedade do "comer rápido", encontrar uma conexão consciente com nossa alimentação permite desenvolver uma relação mais saudável com a comida e nosso corpo.'
          }
        ]
      },
      principles: {
        title: 'Os 5 princípios da alimentação consciente',
        items: [
          {
            title: 'Presença',
            description: 'Estar plenamente presente durante a refeição, sem distrações',
            image: 'https://images.pexels.com/photos/6941884/pexels-photo-6941884.jpeg'
          },
          {
            title: 'Atenção',
            description: 'Observar cores, texturas, aromas e sabores',
            image: 'https://images.pexels.com/photos/6941886/pexels-photo-6941886.jpeg'
          },
          {
            title: 'Gratidão',
            description: 'Apreciar a origem e o percurso dos alimentos',
            image: 'https://images.pexels.com/photos/6941887/pexels-photo-6941887.jpeg'
          }
        ]
      },
      exercises: {
        title: 'Exercícios práticos',
        items: [
          {
            title: 'O exercício da uva passa',
            description: 'Pegue uma uva passa e explore-a com todos os seus sentidos durante 5 minutos. Observe sua textura, aroma e depois coma-a muito lentamente, notando todas as sensações.'
          },
          {
            title: 'A refeição em silêncio',
            description: 'Uma vez por semana, faça uma refeição em completo silêncio. Concentre-se apenas no ato de comer e nas sensações que o acompanham.'
          }
        ]
      },
      testimonials: {
        title: 'Palavras de praticantes',
        items: [
          {
            name: 'Clara, 29 anos',
            duration: 'Pratica há 1 ano',
            quote: 'A alimentação consciente transformou completamente minha relação com a comida. Eu saboreio cada bocado e me sinto mais conectada com meu corpo.'
          },
          {
            name: 'Paulo, 35 anos',
            duration: 'Pratica há 6 meses',
            quote: 'Essa abordagem me ajudou a perder peso naturalmente, sem dieta. Como menos mas aproveito muito mais minhas refeições.'
          }
        ]
      },
      resources: {
        title: 'Para ir mais longe',
        items: [
          {
            title: 'Nossos retiros de bem-estar',
            description: 'Descubra nossos retiros que incluem oficinas de alimentação consciente.',
            image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg',
            link: '/wellness-retreats'
          },
          {
            title: 'Meditação no dia a dia',
            description: 'Aprofunde sua prática de mindfulness.',
            image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg',
            link: '/blog/meditation-benefits'
          }
        ]
      }
    },
    'Français': {
      // French content would go here
    },
    'English': {
      // English content would go here
    }
  };

  const { title, subtitle, intro, principles, exercises, testimonials, resources } = 
    content[language as keyof typeof content] || content['Português'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {intro.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-serif mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{principles.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.items.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={principle.image}
                  alt={principle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercises */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{exercises.title}</h2>
          <div className="space-y-8">
            {exercises.items.map((exercise, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-medium mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif">{exercise.title}</h3>
                </div>
                <p className="text-gray-600 ml-12">{exercise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div>
          <h2 className="text-3xl font-serif mb-8">{resources.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.items.map((resource, index) => (
              <Link key={index} to={resource.link} className="group">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-amber-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindfulEatingPost;