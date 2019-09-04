import { testCaseX, testCaseY, mean_of_i as mean, r_CorrelationCoefficient as Pearson } from './PearsonsCC.mjs';

/* Linear Regression function: y = a + bx ,
   b = r(Sy/Sx) , a = y_bar - bx_bar
*/

let r = Pearson(testCaseX, testCaseY);
let meanX = mean(testCaseX);
let meanY = mean(testCaseY);

console.log(meanX);
document.getElementById('target').textContent = meanY;
