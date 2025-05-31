import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExperiencesProps {
  language: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ language }) => {
  const content = {
    'Português': {
      subtitle: 'Nossas ofertas',
      title: 'Experiências para todas as necessidades',
      description: 'Explore nossa gama de retiros e experiências projetadas para atender a todas as necessidades, seja você tem um dia ou uma semana, em Portugal ou no exterior.',
      learnMore: 'En savoir plus',
      experiences: [
        {
          title: 'Banho de Floresta',
          location: 'Serra da Arrábida',
          duration: '1 dia',
          description: '7 horas de imersão na natureza - Serra da Arrábida. Desconecte do ritmo acelerado do dia a dia e reconecte-se com a sua essência numa experiência transformadora na natureza.',
          image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
          link: '/one-day-retreats'
        },
        {
          title: 'Feel Home',
          location: 'Sesimbra',
          duration: '3 dias',
          description: 'Um retiro pensado para quem vive com intensidade — empreendedores, atletas, líderes e criativos — que procuram um momento de pausa, realinhamento e regeneração.',
          image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg',
          link: '/wellness-retreats'
        },
        {
          title: 'Lisboa Romântica',
          location: 'Lisboa',
          duration: '5 horas',
          description: 'Um fim de tarde mágico que combina o encanto do rio Tejo com a alma da música portuguesa, perfeita para quem deseja viver Lisboa de forma autêntica e envolvente.',
          image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
          link: '/experiences-events'
        },
        {
          title: 'Happy Spondy',
          location: 'Faro',
          duration: '4 dias',
          description: 'Um retiro especialmente dedicada a pessoas com Espondilartrite e/ou dores crônicas, que procuram aliviar tensões físicas e emocionais num ambiente seguro, acolhedor e natural.',
          image: 'https://images.pexels.com/photos/8436700/pexels-photo-8436700.jpeg',
          link: '/wellness-retreats'
        }
      ]
    },
    'Français': {
      subtitle: 'Nos offres',
      title: 'Des expériences pour tous les besoins',
      description: 'Explorez notre gamme de retraites et d\'expériences conçues pour répondre à tous les besoins, que vous ayez une journée ou une semaine, au Portugal ou à l\'étranger.',
      learnMore: 'En savoir plus',
      experiences: [
        {
          title: 'Bain de Forêt',
          location: 'Serra da Arrábida',
          duration: '1 jour',
          description: '7 heures d\'immersion dans la nature - Serra da Arrábida. Déconnectez-vous du rythme effréné du quotidien et reconnectez-vous avec votre essence lors d\'une expérience transformatrice dans la nature.',
          image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
          link: '/one-day-retreats'
        },
        {
          title: 'Feel Home',
          location: 'Sesimbra',
          duration: '3 jours',
          description: 'Une retraite pensée pour ceux qui vivent intensément — entrepreneurs, athlètes, leaders et créatifs — qui cherchent un moment de pause, de réalignement et de régénération.',
          image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg',
          link: '/wellness-retreats'
        },
        {
          title: 'Lisbonne Romantique',
          location: 'Lisbonne',
          duration: '5 heures',
          description: 'Une fin d\'après-midi magique qui combine le charme du Tage avec l\'âme de la musique portugaise, parfaite pour ceux qui souhaitent vivre Lisbonne de manière authentique et immersive.',
          image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
          link: '/experiences-events'
        },
        {
          title: 'Happy Spondy',
          location: 'Faro',
          duration: '4 jours',
          description: 'Une retraite spécialement dédiée aux personnes atteintes de spondylarthrite et/ou de douleurs chroniques, qui cherchent à soulager les tensions physiques et émotionnelles dans un environnement sûr, accueillant et naturel.',
          image: 'https://images.pexels.com/photos/8436700/pexels-photo-8436700.jpeg',
          link: '/wellness-retreats'
        }
      ]
    },
    'English': {
      subtitle: 'Our offerings',
      title: 'Experiences for every need',
      description: 'Explore our range of retreats and experiences designed to meet all needs, whether you have a day or a week, in Portugal or abroad.',
      learnMore: 'Learn more',
      experiences: [
        {
          title: 'Forest Bathing',
          location: 'Serra da Arrábida',
          duration: '1 day',
          description: '7 hours of nature immersion - Serra da Arrábida. Disconnect from the fast pace of daily life and reconnect with your essence in a transformative experience in nature.',
          image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
          link: '/one-day-retreats'
        },
        {
          title: 'Feel Home',
          location: 'Sesimbra',
          duration: '3 days',
          description: 'A retreat designed for those who live intensely — entrepreneurs, athletes, leaders, and creatives — who seek a moment of pause, realignment, and regeneration.',
          image: 'https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg',
          link: '/wellness-retreats'
        },
        {
          title: 'Romantic Lisbon',
          location: 'Lisbon',
          duration: '5 hours',
          description: 'A magical late afternoon that combines the charm of the Tagus River with the soul of Portuguese music, perfect for those who wish to experience Lisbon in an authentic and immersive way.',
          image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
          link: '/experiences-events'
        },
        {
          title: 'Happy Spondy',
          location: 'Faro',
          duration: '4 days',
          description: 'A retreat specially dedicated to people with Spondylarthritis and/or chronic pain, who seek to relieve physical and emotional tensions in a safe, welcoming, and natural environment.',
          image: 'https://images.pexels.com/photos/8436700/pexels-photo-8436700.jpeg',
          link: '/wellness-retreats'
        }
      ]
    }
  };

  const { subtitle, title, description, learnMore, experiences } = content[language as keyof typeof content] || content['English'];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">{subtitle}</span>
          <h2 className="text-4xl font-serif font-light mt-2 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{experience.duration}</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-3">{experience.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                <Link
                  to={experience.link}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
                >
                  {learnMore}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;