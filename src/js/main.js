"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

//alert("co jest?");
console.log('siema');
const name = 'maciek';
let isHappy = false;
console.log(name, isHappy);
console.log(`nazywam się ${name} 
i to nie jest ${isHappy}`);

console.log('nazywam się ' + name + ' i to nie jest ' +
   isHappy + '-> stary sposób');

console.log(name[0], name[1]);

const homeFooter = document.querySelector('.homePageFooter--js');
console.log(homeFooter);
homeFooter.innerHTML = 'nazywam się ' + name + ' i to nie jest ' +
   isHappy + '-> stary sposób';