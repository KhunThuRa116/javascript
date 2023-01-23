/**
 * 
 * If Condition
 * 
 * if(Boolean){ //true
 *     //do process
 * }else {
 *      //do else process
 * }
 * 
 * if(Boolean) {
 *      //process
 * }else if (Boolean){
 *      //process
 * }else if (Boolean){
 *      //process
 * }else {
 *      //process
 * }
 * 
 */

if(true){
    console.log('True Condition');
}

if(false){
    console.log('Not Enter');
}else{
    console.log('False Condition');
}

if(false){
    console.log('Can\'t Enter');
}else if(true){
    console.log('True Condition');
}else if(true){
    console.log('Can\'t Enter');
}else{
    console.log('Can\'t Enter');
}