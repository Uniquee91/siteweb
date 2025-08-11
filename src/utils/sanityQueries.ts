// Requêtes Sanity pour les nouveaux schémas

// Requête pour la page d'accueil - VERSION COMPLÈTE AVEC TOUTES LES OFFRES, TÉMOIGNAGES ET IMAGES
export const homePageQuery = `
  *[_type == "homePage"][0] {
    _id,
    _type,
    mainTitle {
      fr,
      en,
      pt
    },
    mainContent {
      fr,
      en,
      pt
    },
    heroImg,
    welcomeSectionImg,
    ctaSectionImg,
    testimonialsFR,
    testimonialsEN,
    testimonialsPT,
    nosOffres {
      titre {
        fr,
        en,
        pt
      },
      sousTitre {
        fr,
        en,
        pt
      },
      description {
        fr,
        en,
        pt
      },
      offre1 {
        image,
        duree {
          fr,
          en,
          pt
        },
        lieu {
          fr,
          en,
          pt
        },
        titre {
          fr,
          en,
          pt
        },
        description {
          fr,
          en,
          pt
        }
      },
      offre2 {
        image,
        duree {
          fr,
          en,
          pt
        },
        lieu {
          fr,
          en,
          pt
        },
        titre {
          fr,
          en,
          pt
        },
        description {
          fr,
          en,
          pt
        }
      },
      offre3 {
        image,
        duree {
          fr,
          en,
          pt
        },
        lieu {
          fr,
          en,
          pt
        },
        titre {
          fr,
          en,
          pt
        },
        description {
          fr,
          en,
          pt
        }
      },
      offre4 {
        image,
        duree {
          fr,
          en,
          pt
        },
        lieu {
          fr,
          en,
          pt
        },
        titre {
          fr,
          en,
          pt
        },
        description {
          fr,
          en,
          pt
        }
      }
    }
  }
`;

// Requête pour la page Nos Retraites
export const nosRetraitesQuery = `
  *[_type == "nosRetraites"][0] {
    _id,
    _type,
    banniere {
      titre {
        fr,
        en,
        pt
      },
      sousTitre {
        fr,
        en,
        pt
      }
    },
    introduction {
      titre {
        fr,
        en,
        pt
      },
      description {
        fr,
        en,
        pt
      }
    }
  }
`;

// Requêtes existantes
export const blogPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    author->{name, image},
    categories[]->{title}
  }
`;

export const retreatsQuery = `
  *[_type == "retreat"] | order(date asc) {
    _id,
    title,
    description,
    date,
    duration,
    location,
    price,
    image,
    category->{title}
  }
`;

export const categoriesQuery = `
  *[_type == "category"] {
    _id,
    title,
    description
  }
`;

export const authorsQuery = `
  *[_type == "author"] {
    _id,
    name,
    image,
    bio
  }
`;
