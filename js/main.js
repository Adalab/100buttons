'use strict';

const text = document.querySelector('.js__text');
const container = document.querySelector('.js__container');



for (let i=1;i<=100;i++) {

  let newI;
  if (i === 100) {
    newI = i;
  } else if (i < 100 && i >=10 ){
    newI = '0' + i;
  } else {
    newI = '00' + i;
  }
  console.log(i, newI);


  container.innerHTML += `<button class="container__button js__button">Botón nº ${newI}</button>`;
}

const buttons = document.querySelectorAll('.js__button');

console.log(`Hay ${buttons.length} botones`);

function clickMe(event) {
  text.innerHTML = event.currentTarget.innerHTML;

}


for (const btn of buttons) {
  btn.addEventListener('click', clickMe);
}