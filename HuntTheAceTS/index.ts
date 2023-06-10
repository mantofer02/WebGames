import {
  CardObject,
  cardObjects,
  cardBackImgPath,
  cardConainerElem,
} from '@cardType';

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

function createCart(cardItem: CardObject) {
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
}
