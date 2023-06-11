export interface CardObject {
  id: number;
  imagePath: string;
}

export const cardBackImgPath: string = '../assets/images/back_of_card.svg';
export const cardContainerElem: HTMLElement =
  document.querySelector('.card-container');

export const cardObjects: CardObject[] = [
  { id: 1, imagePath: '../assets/images/king_of_hearts2.svg' },
  { id: 2, imagePath: '../assets/images/jack_of_clubs2.svg' },
  { id: 3, imagePath: '../assets/images/queen_of_diamonds2.svg' },
  { id: 4, imagePath: '../assets/images/ace_of_spades2.svg' },
];
