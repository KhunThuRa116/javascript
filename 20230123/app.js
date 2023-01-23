let a = 10;

// a++;
console.log(a++); //just plus 1 and not still update to a ( a value is still 10) 
console.log(a);     // update a value to 11

//++a 
console.log(++a); // plus one to a & update to a value
console.log(a)      // a value

let c = 0;
let d = 0;


// let e = (c++)+(d++)

                    //c value is still -1(cause -1+1 dakedo not update to c and d) 
let e = (--c)+(--d)+(c++)+(d++)
console.log(e);
console.log(c); // -1 c value ni +1 shita value update suru kara;
console.log(d); // -1 d value ni +1 shita value update suru kara;