const areaBase = document.getElementById('areaB');
const areaHeight = document.getElementById('areaH');
const areaBtn = document.getElementById('btn-area');
// result
const allResult = document.getElementById('area-result');
// result
//cart2
const rectWidth = document.getElementById('recW');
const rectHeight = document.getElementById('recH');
//cart3
const paraBase = document.getElementById('paraB');
const paraHeight = document.getElementById('paraH');


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


 

 
