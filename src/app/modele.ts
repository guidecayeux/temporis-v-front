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
  nameObjet: string;
  idCarte1: number;
  nameCarte1: string;
  idCarte2: number;
  nameCarte2: string;
  idCarte3: number;
  nameCarte3: string;
  idCarte4: number;
  nameCarte4: string;
  idCarte5: number;
  nameCarte5: string;
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

