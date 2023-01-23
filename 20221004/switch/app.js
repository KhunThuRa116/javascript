/**
 * 
 * Switch Condition // Switch Condition check with strictEqual ( === )
 * 
 * switch(Data Type){
 *      case **:
 *          //process
 *      break;
 * 
 *      case **:
 *          //process
 *      break;
 * 
 *      case **:
 *          //process
 *      break;
 * }
 * 
 */

switch(8){
    case 'eight':
        console.log('Case One');
        break;
    
    case '8':
        console.log('Case Two');
        break;

    case 8:
        console.log('Case Three');
        break;

    default:
        console.log('Case Default');
        break;
}