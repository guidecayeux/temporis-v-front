export interface User {
  client_id: string;
  expires_in: number;
  login: string;
  scopes: string[];
  user_id: string;
}
export interface Card {
  name: string;
  id: number;
}

export interface CardCombine {
  cards: Card[];
}

export interface Item {
  img: string;
  name: string;
  lvl: number;
  type: string;
  id: number;
  nbRecette: number;
  combinaisons: CardCombine[];
}

