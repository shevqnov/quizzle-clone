export interface CardType {
  word: string;
  meaning: string;
  id: number;
  image: string;
}

export interface DeckType {
  cards: CardType[];
  id: number;
  name: string;
}