/* eslint-disable */
import "bootstrap";
import "./style.css";
//Declaro las variables
const BODY = document.querySelector("body");
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const SUITS = ["♠", "♥", "♦", "♣"];

window.onload = function() {
  //Add class background (predefined in CSS) to body
  BODY.classList.add("background");
  //Create new div an add card class to it
  let card = document.createElement("div");
  card.classList.add("poker-card");
  BODY.appendChild(card);
  //Call functions and return a constat from random
  let randomSuit = SUITS[getRandom(SUITS)];
  let randomValue = VALUES[getRandom(VALUES)];
  //Create one div for each zone in card
  let firstSuit = document.createElement("div");
  let cardNumber = document.createElement("div");
  let lastSuit = document.createElement("div");
  //Add symbol to first div
  let firstSuitValue = document.createTextNode(randomSuit);
  firstSuit.appendChild(firstSuitValue);
  firstSuit.classList.add("card-value-first");
  card.appendChild(firstSuit);
  //Add value to second div
  let cardNumberValue = document.createTextNode(randomValue);
  cardNumber.appendChild(cardNumberValue);
  cardNumber.classList.add("card-value");
  card.appendChild(cardNumber);
  //Add symbol to third div
  let lastSuitValue = document.createTextNode(randomSuit);
  lastSuit.appendChild(lastSuitValue);
  lastSuit.classList.add("last-suit");
  card.appendChild(lastSuit);

  //Take a random number depending on array length
  function getRandom(list) {
    return Math.floor(Math.random() * list.length);
  }
};
