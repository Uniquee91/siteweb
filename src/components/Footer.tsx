import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  language: string;
  email: string;
  phone: string;
  insta: string;
}

const Footer: React.FC<FooterProps> = ({ language, email, phone, insta }) => {
  const content = {
    Português: {
      description:
        "Descubra experiências de bem-estar e retiros únicos para encontrar harmonia e serenidade.",
      quickLinks: "Links rápidos",
      links: {
        home: "Início",
        retreats: "Nossos retiros",
        blog: "Blog",
        organize: "Organizar seu retiro",
        terms: "Condições gerais",
        privacy: "Política de privacidade",
      },
      contact: "Contato",
      requestRetreat: "Solicitar para organizar seu retiro",
      rights: "Todos os direitos reservados.",
      developedBy: "Site desenvolvido por",
    },
    Français: {
      description:
        "Découvrez des expériences de bien-être et des retraites uniques pour trouver harmonie et sérénité.",
      quickLinks: "Liens rapides",
      links: {
        home: "Accueil",
        retreats: "Nos retraites",
        blog: "Blog",
        organize: "Organiser votre retraite",
        terms: "Conditions générales",
        privacy: "Politique de confidentialité",
      },
      contact: "Contact",
      requestRetreat: "Demander à organiser votre retraite",
      rights: "Tous droits réservés.",
      developedBy: "Site développé par",
    },
    English: {
      description:
        "Discover wellness experiences and unique retreats to find harmony and serenity.",
      quickLinks: "Quick links",
      links: {
        home: "Home",
        retreats: "Our retreats",
        blog: "Blog",
        organize: "Organize your retreat",
        terms: "Terms and conditions",
        privacy: "Privacy policy",
      },
      contact: "Contact",
      requestRetreat: "Request to organize your retreat",
      rights: "All rights reserved.",
      developedBy: "Website developed by",
    },
  };

  const {
    description,
    quickLinks,
    links,
    contact,
    requestRetreat,
    rights,
    developedBy,
  } = content[language as keyof typeof content] || content["English"];

  return (
    <footer className="bg-[#263c36] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-6">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczMDwf3fR2qn1nPtsfnLqKXjhMYUwzsXuiFetEXnyMbMqqXJTZAkXO0CKYzbfkEt5FuEo-7erA4E9WOAI4Qgq_H1tiAYqgnfTtxgBEy0IBMuqSpBUWYIt8lW1JzGfX5cIHYzI4qVKUeB0tqdGvT3Rh9-=w396-h227-s-no-gm"
              alt="Unique4World Logo"
              className="h-16 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-gray-300 mb-6">{description}</p>
          <a
            href={insta}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-300 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">{quickLinks}</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {links.home}
              </Link>
            </li>
            <li>
              <Link
                to="/retreats"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {links.retreats}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {links.blog}
              </Link>
            </li>
            <li>
              <Link
                to="/request-retreat"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {links.organize}
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {links.terms}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {links.privacy}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-medium mb-4">{contact}</h3>
          <div className="space-y-2 mb-6">
            <p className="text-gray-300">{email}</p>
            <p className="text-gray-300">{phone}</p>
          </div>
          <Link
            to="/request-retreat"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            {requestRetreat}
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} UNIQUE4WORLD. {rights}
          </p>
          <p>
            {developedBy}{" "}
            <a
              href="https://propulseo-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400"
            >
              PropulSEO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
