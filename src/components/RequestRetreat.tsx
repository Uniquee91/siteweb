import React, { useState } from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Shield, Scale, MapPin, Coins } from "lucide-react";
import { useResendContactForm } from "../hooks/resend/useResendContactForm";

const lngKey = {
  English: "en",
  Français: "fr",
  Português: "pt",
};

interface RequestRetreatProps {
  language: string;
  email: string;
  phone: string;
  quotes: any;
}

const RequestRetreat: React.FC<RequestRetreatProps> = ({
  language,
  email,
  phone,
  quotes,
}) => {
  useScrollToTop();
  const key = lngKey[language];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    retreatType: "",
    participants: "",
    duration: "",
    location: "",
    interests: [] as string[],
    project: "",
    consent: false,
  });

  const { submitForm, loading } = useResendContactForm({
    onSuccess: () => {
      // Optionally, you can show a success message here
    },
    onError: (error) => {
      console.error(error);
      // Optionally, you can show an error message here
    },
    lang: language,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  const content = {
    Português: {
      hero: {
        title: "Solicitar um retiro",
        subtitle: "Crie uma experiência única adaptada às suas necessidades",
      },
      title: "Um retiro sob medida para você",
      description:
        "Seja você deseja organizar um retiro para si mesmo, sua família, seus amigos ou sua empresa, nossa equipe de especialistas o acompanha na criação de uma experiência que atende perfeitamente às suas expectativas.",
      features: [
        {
          icon: Shield,
          title: "Personalização completa",
          description:
            "Cada detalhe do seu retiro é personalizável: duração, temática, atividades, hospedagem, alimentação e muito mais.",
        },
        {
          icon: Scale,
          title: "Acompanhamento especializado",
          description:
            "Nossa equipe o guia em cada etapa, desde a concepção inicial até a realização do seu retiro, para uma experiência sem preocupações.",
        },
        {
          icon: MapPin,
          title: "Locais excepcionais",
          description:
            "Acesse nossa rede de locais excepcionais, em Portugal e no exterior, para criar o ambiente perfeito para seu retiro.",
        },
        {
          icon: Coins,
          title: "Soluções para todos os orçamentos",
          description:
            "Oferecemos opções para todos os orçamentos, sem comprometer a qualidade da experiência.",
        },
      ],
      testimonial: {
        quote: `"${quotes[key].quote}"`,
        author: `${quotes[key].author}`,
      },
      contact: {
        title: "Contate-nos diretamente",
        description:
          "Prefere discutir seu projeto por telefone ou e-mail? Entre em contato diretamente:",
        phone: phone,
        email: email,
      },
      form: {
        title: "Formulário de solicitação",
        firstName: "Nome *",
        lastName: "Sobrenome *",
        email: "Email *",
        phone: "Telefone",
        retreatType: "Tipo de retiro *",
        participants: "Número de participantes",
        duration: "Duração desejada",
        location: "Preferência de local",
        interests: "Áreas de interesse (múltipla escolha)",
        project: "Seu projeto de retiro *",
        projectPlaceholder:
          "Descreva suas expectativas, necessidades específicas e qualquer outra informação relevante para seu projeto...",
        consent:
          "Aceito que minhas informações sejam utilizadas para ser contatado no âmbito da minha solicitação de retiro. *",
        submit: "Enviar minha solicitação",
        required: "* Campos obrigatórios",
      },
      interestOptions: [
        { label: "Yoga", value: "yoga" },
        { label: "Mindfulness", value: "mindfulness" },
        { label: "Meditação", value: "meditation" },
        { label: "Caminhada", value: "hiking" },
        { label: "Nutrição consciente", value: "nutrition" },
        { label: "Arteterapia", value: "artTherapy" },
        { label: "Desenvolvimento pessoal", value: "personal" },
        { label: "Team building", value: "teamBuilding" },
      ],
      faq: {
        title: "Perguntas frequentes",
        questions: [
          {
            question:
              "Com quanto tempo de antecedência devo fazer minha solicitação?",
            answer:
              "Recomendamos entrar em contato com pelo menos 2 meses de antecedência para retiros personalizados, especialmente se você tiver datas específicas em mente. Para retiros corporativos ou grandes grupos, um prazo de 3 a 6 meses é preferível.",
          },
          {
            question: "Qual é o orçamento mínimo para um retiro personalizado?",
            answer:
              "O custo varia consideravelmente dependendo de suas necessidades, duração, local e número de participantes. Trabalhamos com todos os orçamentos e podemos propor opções adaptadas às suas restrições financeiras. Entre em contato para um orçamento personalizado.",
          },
          {
            question: "Vocês podem organizar um retiro no exterior?",
            answer:
              "Absolutamente! Organizamos retiros em todo o mundo. Nossa equipe possui experiência em muitos destinos e pode gerenciar todos os aspectos logísticos para oferecer uma experiência sem preocupações.",
          },
          {
            question: "O que acontece após o envio da minha solicitação?",
            answer:
              "Após receber sua solicitação, Luis entrará em contato em 48 horas para discutir seu projeto em detalhes. Em seguida, organizaremos uma chamada ou reunião para aprofundar suas necessidades e começar a elaborar uma proposta sob medida.",
          },
        ],
      },
      durationOptions: [
        { label: "1 dia", value: "1" },
        { label: "2 - 3 dias", value: "2-3" },
        { label: "+ de 3 dias", value: "+3" },
      ],
      locationOptions: [
        { label: "Portugal", value: "portugal" },
        { label: "França", value: "france" },
        { label: "Outro", value: "autre" },
      ],
      retreatTypeOptions: [
        { label: "Bem-estar", value: "wellness" },
        { label: "Silenciosa", value: "silent" },
        { label: "Espiritual", value: "spiritual" },
        { label: "Outros", value: "autre" },
      ],
    },
    Français: {
      hero: {
        title: "Demander une retraite",
        subtitle: "Créez une expérience unique adaptée à vos besoins",
      },
      title: "Une retraite sur mesure pour vous",
      description:
        "Que vous souhaitiez organiser une retraite pour vous-même, votre famille, vos amis ou votre entreprise, notre équipe d'experts vous accompagne dans la création d'une expérience qui répond parfaitement à vos attentes.",
      features: [
        {
          icon: Shield,
          title: "Personnalisation complète",
          description:
            "Chaque détail de votre retraite est personnalisable : durée, thématique, activités, hébergement, restauration et bien plus encore.",
        },
        {
          icon: Scale,
          title: "Accompagnement spécialisé",
          description:
            "Notre équipe vous guide à chaque étape, de la conception initiale à la réalisation de votre retraite, pour une expérience sans soucis.",
        },
        {
          icon: MapPin,
          title: "Lieux exceptionnels",
          description:
            "Accédez à notre réseau de lieux exceptionnels, au Portugal et à l'étranger, pour créer l'environnement parfait pour votre retraite.",
        },
        {
          icon: Coins,
          title: "Solutions pour tous les budgets",
          description:
            "Nous proposons des options pour tous les budgets, sans compromettre la qualité de l'expérience.",
        },
      ],
      testimonial: {
        quote: `"${quotes[key].quote}"`,
        author: `${quotes[key].author}`,
      },
      contact: {
        title: "Contactez-nous directement",
        description:
          "Vous préférez discuter de votre projet par téléphone ou par email ? Contactez-nous directement :",
        phone: phone,
        email: email,
      },
      form: {
        title: "Formulaire de demande",
        firstName: "Prénom *",
        lastName: "Nom *",
        email: "Email *",
        phone: "Téléphone",
        retreatType: "Type de retraite *",
        participants: "Nombre de participants",
        duration: "Durée souhaitée",
        location: "Préférence de lieu",
        interests: "Domaines d'intérêt (choix multiple)",
        project: "Votre projet de retraite *",
        projectPlaceholder:
          "Décrivez vos attentes, besoins spécifiques et toute autre information pertinente pour votre projet...",
        consent:
          "J'accepte que mes informations soient utilisées pour être contacté dans le cadre de ma demande de retraite. *",
        submit: "Envoyer ma demande",
        required: "* Champs obligatoires",
      },
      interestOptions: [
        { label: "Yoga", value: "yoga" },
        { label: "Pleine conscience", value: "mindfulness" },
        { label: "Méditation", value: "meditation" },
        { label: "Randonnée", value: "hiking" },
        { label: "Nutrition consciente", value: "nutrition" },
        { label: "Art-thérapie", value: "artTherapy" },
        { label: "Développement personnel", value: "personal" },
        { label: "Team building", value: "teamBuilding" },
      ],
      faq: {
        title: "Questions fréquentes",
        questions: [
          {
            question: "Combien de temps à l'avance dois-je faire ma demande ?",
            answer:
              "Nous recommandons de nous contacter au moins 2 mois à l'avance pour les retraites personnalisées, surtout si vous avez des dates spécifiques en tête. Pour les retraites d'entreprise ou les grands groupes, un délai de 3 à 6 mois est préférable.",
          },
          {
            question:
              "Quel est le budget minimum pour une retraite personnalisée ?",
            answer:
              "Le coût varie considérablement selon vos besoins, la durée, le lieu et le nombre de participants. Nous travaillons avec tous les budgets et pouvons proposer des options adaptées à vos contraintes financières. Contactez-nous pour un devis personnalisé.",
          },
          {
            question: "Pouvez-vous organiser une retraite à l'étranger ?",
            answer:
              "Absolument ! Nous organisons des retraites dans le monde entier. Notre équipe possède une expérience dans de nombreuses destinations et peut gérer tous les aspects logistiques pour offrir une expérience sans soucis.",
          },
          {
            question: "Que se passe-t-il après l'envoi de ma demande ?",
            answer:
              "Après réception de votre demande, Luis vous contactera sous 48 heures pour discuter de votre projet en détail. Ensuite, nous organiserons un appel ou une réunion pour approfondir vos besoins et commencer à élaborer une proposition sur mesure.",
          },
        ],
      },
      durationOptions: [
        { label: "1 jour", value: "1" },
        { label: "2 - 3 jours", value: "2-3" },
        { label: "+ de 3 jours", value: "+3" },
      ],
      locationOptions: [
        { label: "Portugal", value: "portugal" },
        { label: "France", value: "france" },
        { label: "Autre", value: "autre" },
      ],
      retreatTypeOptions: [
        { label: "Bien-être", value: "wellness" },
        { label: "Silencieuse", value: "silent" },
        { label: "Spirituelle", value: "spiritual" },
        { label: "Autres", value: "autre" },
      ],
    },
    English: {
      hero: {
        title: "Request a retreat",
        subtitle: "Create a unique experience tailored to your needs",
      },
      title: "A custom retreat for you",
      description:
        "Whether you want to organize a retreat for yourself, your family, your friends, or your company, our team of experts accompanies you in creating an experience that perfectly meets your expectations.",
      features: [
        {
          icon: Shield,
          title: "Complete customization",
          description:
            "Every detail of your retreat is customizable: duration, theme, activities, accommodation, meals, and much more.",
        },
        {
          icon: Scale,
          title: "Specialized guidance",
          description:
            "Our team guides you through each step, from initial conception to the realization of your retreat, for a worry-free experience.",
        },
        {
          icon: MapPin,
          title: "Exceptional locations",
          description:
            "Access our network of exceptional locations, in Portugal and abroad, to create the perfect environment for your retreat.",
        },
        {
          icon: Coins,
          title: "Solutions for all budgets",
          description:
            "We offer options for all budgets, without compromising on the quality of the experience.",
        },
      ],
      testimonial: {
        quote: `"${quotes[key].quote}"`,
        author: `${quotes[key].author}`,
      },
      contact: {
        title: "Contact us directly",
        description:
          "Prefer to discuss your project by phone or email? Contact us directly:",
        phone: phone,
        email: email,
      },
      form: {
        title: "Request form",
        firstName: "First name *",
        lastName: "Last name *",
        email: "Email *",
        phone: "Phone",
        retreatType: "Retreat type *",
        participants: "Number of participants",
        duration: "Desired duration",
        location: "Location preference",
        interests: "Areas of interest (multiple choice)",
        project: "Your retreat project *",
        projectPlaceholder:
          "Describe your expectations, specific needs, and any other relevant information for your project...",
        consent:
          "I agree that my information may be used to be contacted regarding my retreat request. *",
        submit: "Send my request",
        required: "* Required fields",
      },
      interestOptions: [
        { label: "Yoga", value: "yoga" },
        { label: "Mindfulness", value: "mindfulness" },
        { label: "Meditation", value: "meditation" },
        { label: "Hiking", value: "hiking" },
        { label: "Mindful nutrition", value: "nutrition" },
        { label: "Art therapy", value: "artTherapy" },
        { label: "Personal development", value: "personal" },
        { label: "Team building", value: "teamBuilding" },
      ],
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "How far in advance should I make my request?",
            answer:
              "We recommend contacting us at least 2 months in advance for custom retreats, especially if you have specific dates in mind. For corporate retreats or large groups, a 3 to 6-month timeframe is preferable.",
          },
          {
            question: "What is the minimum budget for a custom retreat?",
            answer:
              "The cost varies considerably depending on your needs, duration, location, and number of participants. We work with all budgets and can propose options adapted to your financial constraints. Contact us for a personalized quote.",
          },
          {
            question: "Can you organize a retreat abroad?",
            answer:
              "Absolutely! We organize retreats worldwide. Our team has experience in many destinations and can manage all logistical aspects to offer a worry-free experience.",
          },
          {
            question: "What happens after I submit my request?",
            answer:
              "After receiving your request, Luis will contact you within 48 hours to discuss your project in detail. Then, we will arrange a call or meeting to delve into your needs and start developing a tailored proposal.",
          },
        ],
      },
      durationOptions: [
        { label: "1 day", value: "1" },
        { label: "2 - 3 days", value: "2-3" },
        { label: "+ 3 days", value: "+3" },
      ],
      locationOptions: [
        { label: "Portugal", value: "portugal" },
        { label: "France", value: "france" },
        { label: "Other", value: "autre" },
      ],
      retreatTypeOptions: [
        { label: "Wellness", value: "wellness" },
        { label: "Silent", value: "silent" },
        { label: "Spiritual", value: "spiritual" },
        { label: "Other", value: "autre" },
      ],
    },
  };

  const {
    hero,
    title,
    description,
    features,
    testimonial,
    contact,
    form,
    interestOptions,
    faq,
    durationOptions,
    locationOptions,
    retreatTypeOptions,
  } = content[language as keyof typeof content] || content["English"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg")',
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif mb-4">{hero.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-serif mb-6">{title}</h2>
            <p className="text-gray-600 mb-12">{description}</p>

            {/* Features */}
            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-sage-50 p-2 rounded-full">
                    <feature.icon className="h-6 w-6 text-teal-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mb-12">
              <blockquote className="italic text-gray-700">
                {testimonial.quote}
              </blockquote>
              <p className="mt-2 text-gray-600">{testimonial.author}</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-medium mb-4">{contact.title}</h3>
              <p className="text-gray-600 mb-4">{contact.description}</p>
              <div className="space-y-2">
                <p className="text-gray-700">{contact.phone}</p>
                <p className="text-gray-700">{contact.email}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-medium mb-8">{form.title}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {form.firstName}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {form.lastName}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Retreat Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {form.retreatType}
                </label>
                <select
                  name="retreatType"
                  value={formData.retreatType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">{form.retreatType}</option>
                  {retreatTypeOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {form.participants}
                  </label>
                  <input
                    type="number"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {form.duration}
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">{form.duration}</option>
                    {durationOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {form.location}
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">{form.location}</option>
                  {locationOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Interest Areas */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {form.interests}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map((option, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value={option.value}
                        checked={formData.interests.includes(option.value)}
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {form.project}
                </label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={form.projectPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>

              {/* Consent */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {form.consent}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
                disabled={loading}
              >
                {loading ? "..." : form.submit}
              </button>

              <p className="text-sm text-gray-500 text-center">
                {form.required}
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif text-center mb-12">{faq.title}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.questions.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestRetreat;
