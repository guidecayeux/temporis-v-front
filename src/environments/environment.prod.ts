export const environment = {
  production: true,
  url: {
    objets: {
      liste: 'https://temporis-v.fr/api/objets/liste',
      unitaire: 'https://temporis-v.fr/api/objets/search/',
      autocomplete: 'https://temporis-v.fr/api/objets/autocomplete/',
      ajout: 'https://temporis-v.fr/api/objets/add'
    },
    carte: {
      liste: 'https://temporis-v.fr/api/cartes/liste',
      ajout: 'https://temporis-v.fr/api/cartes/add'
    },
    recette: {
      liste: 'https://temporis-v.fr/api/recettes/liste',
      ajout: 'https://temporis-v.fr/api/recettes/add'
    },
    logs: {
      liste: 'https://temporis-v.fr/api/logs/liste'
    },
    twitch: {
      redirect_uri: 'https://www.temporis-v.fr'
    },
    auth: {
      authorization: 'https://temporis-v.fr/api/authorization'
    }
  }
};
