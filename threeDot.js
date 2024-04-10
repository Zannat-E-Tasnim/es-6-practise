const ages = [11,15,17,19];
const ages2 = [14,15,20];
const allAges = ages.concat(ages2).concat([5]);
console.log(allAges);

const allAges2 = [...ages, ...ages2, 5];   // spread operator
console.log(allAges2);


const num = [4,6,29,10];
const max = Math.max(...num);
console.log(max);

