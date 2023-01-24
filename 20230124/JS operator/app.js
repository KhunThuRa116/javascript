let a = 20;
let b = a+20;

// a++;
// console.log(a);
console.log(a++);//20
console.log(a++);//21

console.log(++a);//23

let c = 0;
let d = 0;
let e = (c += 20) - (d++);

console.log(c);
console.log(d);
console.log(e);

let f = 0;
let g = 0;
let h = (f++) + (f--) + (++f);
let i = f + (h+=3) + (f++);

// console.log(f++);
// console.log(f--);
// console.log(++f);

console.log(f);
console.log(g);
console.log(h);
console.log(i);
