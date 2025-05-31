import React, { useState } from 'react';

interface NewsletterProps {
  language: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ language }) => {
  const [email, setEmail] = useState('');

  const content = {
    'Português': {
      title: 'Mantenha-se informado',
      description: 'Inscreva-se em nossa newsletter para receber dicas de bem-estar, informações sobre nossos novos retiros e ofertas exclusivas.',
      placeholder: 'Seu endereço de e-mail',
      button: 'Inscrever-se',
      disclaimer: 'Ao se inscrever, você concorda em receber nossas comunicações. Você pode cancelar a inscrição a qualquer momento.'
    },
    'Français': {
      title: 'Restez informé',
      description: 'Inscrivez-vous à notre newsletter pour recevoir des conseils bien-être, des informations sur nos nouvelles retraites et des offres exclusives.',
      placeholder: 'Votre adresse e-mail',
      button: 'S\'inscrire',
      disclaimer: 'En vous inscrivant, vous acceptez de recevoir nos communications. Vous pouvez vous désinscrire à tout moment.'
    },
    'English': {
      title: 'Stay informed',
      description: 'Subscribe to our newsletter to receive wellness tips, information about our new retreats, and exclusive offers.',
      placeholder: 'Your email address',
      button: 'Subscribe',
      disclaimer: 'By subscribing, you agree to receive our communications. You can unsubscribe at any time.'
    }
  };

  const { title, description, placeholder, button, disclaimer } = 
    content[language as keyof typeof content] || content['English'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-24 px-4 bg-[#dfede7]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-light mb-6">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 max-w-md px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors whitespace-nowrap"
          >
            {button}
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">{disclaimer}</p>
      </div>
    </section>
  );
};

export default Newsletter;