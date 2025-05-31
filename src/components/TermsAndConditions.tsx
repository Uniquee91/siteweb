import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface TermsAndConditionsProps {
  language: string;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ language }) => {
  useScrollToTop();

  const content = {
    'Português': {
      title: 'Condições Gerais',
      lastUpdated: 'Última atualização: 15 de março de 2024',
      sections: [
        {
          title: 'Aceitação dos Termos',
          content: 'Ao acessar e utilizar os serviços da UNIQUE4WORLD, você concorda com estes termos e condições. Recomendamos a leitura atenta de todo o conteúdo.'
        },
        {
          title: 'Serviços',
          content: 'A UNIQUE4WORLD oferece retiros, workshops e experiências de bem-estar. Nos reservamos o direito de modificar, suspender ou descontinuar qualquer aspecto do serviço a qualquer momento.'
        },
        {
          title: 'Reservas e Pagamentos',
          items: [
            'As reservas são confirmadas mediante pagamento integral ou sinal, conforme especificado',
            'Os preços são em euros e incluem todos os impostos aplicáveis',
            'Métodos de pagamento aceitos: transferência bancária, cartão de crédito',
            'Um recibo será emitido após a confirmação do pagamento'
          ]
        },
        {
          title: 'Responsabilidades',
          content: 'A UNIQUE4WORLD se compromete a fornecer serviços de qualidade, mas não pode ser responsabilizada por circunstâncias além de seu controle direto.'
        },
        {
          title: 'Saúde e Segurança',
          items: [
            'Os participantes devem informar condições médicas relevantes',
            'Recomendamos consultar um médico antes de participar das atividades',
            'A UNIQUE4WORLD se reserva o direito de recusar participação por razões de segurança',
            'Seguimos protocolos rigorosos de higiene e segurança'
          ]
        },
        {
          title: 'Propriedade Intelectual',
          content: 'Todo o conteúdo do site e materiais fornecidos durante os retiros são propriedade da UNIQUE4WORLD e protegidos por direitos autorais.'
        },
        {
          title: 'Modificações dos Termos',
          content: 'Estes termos podem ser atualizados periodicamente. Alterações significativas serão comunicadas aos usuários.'
        }
      ]
    },
    'Français': {
      title: 'Conditions Générales',
      lastUpdated: 'Dernière mise à jour : 15 mars 2024',
      sections: [
        {
          title: 'Acceptation des Conditions',
          content: 'En accédant et en utilisant les services de UNIQUE4WORLD, vous acceptez ces termes et conditions. Nous recommandons une lecture attentive de tout le contenu.'
        },
        {
          title: 'Services',
          content: 'UNIQUE4WORLD propose des retraites, des ateliers et des expériences de bien-être. Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect du service à tout moment.'
        },
        {
          title: 'Réservations et Paiements',
          items: [
            'Les réservations sont confirmées après paiement intégral ou acompte, selon les spécifications',
            'Les prix sont en euros et incluent toutes les taxes applicables',
            'Modes de paiement acceptés : virement bancaire, carte de crédit',
            'Un reçu sera émis après confirmation du paiement'
          ]
        },
        {
          title: 'Responsabilités',
          content: 'UNIQUE4WORLD s\'engage à fournir des services de qualité mais ne peut être tenue responsable des circonstances hors de son contrôle direct.'
        },
        {
          title: 'Santé et Sécurité',
          items: [
            'Les participants doivent informer des conditions médicales pertinentes',
            'Nous recommandons de consulter un médecin avant de participer aux activités',
            'UNIQUE4WORLD se réserve le droit de refuser la participation pour des raisons de sécurité',
            'Nous suivons des protocoles stricts d\'hygiène et de sécurité'
          ]
        },
        {
          title: 'Propriété Intellectuelle',
          content: 'Tout le contenu du site et les matériaux fournis pendant les retraites sont la propriété de UNIQUE4WORLD et protégés par droits d\'auteur.'
        },
        {
          title: 'Modifications des Conditions',
          content: 'Ces conditions peuvent être mises à jour périodiquement. Les modifications significatives seront communiquées aux utilisateurs.'
        }
      ]
    },
    'English': {
      title: 'Terms and Conditions',
      lastUpdated: 'Last updated: March 15, 2024',
      sections: [
        {
          title: 'Acceptance of Terms',
          content: 'By accessing and using UNIQUE4WORLD services, you agree to these terms and conditions. We recommend careful reading of all content.'
        },
        {
          title: 'Services',
          content: 'UNIQUE4WORLD offers retreats, workshops, and wellness experiences. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.'
        },
        {
          title: 'Reservations and Payments',
          items: [
            'Reservations are confirmed upon full payment or deposit, as specified',
            'Prices are in euros and include all applicable taxes',
            'Accepted payment methods: bank transfer, credit card',
            'A receipt will be issued after payment confirmation'
          ]
        },
        {
          title: 'Responsibilities',
          content: 'UNIQUE4WORLD commits to providing quality services but cannot be held responsible for circumstances beyond its direct control.'
        },
        {
          title: 'Health and Safety',
          items: [
            'Participants must inform of relevant medical conditions',
            'We recommend consulting a doctor before participating in activities',
            'UNIQUE4WORLD reserves the right to refuse participation for safety reasons',
            'We follow strict hygiene and safety protocols'
          ]
        },
        {
          title: 'Intellectual Property',
          content: 'All website content and materials provided during retreats are property of UNIQUE4WORLD and protected by copyright.'
        },
        {
          title: 'Terms Modifications',
          content: 'These terms may be updated periodically. Significant changes will be communicated to users.'
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

export default TermsAndConditions;