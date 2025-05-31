import React from "react";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  language: string;
  testimonialsFR: any;
  testimonialsEN: any;
  testimonialsPT: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  language,
  testimonialsEN,
  testimonialsFR,
  testimonialsPT,
}) => {
  const content = {
    Português: {
      subtitle: "Depoimentos",
      title: "O que dizem nossos participantes",
      testimonials: testimonialsPT,
    },
    Français: {
      subtitle: "Témoignages",
      title: "Ce que disent nos participants",
      testimonials: testimonialsFR,
    },
    English: {
      subtitle: "Testimonials",
      title: "What our participants say",
      testimonials: testimonialsEN,
    },
  };

  const { subtitle, title, testimonials } =
    content[language as keyof typeof content] || content["English"];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">{subtitle}</span>
          <h2 className="text-4xl font-serif font-light mt-2">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <Quote className="text-amber-600 h-8 w-8 mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.retreat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
