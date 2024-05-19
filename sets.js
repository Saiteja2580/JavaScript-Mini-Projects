'use strict';


//declaring anew set
const items = new Set([1,1,2,2,4,5,6]);
console.log(items);

//order of elements in set are irrelevant
console.log(items.size)
console.log(items.has(1));
console.log(items.has(2));
items.add(10);
items.add('Sai Teja');
console.log(items);
items.delete(1);
items.delete(2);
console.log(items)
// items.clear();
//there is no way gettign values out of a aset
for (const item of items ) console.log(item);


const positionStaff = ['waiter','manager','chef','waiter','manager','chef'];
const uniqueSet = new Set(positionStaff);
console.log(positionStaff);
console.log(uniqueSet);
const uniqueStaffArray  = [...uniqueSet];
console.log(uniqueStaffArray);
