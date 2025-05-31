import React, { useState } from "react";
import { X } from "lucide-react";
import { useResendContactForm } from "../hooks/resend/useResendContactForm";

interface WaitingListModalProps {
  language: string;
  isOpen: boolean;
  product: string;
  onClose: () => void;
}

const WaitingListModal: React.FC<WaitingListModalProps> = ({
  language,
  isOpen,
  onClose,
  product,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { submitForm, loading } = useResendContactForm({
    onSuccess: () => {
      setName("");
      setEmail("");
      setPhoneNumber("");
      onClose();
    },
    onError: (error: any) => {
      console.error(error);
    },
    lang: language,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      firstName: name,
      email,
      phone: phoneNumber,
      product,
      joinList: true,
    };
    await submitForm(formData);
  };

  const content = {
    Português: {
      title: "Inscreva-se na lista de espera",
      nameLabel: "Nome",
      emailLabel: "E-mail",
      phoneLabel: "Número de telefone",
      button: "Inscrever-se",
      disclaimer:
        "Ao se inscrever, você concorda em receber nossas comunicações.",
    },
    Français: {
      title: "Inscrivez-vous à la liste d'attente",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      phoneLabel: "Numéro de téléphone",
      button: "S'inscrire",
      disclaimer:
        "En vous inscrivant, vous acceptez de recevoir nos communications.",
    },
    English: {
      title: "Join the waiting list",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone Number",
      button: "Subscribe",
      disclaimer: "By subscribing, you agree to receive our communications.",
    },
  };

  const { title, nameLabel, emailLabel, phoneLabel, button, disclaimer } =
    content[language as keyof typeof content] || content["English"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif mb-4">{title}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {nameLabel}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {emailLabel}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              {phoneLabel}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
            disabled={loading}
          >
            {loading ? "Submitting..." : button}
          </button>
          <p className="text-sm text-gray-500 text-center">{disclaimer}</p>
        </form>
      </div>
    </div>
  );
};

export default WaitingListModal;
