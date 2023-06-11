import {
  CardObject,
  cardObjects,
  cardBackImgPath,
  cardContainerElem,
} from './data/card';

function createElement(elemType: string): HTMLElement {
  return document.createElement(elemType);
}

function addClassToElement(elem: HTMLElement, className: string) {
  elem.classList.add(className);
}

function addIdToElement(elem: HTMLElement, id: number) {
  elem.id = id.toString();
}

function addSrcToImageElem(imgElemen: HTMLImageElement, src: string) {
  imgElemen.src = src;
}

function addChildElement(parentElem: HTMLElement, childElem: HTMLElement) {
  parentElem.appendChild(childElem);
}

function mapCardIdToGridCell(card: HTMLElement): string {
  if (card.id === '1') {
    return '.card__pos-a';
  } else if (card.id === '2') {
    return '.card__pos-b';
  } else if (card.id === '3') {
    return '.card__pos-c';
  } else if (card.id === '4') {
    return '.card__pos-d';
  } else {
    return '';
  }
}

function addCardToGridCell(card: HTMLElement) {
  const cardPositionClassName = mapCardIdToGridCell(card);

  const cardPosElem: HTMLElement = document.querySelector(
    cardPositionClassName
  );

  addChildElement(cardPosElem, card as any);
}

function createCard(cardItem: CardObject) {
  const cardElem: HTMLElement = createElement('div');
  const cardInnerElem: HTMLElement = document.createElement('div');
  const cardFrontElem: HTMLElement = document.createElement('div');
  const cardBackElem: HTMLElement = document.createElement('div');

  const cardFrontImg: HTMLElement = createElement('img');
  const cardBackImg: HTMLElement = createElement('img');

  addClassToElement(cardElem, 'card');
  addIdToElement(cardElem, cardItem.id);

  addClassToElement(cardInnerElem, 'card__inner');
  addClassToElement(cardFrontElem, 'card__front');
  addClassToElement(cardBackElem, 'card__back');

  addClassToElement(cardFrontImg, 'card__img');
  addClassToElement(cardBackImg, 'card__img');

  addSrcToImageElem(cardFrontImg as HTMLImageElement, cardItem.imagePath);
  addSrcToImageElem(cardBackImg as HTMLImageElement, cardBackImgPath);

  addChildElement(cardFrontElem, cardFrontImg);
  addChildElement(cardBackElem, cardBackImg);

  addChildElement(cardInnerElem, cardFrontElem);
  addChildElement(cardInnerElem, cardBackElem);
  addChildElement(cardElem, cardInnerElem);

  addCardToGridCell(cardElem);
}

function createCards() {
  cardObjects.forEach((i) => {
    createCard(i);
  });
}

createCards();
