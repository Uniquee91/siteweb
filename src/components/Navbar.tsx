import React, { useState } from "react";
import { ChevronDown, Globe, Instagram, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

type NavbarProps = {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  insta: string;
};

const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  insta,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const content = {
    Português: {
      retreats: "Retiros",
      oneDayRetreats: "Retiros de um dia",
      wellnessRetreats: "Retiro bem estar 3/4 dias",
      experiencesEvents: "Experiência & Events",
      upcomingEvents: "Outro evento em preparação",
      blog: "Blog",
      requestRetreat: "Solicite um retiro",
    },
    Français: {
      retreats: "Retraites",
      oneDayRetreats: "Retraites d'une journée",
      wellnessRetreats: "Retraite bien-être 3/4 jours",
      experiencesEvents: "Expérience & Événements",
      upcomingEvents: "Autre événement en préparation",
      blog: "Blog",
      requestRetreat: "Demander une retraite",
    },
    English: {
      retreats: "Retreats",
      oneDayRetreats: "One-day Retreats",
      wellnessRetreats: "Wellness Retreat 3/4 days",
      experiencesEvents: "Experience & Events",
      upcomingEvents: "Other upcoming event",
      blog: "Blog",
      requestRetreat: "Request a retreat",
    },
  };

  const {
    retreats,
    oneDayRetreats,
    wellnessRetreats,
    experiencesEvents,
    upcomingEvents,
    blog,
    requestRetreat,
  } = content[currentLanguage as keyof typeof content];

  return (
    <nav className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link
                to="/retreats"
                className="flex items-center text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                {retreats} <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-80 bg-white shadow-md rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/one-day-retreats"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {oneDayRetreats}
                </Link>
                <Link
                  to="/wellness-retreats"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {wellnessRetreats}
                </Link>
                <Link
                  to="/experiences-events"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {experiencesEvents}
                </Link>
                <Link
                  to="/upcoming-events"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {upcomingEvents}
                </Link>
              </div>
            </div>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
            >
              {blog}
            </Link>
            <Link
              to="/request-retreat"
              className="bg-amber-600 text-white px-5 py-2 rounded-md hover:bg-amber-700 transition-colors"
            >
              {requestRetreat}
            </Link>
            <a
              href={insta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                <Globe className="mr-1 h-4 w-4" />
                {currentLanguage} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white shadow-md rounded-md py-1">
                  <button
                    onClick={() => {
                      onLanguageChange("Português");
                      toggleLanguageMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Português
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange("Français");
                      toggleLanguageMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange("English");
                      toggleLanguageMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-2">
              <div className="px-3 py-2 font-medium text-gray-700">
                {retreats}
              </div>
              <Link
                to="/one-day-retreats"
                className="block px-6 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {oneDayRetreats}
              </Link>
              <Link
                to="/wellness-retreats"
                className="block px-6 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {wellnessRetreats}
              </Link>
              <Link
                to="/experiences-events"
                className="block px-6 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {experiencesEvents}
              </Link>
              <Link
                to="/upcoming-events"
                className="block px-6 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {upcomingEvents}
              </Link>
            </div>
            <Link
              to="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {blog}
            </Link>
            <Link
              to="/request-retreat"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {requestRetreat}
            </Link>
            <div className="px-3 py-2">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center text-gray-700 font-medium"
              >
                <Globe className="mr-1 h-4 w-4" />
                {currentLanguage} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLanguageMenuOpen && (
                <div className="mt-2 pl-4 space-y-1">
                  <button
                    onClick={() => {
                      onLanguageChange("Português");
                      toggleLanguageMenu();
                    }}
                    className="block w-full text-left py-1 text-sm text-gray-700"
                  >
                    Português
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange("Français");
                      toggleLanguageMenu();
                    }}
                    className="block w-full text-left py-1 text-sm text-gray-700"
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange("English");
                      toggleLanguageMenu();
                    }}
                    className="block w-full text-left py-1 text-sm text-gray-700"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
