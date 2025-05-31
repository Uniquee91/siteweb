import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface PrivacyPolicyProps {
  language: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ language }) => {
  useScrollToTop();

  const content = {
    'Português': {
      title: 'Política de Privacidade',
      lastUpdated: 'Última atualização: 15 de março de 2024',
      sections: [
        {
          title: 'Introdução',
          content: 'A UNIQUE4WORLD está comprometida em proteger sua privacidade. Esta política explica como coletamos, usamos e protegemos suas informações pessoais.'
        },
        {
          title: 'Informações Coletadas',
          items: [
            'Dados de identificação (nome, email, telefone)',
            'Informações de pagamento',
            'Preferências e necessidades específicas para retiros',
            'Informações de saúde relevantes para atividades',
            'Dados de uso do site'
          ]
        },
        {
          title: 'Uso das Informações',
          items: [
            'Processamento de reservas e pagamentos',
            'Comunicação sobre serviços contratados',
            'Envio de newsletters (mediante consentimento)',
            'Melhoria dos nossos serviços',
            'Cumprimento de obrigações legais'
          ]
        },
        {
          title: 'Proteção de Dados',
          content: 'Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração ou destruição.'
        },
        {
          title: 'Compartilhamento de Dados',
          content: 'Suas informações pessoais não são vendidas ou compartilhadas com terceiros, exceto quando necessário para a prestação dos serviços contratados ou por exigência legal.'
        },
        {
          title: 'Seus Direitos',
          items: [
            'Acessar suas informações pessoais',
            'Corrigir dados incorretos',
            'Solicitar exclusão de dados',
            'Retirar consentimento para marketing',
            'Solicitar portabilidade dos dados'
          ]
        },
        {
          title: 'Cookies',
          content: 'Utilizamos cookies para melhorar sua experiência no site. Você pode controlar o uso de cookies através das configurações do seu navegador.'
        },
        {
          title: 'Contato',
          content: 'Para questões sobre privacidade, entre em contato através do email: unique@uniqueeu.com'
        }
      ]
    },
    'Français': {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 15 mars 2024',
      sections: [
        {
          title: 'Introduction',
          content: 'UNIQUE4WORLD s\'engage à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.'
        },
        {
          title: 'Informations Collectées',
          items: [
            'Données d\'identification (nom, email, téléphone)',
            'Informations de paiement',
            'Préférences et besoins spécifiques pour les retraites',
            'Informations de santé pertinentes pour les activités',
            'Données d\'utilisation du site'
          ]
        },
        {
          title: 'Utilisation des Informations',
          items: [
            'Traitement des réservations et paiements',
            'Communication sur les services contractés',
            'Envoi de newsletters (avec consentement)',
            'Amélioration de nos services',
            'Respect des obligations légales'
          ]
        },
        {
          title: 'Protection des Données',
          content: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l\'accès non autorisé, la modification ou la destruction.'
        },
        {
          title: 'Partage des Données',
          content: 'Vos informations personnelles ne sont pas vendues ou partagées avec des tiers, sauf si nécessaire pour la fourniture des services contractés ou par obligation légale.'
        },
        {
          title: 'Vos Droits',
          items: [
            'Accéder à vos informations personnelles',
            'Corriger les données incorrectes',
            'Demander la suppression des données',
            'Retirer le consentement pour le marketing',
            'Demander la portabilité des données'
          ]
        },
        {
          title: 'Cookies',
          content: 'Nous utilisons des cookies pour améliorer votre expérience sur le site. Vous pouvez contrôler l\'utilisation des cookies via les paramètres de votre navigateur.'
        },
        {
          title: 'Contact',
          content: 'Pour toute question concernant la confidentialité, contactez-nous à : unique@uniqueeu.com'
        }
      ]
    },
    'English': {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 15, 2024',
      sections: [
        {
          title: 'Introduction',
          content: 'UNIQUE4WORLD is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.'
        },
        {
          title: 'Information Collected',
          items: [
            'Identification data (name, email, phone)',
            'Payment information',
            'Preferences and specific needs for retreats',
            'Relevant health information for activities',
            'Website usage data'
          ]
        },
        {
          title: 'Use of Information',
          items: [
            'Processing reservations and payments',
            'Communication about contracted services',
            'Sending newsletters (with consent)',
            'Improving our services',
            'Compliance with legal obligations'
          ]
        },
        {
          title: 'Data Protection',
          content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.'
        },
        {
          title: 'Data Sharing',
          content: 'Your personal information is not sold or shared with third parties, except when necessary for providing contracted services or by legal requirement.'
        },
        {
          title: 'Your Rights',
          items: [
            'Access your personal information',
            'Correct incorrect data',
            'Request data deletion',
            'Withdraw marketing consent',
            'Request data portability'
          ]
        },
        {
          title: 'Cookies',
          content: 'We use cookies to improve your website experience. You can control cookie usage through your browser settings.'
        },
        {
          title: 'Contact',
          content: 'For privacy questions, contact us at: unique@uniqueeu.com'
        }
      ]
    }
  };

  const { title, lastUpdated, sections } = content[language as keyof typeof content] || content['English'];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-serif mb-2">{title}</h1>
          <p className="text-gray-600">{lastUpdated}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif mb-4">{section.title}</h2>
              {section.content && (
                <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>
              )}
              {section.items && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {section.items.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;