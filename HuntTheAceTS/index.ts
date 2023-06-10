const cardObjectDefinition = [
  { id: 1, imagePath: '/assets/images/king_of_hearts2.svg' },
  { id: 2, imagePath: '/assets/images/jack_of_clubs2.svg' },
  { id: 3, imagePath: 'assets/images/queen_of_diamonds2.svg' },
  { id: 4, imagePath: 'assets/images/ace_of_spades2.svg' },
];

function createCart(cardItem) {
  const cardElem: HTMLElement = createElement('div');
  const cardInnerElem: HTMLElement = document.createElement('div');
  const cardFrontElem: HTMLElement = document.createElement('div');
  const cardBackElem: HTMLElement = document.createElement('div');

  const cardFrontImg: HTMLElement = createElement('img');
  const cardBackImg: HTMLElement = createElement('img');
}

function createElement(elemType: string): HTMLElement {
  return document.createElement(elemType);
}

function addClassToElement(elem: HTMLElement, className: string) {
  elem.classList.add(className);
}
