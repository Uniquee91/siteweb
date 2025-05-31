export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    retreatType,
    participants,
    duration,
    location,
    interests,
    project,
    consent,
    joinList,
    product,
  } = req.body;

  let title = "Nouvelle demande via le site web";
  if (joinList && product) {
    title = "Nouvelle demande pour liste d'attente";
  }

  const html = `
    <div style="font-family: 'Helvetica, Arial, sans-serif'; color: #2a2765; padding: 20px;">
      <h1 style="font-size: 24px; margin-bottom: 20px;">${title}</h1>
      ${firstName ? `<p><strong>Prénom:</strong> ${firstName}</p>` : ""}
      ${lastName ? `<p><strong>Nom:</strong> ${lastName}</p>` : ""}
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
      ${
        retreatType
          ? `<p><strong>Type de retraite:</strong> ${retreatType}</p>`
          : ""
      }
      ${
        participants
          ? `<p><strong>Nombre de participants:</strong> ${participants}</p>`
          : ""
      }
      ${duration ? `<p><strong>Durée:</strong> ${duration}</p>` : ""}
      ${location ? `<p><strong>Lieu:</strong> ${location}</p>` : ""}
      ${
        interests && interests?.length > 0
          ? `<p><strong>Intérêts:</strong> ${interests.join(", ")}</p>`
          : ""
      }
      ${project ? `<p><strong>Projet:</strong> ${project}</p>` : ""}
      ${joinList ? `<p><strong>Liste d'attente:</strong> Oui</p>` : ""}
      ${product ? `<p><strong>Produit:</strong> ${product}</p>` : ""}
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer re_W1EB9XK4_9SeXPKPvENHDrLjvfu8gipou`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@unique4world.com",
        to: " unique@uniqueeu.com",
        subject: title,
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
