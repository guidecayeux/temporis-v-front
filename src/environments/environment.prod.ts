export const environment = {
  production: true,
  url: {
    objets: {
      liste: 'http://localhost:3000/api/objets/liste',
      unitaire: 'http://localhost:3000/api/objets/search/',
      autocomplete: 'http://localhost:3000/api/objets/autocomplete/',
      ajout: 'http://localhost:3000/api/objets/add'
    },
    carte: {
      liste: 'http://localhost:3000/api/cartes/liste',
      ajout: 'http://localhost:3000/api/cartes/add'
    },
    recette: {
      liste: 'http://localhost:3000/api/recettes/liste',
      ajout: 'http://localhost:3000/api/recettes/add'
    }
  }
};
