'use strict';

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// //alert("co jest?");
// console.log('siema');
// const name = 'maciek';
// let isHappy = false;
// console.log(name, isHappy);
// console.log(`nazywam się ${name} 
// i to nie jest ${isHappy}`);

// console.log('nazywam się ' + name + ' i to nie jest ' + isHappy + '-> stary sposób');

// console.log(name[0], name[1]);

// const homeFooter = document.querySelector('.homePageFooter--js');
// console.log(homeFooter);
// //homeFooter.innerHTML = 'nazywam się ' + name + ' i to nie jest ' + isHappy + '-> stary sposób';

// if ('javascript' != 'java') {
//    console.log('to prawda');
// }

// const age = 730;

// if (age > 20) {
//    console.log('masz więcej niż 20 lat');
// } else {
//    console.log('masz mniej niż 20 lat');
// }

// //to jest if po nowemu
// let mIOld = age > 70 ? 'yes' : 'no';
// console.log(mIOld);

// //funkcje
// function calculate(x) {
//    x = x + 3;
//    console.log(x);
//    return x * 7;
// }

// console.log(calculate(3));
// const wynik = calculate(4);
// console.log(wynik);
// calculate(10);
// console.log('zwykła funkcja');

// const kalkul = function(x) {
//    return x * x;
// };
// console.log(`funkcja jako stała ${kalkul(16)}`);

// console.log(`funkcja w stałej ${kalkul(10)}`);

// //arrow functions - funkcje strzałkowe

// const calculateFatJedenArg = x => {
//    // bez nawiasów jeśli jeden argument
//    x = x + 3;
//    console.log(x);
//    return x * y;
// };

// const calculateFatUproszcz = x => (x + 3) * 7;
// console.log(`uproszczona ${calculateFatUproszcz(4)} wersja`); //wrzuca wynik - 'tekst ${...}   `

// const calculateFat = (x, y) => {
//    x = x + 3;
//    console.log(x);
//    return x * y;
// };

// console.log(calculateFat(3, 4));

// const witaj = (name, age) => {
//    console.log(`witaj ${name}, masz ${age} lat`);
// }

// witaj('darek', 55);
// witaj(name, age);

//Lekcja 6.05

const button = document.querySelector('.header__button--js');
console.log(button);

function handleClick() {
   console.log('halo');
}

// button.addEventListener('click', handleClick);  //sama nazwa funkcji bez nawiasów
let klik = 0;

const header_new = document.querySelector('.header__title--js').innerHTML;
//console.log(header_new);

button.addEventListener('click', (e) => {  //e - event, moze być ee itp.
   // console.log(e);
   // console.log(e.target);
   // console.log('hello arrow');
   const header = document.querySelector('.header__title--js');
   //console.log(klik);

   if (klik==0) {
      klik=1;
      header.innerHTML = 'klik klik';
      // header.classList.add('header__title--red');
       header.classList.toggle('header__title--red');
      if (header.classList.contains('header__title--red')) {
         console.log('jest klasa');
      }
      else {
         console.log('niema klasy');
      }
   }
   else {
      klik=0;
      header.innerHTML = header_new;
   }
   
   //alert('ooo....');

});

const navigationSwitcher = document.querySelector('.navigation__switcher--js');
navigationSwitcher.addEventListener('click', (e) => {
   const navigationList = document.querySelector('.navigation__list--js');
   navigationList.classList.toggle('navigation__list--visible');
   if (navigationList.classList.contains('navigation__list--visible')){
      navigationSwitcher.innerHTML = '−';
   }
   else {
      navigationSwitcher.innerHTML = '≡';
   }
})
