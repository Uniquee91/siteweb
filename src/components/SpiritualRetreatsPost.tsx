import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

interface SpiritualRetreatsPostProps {
  language: string;
}

const SpiritualRetreatsPost: React.FC<SpiritualRetreatsPostProps> = ({ language }) => {
  useScrollToTop();

  const content = {
    'Português': {
      title: 'Retiros espirituais: uma pausa essencial',
      subtitle: 'Explore os benefícios de uma reconexão profunda consigo mesmo',
      intro: {
        title: 'Por que fazer um retiro espiritual?',
        description: [
          'Em nosso mundo hiperconectado, tirar um tempo para se reconectar consigo mesmo torna-se não um luxo, mas uma necessidade. Os retiros espirituais oferecem esse espaço sagrado de pausa e transformação.',
          'Seja você está em busca de sentido, em período de transição ou simplesmente desejando aprofundar sua prática espiritual, um retiro pode ser o catalisador de uma transformação profunda.'
        ]
      },
      types: {
        title: 'Os diferentes tipos de retiros espirituais',
        items: [
          {
            title: 'Retiros de meditação',
            description: 'Centrados na prática meditativa, esses retiros permitem aprofundar sua prática em um ambiente propício ao silêncio e à introspecção.',
            image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg'
          },
          {
            title: 'Retiros holísticos',
            description: 'Combinando diferentes práticas (yoga, meditação, oficinas criativas), esses retiros oferecem uma abordagem global do bem-estar e da espiritualidade.',
            image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg'
          }
        ]
      },
      benefits: {
        title: 'Os benefícios de um retiro espiritual',
        items: [
          {
            title: 'Reconexão consigo',
            description: 'Encontre sua essência profunda longe das distrações cotidianas'
          },
          {
            title: 'Clareza mental',
            description: 'Ganhe perspectiva e clareza sobre sua vida e suas escolhas'
          },
          {
            title: 'Renovação',
            description: 'Recarregue suas baterias físicas, mentais e emocionais'
          }
        ]
      },
      guide: {
        title: 'Como escolher seu retiro espiritual?',
        subtitle: 'Critérios essenciais',
        criteria: [
          'Alinhamento com seus objetivos pessoais',
          'Duração adaptada à sua disponibilidade',
          'Local e ambiente',
          'Experiência dos facilitadores',
          'Programa e atividades propostas',
          'Número de participantes'
        ]
      },
      testimonials: {
        title: 'Depoimentos de participantes',
        items: [
          {
            name: 'Sofia, 38 anos',
            retreat: 'Retiro de 3 dias em Provence',
            quote: 'Este retiro foi um verdadeiro ponto de virada na minha vida. Encontrei as respostas que procurava há muito tempo e, principalmente, aprendi a ouvir minha voz interior.'
          },
          {
            name: 'Marcos, 45 anos',
            retreat: 'Retiro de uma semana em Bali',
            quote: 'Uma experiência transformadora que me permitiu dar um passo atrás em minha vida e realinhar minhas prioridades. Voltei mais sereno e mais claro sobre meus objetivos.'
          }
        ]
      },
      recommendations: {
        title: 'Nossos retiros recomendados',
        retreats: [
          {
            title: 'Feel Home',
            description: 'Um retiro de 3 dias para se reconectar consigo mesmo em um ambiente natural excepcional.',
            image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg',
            link: '/wellness-retreats'
          },
          {
            title: 'Happy Spondy',
            description: 'Uma experiência única de 4 dias combinando bem-estar físico e espiritual.',
            image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg',
            link: '/wellness-retreats'
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

  const { title, subtitle, intro, types, benefits, guide, testimonials, recommendations } = 
    content[language as keyof typeof content] || content['Português'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg")',
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
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-6">{intro.title}</h2>
          {intro.description.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
          ))}
        </div>

        {/* Types of Retreats */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{types.title}</h2>
          <div className="space-y-12">
            {types.items.map((type, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                <div>
                  <img
                    src={type.image}
                    alt={type.title}
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.items.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-serif mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selection Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-4">{guide.title}</h2>
          <h3 className="text-xl mb-4">{guide.subtitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {guide.criteria.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </ul>
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
                  <p className="text-sm text-gray-500">{testimonial.retreat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Retreats */}
        <div>
          <h2 className="text-3xl font-serif mb-8">{recommendations.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.retreats.map((retreat, index) => (
              <Link key={index} to={retreat.link} className="group">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-amber-600 transition-colors">
                  {retreat.title}
                </h3>
                <p className="text-gray-600">{retreat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualRetreatsPost;