# Configuration Sanity pour le Site Luis

## Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```bash
VITE_SANITY_PROJECT_ID=votre_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=votre_token_api
```

## Schémas Sanity créés

### 1. `homePage` - Page d'accueil
- **mainTitle**: Titre principal (FR/EN/PT)
- **mainContent**: Contenu principal (FR/EN/PT)
- **heroImg**: Image de la section hero
- **welcomeSectionImg**: Image de la section welcome
- **ctaSectionImg**: Image de la section CTA
- **testimonialsFR/EN/PT**: Témoignages par langue
- **nosOffres**: Section des offres
  - **titre/sousTitre/description**: En-tête de la section (FR/EN/PT)
  - **offre1/offre2/offre3/offre4**: Offres individuelles
    - **image**: Image de l'offre
    - **duree**: Durée (FR/EN/PT)
    - **lieu**: Lieu (FR/EN/PT)
    - **titre**: Titre de l'offre (FR/EN/PT)
    - **description**: Description (FR/EN/PT)

### 2. `nosRetraites` - Page Nos Retraites
- **banniere**:
  - **titre**: Titre de la bannière (FR/EN/PT)
  - **sousTitre**: Sous-titre (FR/EN/PT)
- **introduction**:
  - **titre**: Titre de l'introduction (FR/EN/PT)
  - **description**: Description (FR/EN/PT)

## Utilisation dans le code

### Composant Welcome
```tsx
<Welcome 
  language={language} 
  imgUrl={welcomeSectionImg}
  welcomeData={{
    mainTitle: data?.mainTitle,
    mainContent: data?.mainContent
  }}
/>
```

### Composant Experiences (Nos Offres)
```tsx
const { data: homeData } = useFetch(homePageQuery);
const nosOffres = homeData?.nosOffres;
// Utilise les données pour afficher les 4 offres
```

### Composant Retreats
```tsx
const { data: sanityData } = useFetch(nosRetraitesQuery);
// Utilise les données pour le titre, sous-titre, introduction
```

### Composant NosRetraites
```tsx
const { data } = useFetch(nosRetraitesQuery);
// Affiche la page complète avec les données Sanity
```

## Routes ajoutées

- `/nos-retraites` → Composant `NosRetraites`

## Fonctionnalités

✅ **Section Welcome** : Titre et contenu dynamiques depuis Sanity
✅ **Section Nos Offres** : 4 offres avec images, durée, lieu, titre, description
✅ **Section Témoignages** : Témoignages par langue depuis Sanity
✅ **Section CTA** : Image dynamique depuis Sanity
✅ **Page Nos Retraites** : Contenu complet depuis Sanity
✅ **Support multilingue** : FR/EN/PT pour tous les contenus
✅ **Gestion des images** : URLs Sanity automatiques
✅ **Gestion des sauts de ligne** : Conversion automatique en HTML

## Déploiement

1. **Commit et push** :
```bash
git add .
git commit -m "✨ Connexions Sanity complètes"
git push origin main
```

2. **Vercel** : Déploiement automatique depuis GitHub

## Notes importantes

- Les composants utilisent des `type assertions` (`as any`) pour éviter les erreurs TypeScript
- Les images Sanity sont construites automatiquement avec les variables d'environnement
- Les sauts de ligne sont gérés avec `dangerouslySetInnerHTML` et `replace(/\n/g, '<br />')`
- Tous les composants ont des fallbacks vers le contenu statique si Sanity n'est pas disponible
