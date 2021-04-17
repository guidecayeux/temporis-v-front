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
  name?: string;
  lvl?: number;
  type?: string;
  id?: number;
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


// création de l'objet ¤objet¤ par ¤user¤ le ¤date¤
export interface Log {
  id: number;
  log?: string;
  debut?: string;
  itemName?: string;
  avantUser?: string;
  user?: string;
  avantDate?: string;
  date?: string;
  fin?: string;
}

