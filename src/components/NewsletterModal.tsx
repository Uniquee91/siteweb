import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNewsletterSubscription } from "../hooks/useNewsletterSubscription";

interface NewsletterModalProps {
  language: string;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { subscribe, loading, withSuccess } =
    useNewsletterSubscription(language);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenNewsletterModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenNewsletterModal", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
    if (withSuccess) {
      handleClose();
    }
  };

  const content = {
    Português: {
      title: "Junte-se à nossa newsletter",
      description:
        "Receba dicas de bem-estar, informações sobre novos retiros e ofertas exclusivas.",
      placeholder: "Seu endereço de e-mail",
      button: "Inscrever-se",
      disclaimer:
        "Ao se inscrever, você concorda em receber nossas comunicações.",
    },
    Français: {
      title: "Rejoignez notre newsletter",
      description:
        "Recevez des conseils bien-être, des informations sur nos nouvelles retraites et des offres exclusives.",
      placeholder: "Votre adresse e-mail",
      button: "S'inscrire",
      disclaimer:
        "En vous inscrivant, vous acceptez de recevoir nos communications.",
    },
    English: {
      title: "Join our newsletter",
      description:
        "Receive wellness tips, information about new retreats, and exclusive offers.",
      placeholder: "Your email address",
      button: "Subscribe",
      disclaimer: "By subscribing, you agree to receive our communications.",
    },
  };

  const { title, description, placeholder, button, disclaimer } =
    content[language as keyof typeof content] || content["English"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
            disabled={loading}
          >
            {loading ? "..." : button}
          </button>
          <p className="text-sm text-gray-500 text-center">{disclaimer}</p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
