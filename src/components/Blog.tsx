import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogProps {
  language: string;
}

const Blog: React.FC<BlogProps> = ({ language }) => {
  const content = {
    Português: {
      title: "Nosso Blog",
      subtitle:
        "Recursos, conselhos e reflexões para acompanhá-lo em sua jornada de bem-estar",
      categories: {
        wellness: "Bem-estar",
        spirituality: "Espiritualidade",
        yoga: "Yoga",
        practice: "Prática",
        nutrition: "Nutrição",
        therapy: "Terapias alternativas",
      },
      readMore: "Ler o artigo",
      posts: [
        {
          title: "Os benefícios da meditação no estresse diário",
          description:
            "Descubra como alguns minutos de meditação por dia podem transformar sua relação com o estresse e melhorar seu bem-estar geral.",
          category: "wellness",
          image:
            "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg",
          slug: "meditation-benefits",
        },
        {
          title: "Retiros espirituais: por que são essenciais?",
          description:
            "Explore as razões pelas quais tirar um tempo para si durante um retiro pode ser uma experiência transformadora.",
          category: "spirituality",
          image:
            "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg",
          slug: "spiritual-retreats",
        },
        {
          title: "Alimentação consciente: nutrir o corpo e a mente",
          description:
            "Como a abordagem da alimentação consciente pode transformar sua relação com a comida e melhorar sua saúde global.",
          category: "nutrition",
          image:
            "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
          slug: "mindful-eating",
        },
        {
          title: "O poder do yoga: além das posturas",
          description:
            "Uma prática milenar para uma transformação moderna que vai muito além do aspecto físico.",
          category: "yoga",
          image:
            "https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg",
          slug: "yoga-power",
        },
        {
          title: "Como organizar seu próprio retiro em casa",
          description:
            "Crie sua bolha de bem-estar sem sair de casa com nosso guia completo.",
          category: "practice",
          image:
            "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg",
          slug: "home-retreat",
        },
      ],
    },
    Français: {
      title: "Notre Blog",
      subtitle:
        "Ressources, conseils et réflexions pour vous accompagner dans votre parcours de bien-être",
      categories: {
        wellness: "Bien-être",
        spirituality: "Spiritualité",
        yoga: "Yoga",
        practice: "Pratique",
        nutrition: "Nutrition",
        therapy: "Thérapies alternatives",
      },
      readMore: "Lire l'article",
      posts: [
        {
          title: "Les bienfaits de la méditation sur le stress quotidien",
          description:
            "Découvrez comment quelques minutes de méditation par jour peuvent transformer votre relation au stress et améliorer votre bien-être général.",
          category: "wellness",
          image:
            "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg",
          slug: "meditation-benefits",
        },
        {
          title: "Retraites spirituelles : pourquoi sont-elles essentielles ?",
          description:
            "Explorez les raisons pour lesquelles prendre du temps pour soi lors d'une retraite peut être une expérience transformatrice.",
          category: "spirituality",
          image:
            "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg",
          slug: "spiritual-retreats",
        },
        {
          title: "Alimentation consciente : nourrir le corps et l'esprit",
          description:
            "Comment l'approche de l'alimentation consciente peut transformer votre relation à la nourriture et améliorer votre santé globale.",
          category: "nutrition",
          image:
            "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
          slug: "mindful-eating",
        },
        {
          title: "Le pouvoir du yoga : au-delà des postures",
          description:
            "Une pratique millénaire pour une transformation moderne qui va bien au-delà de l'aspect physique.",
          category: "yoga",
          image:
            "https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg",
          slug: "yoga-power",
        },
        {
          title: "Comment organiser sa propre retraite à domicile",
          description:
            "Créez votre bulle de bien-être sans quitter votre maison avec notre guide complet.",
          category: "practice",
          image:
            "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg",
          slug: "home-retreat",
        },
      ],
    },
    English: {
      title: "Our Blog",
      subtitle:
        "Resources, advice, and reflections to accompany you on your wellness journey",
      categories: {
        wellness: "Wellness",
        spirituality: "Spirituality",
        yoga: "Yoga",
        practice: "Practice",
        nutrition: "Nutrition",
        therapy: "Alternative Therapies",
      },
      readMore: "Read article",
      posts: [
        {
          title: "The benefits of meditation on daily stress",
          description:
            "Discover how a few minutes of meditation per day can transform your relationship with stress and improve your overall well-being.",
          category: "wellness",
          image:
            "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg",
          slug: "meditation-benefits",
        },
        {
          title: "Spiritual retreats: why are they essential?",
          description:
            "Explore the reasons why taking time for yourself during a retreat can be a transformative experience.",
          category: "spirituality",
          image:
            "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg",
          slug: "spiritual-retreats",
        },
        {
          title: "Mindful eating: nourishing body and mind",
          description:
            "How the mindful eating approach can transform your relationship with food and improve your overall health.",
          category: "nutrition",
          image:
            "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
          slug: "mindful-eating",
        },
        {
          title: "The power of yoga: beyond postures",
          description:
            "An ancient practice for modern transformation that goes far beyond the physical aspect.",
          category: "yoga",
          image:
            "https://images.pexels.com/photos/8436461/pexels-photo-8436461.jpeg",
          slug: "yoga-power",
        },
        {
          title: "How to organize your own retreat at home",
          description:
            "Create your wellness bubble without leaving your home with our complete guide.",
          category: "practice",
          image:
            "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg",
          slug: "home-retreat",
        },
      ],
    },
  };

  const { title, subtitle, categories, readMore, posts } =
    content[language as keyof typeof content] || content["English"];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-light mt-2 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-amber-600 text-sm mb-2">
                  {categories[post.category as keyof typeof categories]}
                </div>
                <h3 className="text-xl font-serif mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
                >
                  {readMore}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
