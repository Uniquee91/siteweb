import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import client, { imgUrlBuilder } from "../sanityClient"; // Ensure you have a Sanity client configured

interface BlogPostProps {
  language: string;
}

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

const BlogPost: React.FC<BlogPostProps> = ({ language }) => {
  useScrollToTop();
  const { data, isLoading, error } = useFetch(`*[_type == "blogPost"][0]`);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  const params = useParams();
  const slug = params.slug;
  const arrayOfBlogs =
    language === "Português"
      ? data?.postsPT
      : language === "Français"
      ? data?.postsFR
      : data?.postsEN;

  const allContent = arrayOfBlogs.find((post) => post.slug === slug);

  const { title, description: subtitle, image, content } = allContent;

  const myPortableTextComponents = {
    types: {
      htmlEmbed: ({ value }: any) => (
        <div dangerouslySetInnerHTML={{ __html: value.code }} />
      ),
      image: ({ value }: any) => (
        <div className="my-[2rem]">
          {value?.asset?._ref && (
            <img
              src={imgUrlBuilder(value).width(800).height(500).url()}
              alt="Blog Image"
              className="max-w-full w-full md:w-2/3 h-auto rounded-lg shadow-md my-4"
            />
          )}
        </div>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="font-bold">{children}</strong>
      ),
    },
  };

  return (
    <div className="min-h-screen article-container">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PortableText value={content} components={myPortableTextComponents} />
      </div>
      <br />
      <br />
    </div>
  );
};

export default BlogPost;
