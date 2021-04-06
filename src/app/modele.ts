export interface User {
  client_id: string;
  expires_in: number;
  login: string;
  scopes: string[];
  user_id: string;
}

export interface Carte {
  name: string;
  id: number;
}

export interface CardCombine {
  cartes: Carte[];
}

export interface Objet {
  img?: string;
  name?: string;
  lvl?: number;
  type?: string;
  id?: number;
  nbRecette?: number;
  combinaisons?: CardCombine[];
}

export interface RecetteQuery {
  idCartes: number[];
}

export interface Recette {
  idObjet: number;
  idCarte1: number;
  idCarte2: number;
  idCarte3: number;
  idCarte4: number;
  idCarte5: number;
}

