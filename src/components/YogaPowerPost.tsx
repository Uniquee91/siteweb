import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

interface YogaPowerPostProps {
  language: string;
}

const YogaPowerPost: React.FC<YogaPowerPostProps> = ({ language }) => {
  useScrollToTop();

  const content = {
    'Português': {
      title: 'O poder do yoga: além das posturas',
      subtitle: 'Uma prática milenar para uma transformação moderna',
      intro: {
        title: 'Yoga: muito mais que uma prática física',
        description: [
          'Embora frequentemente associado a posturas complexas e flexibilidade, o yoga é antes de tudo uma prática holística que toca todos os aspectos do nosso ser: corpo, mente e alma.',
          'Esta disciplina milenar, nascida na Índia, se adapta perfeitamente aos desafios da nossa vida moderna e oferece ferramentas valiosas para navegar em nosso cotidiano com mais consciência e equilíbrio.'
        ]
      },
      dimensions: {
        title: 'As dimensões transformadoras do yoga',
        items: [
          {
            title: 'A dimensão física',
            description: 'Além da flexibilidade, o yoga fortalece o corpo em profundidade, melhora a postura e estimula os órgãos internos para uma melhor saúde geral.',
            image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg'
          },
          {
            title: 'A dimensão mental',
            description: 'A prática regular do yoga desenvolve a concentração, reduz o estresse e melhora a qualidade do sono.',
            image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg'
          }
        ]
      },
      benefits: {
        title: 'Benefícios cientificamente comprovados',
        items: [
          {
            title: 'Redução do estresse',
            description: 'Redução significativa do cortisol e melhora na resposta ao estresse'
          },
          {
            title: 'Saúde cardíaca',
            description: 'Melhora da circulação e redução da pressão arterial'
          },
          {
            title: 'Saúde mental',
            description: 'Redução dos sintomas de ansiedade e depressão'
          }
        ]
      },
      relationships: {
        title: 'O impacto do yoga em nossos relacionamentos',
        items: [
          {
            title: 'Desenvolvimento da empatia',
            description: 'A prática regular do yoga nos ajuda a desenvolver uma maior consciência de nós mesmos e dos outros, favorecendo relacionamentos mais autênticos e harmoniosos.',
            image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg'
          },
          {
            title: 'Comunicação consciente',
            description: 'O yoga nos ensina a escuta e a presença, qualidades essenciais para uma comunicação mais profunda e autêntica.',
            image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg'
          }
        ]
      },
      testimonials: {
        title: 'Depoimentos de praticantes',
        items: [
          {
            name: 'Júlia, 32 anos',
            duration: 'Pratica yoga há 3 anos',
            quote: 'O yoga transformou minha vida muito além do tapete. Gerencio melhor meu estresse, durmo melhor e meus relacionamentos melhoraram. Tornou-se muito mais que uma simples prática física.'
          },
          {
            name: 'Nicolas, 41 anos',
            duration: 'Pratica yoga há 5 anos',
            quote: 'Como empresário, o yoga me ajuda a manter meu equilíbrio. Aprendi a respirar nos momentos de estresse e a dar um passo atrás quando necessário.'
          }
        ]
      },
      resources: {
        title: 'Aprofunde sua prática',
        items: [
          {
            title: 'Feel Home',
            description: 'Um retiro de 3 dias para aprofundar sua prática de yoga em um ambiente excepcional.',
            image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg',
            link: '/wellness-retreats'
          },
          {
            title: 'Meditação e yoga',
            description: 'Descubra como combinar meditação e yoga para uma prática mais profunda.',
            image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg',
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

  const { title, subtitle, intro, dimensions, benefits, relationships, testimonials, resources } = 
    content[language as keyof typeof content] || content['Português'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg")',
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

        {/* Dimensions */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{dimensions.title}</h2>
          <div className="space-y-12">
            {dimensions.items.map((dimension, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif mb-4">{dimension.title}</h3>
                  <p className="text-gray-600">{dimension.description}</p>
                </div>
                <div>
                  <img
                    src={dimension.image}
                    alt={dimension.title}
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

        {/* Relationships Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">{relationships.title}</h2>
          <div className="space-y-12">
            {relationships.items.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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

export default YogaPowerPost;