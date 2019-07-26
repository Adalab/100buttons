'use strict';

const text = document.querySelector('.js__text');
const container = document.querySelector('.js__container');

for (let i=1;i<=100;i++) {
  container.innerHTML += `<button class="container__button js__button">Botón nº ${i}</button>`;
}

const buttons = document.querySelectorAll('.js__button');

console.log(`Hay ${buttons.length} botones`);

function clickMe(event) {
  text.innerHTML = event.currentTarget.innerHTML;
}


for (const btn of buttons) {
  btn.addEventListener('click', clickMe);
}