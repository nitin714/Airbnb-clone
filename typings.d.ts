interface Explore {
  img: string;
  location: string;
  distance: string;
}
interface Cards {
  img: string;
  title: string;
}

export interface ExploreType {
  exploreData: Explore[];
  cardsData: Cards[];
}
