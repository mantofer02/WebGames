import { cardObjects, cardBackImgPath } from './data/card.js';

function createElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id.toString();
}

function addSrcToImageElem(imgElemen, src) {
  imgElemen.src = src;
}

function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}

function mapCardIdToGridCell(card) {
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

function addCardToGridCell(card) {
  const cardPositionClassName = mapCardIdToGridCell(card);

  const cardPosElem = document.querySelector(cardPositionClassName);

  addChildElement(cardPosElem, card);
}

function createCard(cardItem) {
  const cardElem = createElement('div');
  const cardInnerElem = document.createElement('div');
  const cardFrontElem = document.createElement('div');
  const cardBackElem = document.createElement('div');

  const cardFrontImg = createElement('img');
  const cardBackImg = createElement('img');

  addClassToElement(cardElem, 'card');
  addIdToElement(cardElem, cardItem.id);

  addClassToElement(cardInnerElem, 'card__inner');
  addClassToElement(cardFrontElem, 'card__front');
  addClassToElement(cardBackElem, 'card__back');

  addClassToElement(cardFrontImg, 'card__img');
  addClassToElement(cardBackImg, 'card__img');

  addSrcToImageElem(cardFrontImg, cardItem.imagePath);
  addSrcToImageElem(cardBackImg, cardBackImgPath);

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
