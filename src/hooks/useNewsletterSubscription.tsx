import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useNewsletterSubscription = (lang: string) => {
  const [loading, setLoading] = useState(false);
  const [withSuccess, setWithSuccess] = useState(false);

  const successMsg =
    lang === "Français"
      ? "Inscription réussie ✅"
      : lang === "Português"
      ? "Inscrito ✅"
      : "Subscribed ✅";
  const errorMsg =
    lang === "Français"
      ? "Erreur. Réessaie ❌"
      : lang === "Português"
      ? "Erro. Tente novamente ❌"
      : "Error. Try again ❌";

  const subscribe = async (
    email: any,
    firstName = "",
    lastName = "",
    phone = ""
  ) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/contacts",
        {
          email,
          listIds: [6],
          updateEnabled: true,
          attributes: {
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            PHONE: phone,
          },
        },
        {
          headers: {
            "api-key": import.meta.env.VITE_BREVO_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success(successMsg);

        setWithSuccess(true);
      } else {
        toast.error(errorMsg);
      }
    } catch (error) {
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, withSuccess };
};
