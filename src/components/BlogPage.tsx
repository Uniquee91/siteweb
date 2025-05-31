import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";

interface BlogPageProps {
  language: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ language }) => {
  useScrollToTop();
  const { data, isLoading, error } = useFetch(`*[_type == "blogPost"][0]`);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

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
      posts: data?.postsPT,
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
      posts: data?.postsFR,
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
      posts: data?.postsEN,
    },
  };

  const { title, subtitle, categories, readMore, posts } =
    content[language as keyof typeof content] || content["English"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg")',
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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

export default BlogPage;
