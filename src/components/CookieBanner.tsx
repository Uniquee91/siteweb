import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
  language: string;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const content = {
    'Português': {
      message: 'Utilizamos cookies para melhorar sua experiência em nosso site.',
      link: 'Saiba mais sobre nossa política de privacidade',
      accept: 'Aceitar',
      decline: 'Recusar'
    },
    'Français': {
      message: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site.',
      link: 'En savoir plus sur notre politique de confidentialité',
      accept: 'Accepter',
      decline: 'Refuser'
    },
    'English': {
      message: 'We use cookies to improve your experience on our site.',
      link: 'Learn more about our privacy policy',
      accept: 'Accept',
      decline: 'Decline'
    }
  };

  const { message, link, accept, decline } = content[language as keyof typeof content] || content['English'];

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-gray-600">
            {message}{' '}
            <Link to="/privacy" className="text-amber-600 hover:text-amber-700 underline">
              {link}
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-gray-600 hover:text-gray-700 transition-colors"
          >
            {decline}
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner