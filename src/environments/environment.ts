// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
    },
    logs: {
      liste: 'http://localhost:3000/api/logs/liste'
    },
    twitch: {
      redirect_uri: 'http://localhost:4200/'
    },
    auth: {
      authorization: 'http://localhost:3000/api/authorization'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
