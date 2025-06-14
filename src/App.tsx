import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Experiences from "./components/Experiences";
import Testimonials from "./components/Testimonials";
import CreateRetreat from "./components/CreateRetreat";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
import OneDayRetreats from "./components/OneDayRetreats";
import WellnessRetreats from "./components/WellnessRetreats";
import ExperiencesEvents from "./components/ExperiencesEvents";
import UpcomingEvents from "./components/UpcomingEvents";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import RequestRetreat from "./components/RequestRetreat";
import BlogPost from "./components/BlogPost";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieBanner from "./components/CookieBanner";
import Retreats from "./components/Retreats";
import NewsletterModal from "./components/NewsletterModal";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useFetch } from "./hooks/useFetch";
import "./index.css";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Studio = () => {
  useEffect(() => {
    window.location.href = "https://unique4world.sanity.studio/";
  }, []);
  return <Loader />;
};

const homepageQuery = `*[_type == "homePage"][0]`;
const contactDetailsQuery = `*[_type == "contact"][0]`;

const HomePage: React.FC<{ language: string }> = ({ language }) => {
  useScrollToTop();

  const { data, isLoading, error } = useFetch(homepageQuery);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  return (
    <>
      <Hero language={language} imgUrl={data.heroImg} />
      <Welcome language={language} imgUrl={data.welcomeSectionImg} />
      <Experiences language={language} />
      <Testimonials
        language={language}
        testimonialsFR={data?.testimonialsFR}
        testimonialsEN={data?.testimonialsEN}
        testimonialsPT={data?.testimonialsPT}
      />
      <CreateRetreat language={language} imgUrl={data.ctaSectionImg} />
      <Blog language={language} />
      <Newsletter language={language} />
    </>
  );
};

const App: React.FC = () => {
  const [language, setLanguage] = useState("Português");
  const {
    data: contactDetails,
    isLoading,
    error,
  } = useFetch(contactDetailsQuery);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  return (
    <Router>
      <div className="font-sans antialiased">
        <Navbar
          currentLanguage={language}
          onLanguageChange={setLanguage}
          insta={contactDetails?.insta}
        />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/retreats" element={<Retreats language={language} />} />
          <Route path="/studio" element={<Studio />} />
          <Route
            path="/one-day-retreats"
            element={<OneDayRetreats language={language} />}
          />
          <Route
            path="/wellness-retreats"
            element={<WellnessRetreats language={language} />}
          />
          <Route
            path="/experiences-events"
            element={<ExperiencesEvents language={language} />}
          />
          <Route
            path="/upcoming-events"
            element={<UpcomingEvents language={language} />}
          />
          <Route path="/blog" element={<BlogPage language={language} />} />
          <Route
            path="/blog/:slug"
            element={<BlogPost language={language} />}
          />

          <Route
            path="/request-retreat"
            element={
              <RequestRetreat
                language={language}
                email={contactDetails?.email}
                phone={contactDetails?.phone}
                quotes={contactDetails?.testimonial}
              />
            }
          />
          <Route
            path="/terms"
            element={<TermsAndConditions language={language} />}
          />
          <Route
            path="/privacy"
            element={<PrivacyPolicy language={language} />}
          />
        </Routes>
        <Footer
          language={language}
          email={contactDetails?.email}
          phone={contactDetails?.phone}
          insta={contactDetails?.insta}
        />
        <CookieBanner language={language} />
        <NewsletterModal language={language} />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
