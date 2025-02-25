export interface Choice {
  text: string;
  nextPage: string;
}

export interface Page {
  id: string;
  content: string;
  choices?: Choice[];
  isEnding?: boolean;
  endingType?: 'bad' | 'good' | 'best';
  images: string[];
}

export interface GameState {
  currentPage: string;
  history: string[];
}