const areaBase = document.getElementById('areaB');
const areaHeight = document.getElementById('areaH');
const areaBtn = document.getElementById('btn-area');
// result
const allResult = document.getElementById('area-result');
// result
//card 2
const rectWidth = document.getElementById('recW');
const rectHeight = document.getElementById('recH');
//card 3
const paraBase = document.getElementById('paraB');
const paraHeight = document.getElementById('paraH');
//card 4
const rhomdia1 =document.getElementById('rhomd1');
const rhomdia2 =document.getElementById('rhomd2');
//card 5
const pentaSidep = document.getElementById('sidep');
const pentaSideb = document.getElementById('sideb');
//card 6
const ellipseA = document.getElementById('ellipse1');
const ellipseB = document.getElementById('ellipse2');
function triangleResult (){
   const triang1 =areaBase.value ;
   const triang2 = areaHeight.value;
   const result = 0.5 * triang1 * triang2 ;
   allResult.innerText = result;
   
}
document.getElementById('btn-area').addEventListener('click', 
triangleResult

)

//2nd card
function rectangleResult (){
    const rect1 =rectWidth.value ;
    const rect2 = rectHeight.value;
    const result = rect1 * rect2 ;
    allResult.innerText = result;
    
 }
 document.getElementById('btn-rect').addEventListener('click', 
rectangleResult

)
//3rd

function paraResult (){
   const para1 =paraBase.value ;
   const para2 = paraHeight.value;
   const result = para1 * para2;
   allResult.innerText = result;
   
}
document.getElementById('btn-para').addEventListener('click', 

paraResult
)
//card 4
function rhombusResult (){
   const rhom1 =rhomdia1.value ;
   const rhom2 = rhomdia2.value;
   const result = 0.5 * rhom1 * rhom2 ;
   allResult.innerText = result;
   
}
document.getElementById('btn-rhom').addEventListener('click', 
rhombusResult

)
//card 5
function pentaResult (){
  const penta1 =pentaSidep.value ;
  const penta2 = pentaSideb.value;
  const result = 0.5 *penta1  * penta2;
  allResult.innerText = result;
  
}
document.getElementById('btn-penta').addEventListener('click', 
pentaResult

)
//CARD 6
