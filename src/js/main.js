'use strict';

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//alert("co jest?");
console.log('siema');
const name = 'maciek';
let isHappy = false;
console.log(name, isHappy);
console.log(`nazywam się ${name} 
i to nie jest ${isHappy}`);

console.log('nazywam się ' + name + ' i to nie jest ' + isHappy + '-> stary sposób');

console.log(name[0], name[1]);

const homeFooter = document.querySelector('.homePageFooter--js');
console.log(homeFooter);
homeFooter.innerHTML = 'nazywam się ' + name + ' i to nie jest ' + isHappy + '-> stary sposób';

if ('javascript' != 'java') {
   console.log('to prawda');
}

const age = 730;

if (age > 20) {
   console.log('masz więcej niż 20 lat');
} else {
   console.log('masz mniej niż 20 lat');
}

//to jest if po nowemu
let mIOld = age > 70 ? 'yes' : 'no';
console.log(mIOld);

//funkcje
function calculate(x) {
   x = x + 3;
   console.log(x);
   return x * 7;
}

console.log(calculate(3));
const wynik = calculate(4);
console.log(wynik);
calculate(10);
console.log('zwykła funkcja');

const kalkul = function(x) {
   return x * x;
};
console.log(`funkcja jako stała ${kalkul(16)}`);

console.log(`funkcja w stałej ${kalkul(10)}`);

//arrow functions - funkcje strzałkowe

const calculateFatJedenArg = x => {
   // bez nawiasów jeśli jeden argument
   x = x + 3;
   console.log(x);
   return x * y;
};

const calculateFatUproszcz = x => (x + 3) * 7;
console.log(`uproszczona ${calculateFatUproszcz(4)} wersja`); //wrzuca wynik - 'tekst ${...}   `

const calculateFat = (x, y) => {
   x = x + 3;
   console.log(x);
   return x * y;
};

console.log(calculateFat(3, 4));
