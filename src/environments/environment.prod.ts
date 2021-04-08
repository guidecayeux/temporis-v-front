export const environment = {
  production: true,
  url: {
    objets: {
      liste: '/api/objets/liste',
      unitaire: '/api/objets/search/',
      autocomplete: '/api/objets/autocomplete/',
      ajout: '/api/objets/add'
    },
    carte: {
      liste: '/api/cartes/liste',
      ajout: '/api/cartes/add'
    },
    recette: {
      liste: '/api/recettes/liste',
      ajout: '/api/recettes/add'
    },
    twitch: {
      redirect_uri: 'https://www.temporis-v.fr'
    },
    auth: {
      authorization: '/api/authorization'
    }
  }
};
