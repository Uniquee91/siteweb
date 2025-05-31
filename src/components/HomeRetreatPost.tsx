import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

interface HomeRetreatPostProps {
  language: string;
}

const HomeRetreatPost: React.FC<HomeRetreatPostProps> = ({ language }) => {
  useScrollToTop();

  const content = {
    'Português': {
      title: 'Como organizar seu próprio retiro em casa',
      subtitle: 'Crie sua bolha de bem-estar sem sair de casa',
      intro: {
        title: 'Por que um retiro em casa?',
        description: [
          'Embora os retiros organizados ofereçam uma experiência única, é possível criar momentos de reconexão profunda no conforto da sua casa. Um retiro em casa permite manter uma prática regular e integrar os benefícios do bem-estar no seu cotidiano.',
          'Seja para um dia ou um fim de semana, um retiro em casa bem planejado pode ser tão transformador quanto um retiro tradicional.'
        ]
      },
      space: {
        title: 'Criar seu espaço sagrado',
        items: [
          {
            title: 'O ambiente físico',
            description: [
              'Escolher um ambiente calmo e luminoso',
              'Desocupar e limpar o espaço',
              'Adicionar elementos relaxantes (plantas, velas)',
              'Providenciar almofadas e tapetes confortáveis'
            ],
            image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg'
          },
          {
            title: 'O ambiente sensorial',
            description: [
              'Selecionar uma playlist meditativa',
              'Usar óleos essenciais relaxantes',
              'Ajustar a temperatura ideal',
              'Priorizar luz natural ou suave'
            ],
            image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg'
          }
        ]
      },
      schedule: {
        title: 'Planejamento de um dia de retiro',
        items: [
          {
            time: '7h00',
            title: 'Despertar suave',
            description: 'Comece o dia com um chá quente e alguns minutos de meditação silenciosa.'
          },
          {
            time: '8h00',
            title: 'Prática matinal',
            description: 'Sessão de yoga ou alongamentos suaves para despertar o corpo.'
          },
          {
            time: '10h00',
            title: 'Momento de introspecção',
            description: 'Journaling, leitura inspiradora ou meditação guiada.'
          }
        ]
      },
      activities: {
        title: 'Atividades para seu retiro',
        sections: [
          {
            title: 'Práticas corporais',
            items: [
              'Yoga suave',
              'Qi Gong',
              'Alongamentos conscientes',
              'Caminhada meditativa'
            ]
          },
          {
            title: 'Práticas mentais',
            items: [
              'Meditação guiada',
              'Visualização positiva',
              'Exercícios de respiração',
              'Journaling criativo'
            ]
          },
          {
            title: 'Atividades criativas',
            items: [
              'Mandala',
              'Escrita intuitiva',
              'Desenho meditativo',
              'Canto de mantras'
            ]
          }
        ]
      },
      tips: {
        title: 'Conselhos para o sucesso do seu retiro',
        sections: [
          {
            title: 'Preparação',
            items: [
              'Informar seus familiares',
              'Preparar as refeições com antecedência',
              'Desativar as notificações',
              'Reunir o material necessário'
            ]
          },
          {
            title: 'Durante o retiro',
            items: [
              'Respeitar os horários estabelecidos',
              'Manter o silêncio tanto quanto possível',
              'Ouvir suas necessidades',
              'Anotar suas observações e sentimentos'
            ]
          }
        ]
      },
      resources: {
        title: 'Recursos para enriquecer seu retiro',
        items: [
          {
            title: 'Guia de meditação',
            description: 'Técnicas de meditação para aprofundar sua prática.',
            image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg',
            link: '/blog/meditation-benefits'
          },
          {
            title: 'Banhos sonoros',
            description: 'Descubra como utilizar o som para enriquecer sua prática.',
            image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg',
            link: '/blog/mindful-eating'
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

  const { title, subtitle, intro, space, schedule, activities, tips, resources } = 
    content[language as keyof typeof content] || content['Português'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg")',
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

        {/* Sacred Space */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{space.title}</h2>
          <div className="space-y-12">
            {space.items.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{schedule.title}</h2>
          <div className="space-y-6">
            {schedule.items.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-20 h-20 bg-sage-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-700 font-medium">{item.time}</span>
                </div>
                <div className="ml-6 flex-grow">
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{activities.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.sections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{tips.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.sections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
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

export default HomeRetreatPost;