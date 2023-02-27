const areaBase = document.getElementById('areaB');
const areaHeight = document.getElementById('areaH');
const areaBtn = document.getElementById('btn-area');
const triResult = document.getElementById('area-result');

function triangleResult (){
   const triang1 =areaBase.value ;
   const triang2 = areaHeight.value;
   const result = 0.5 * triang1 * triang2 ;
   triResult.innerText = result;
   
}
document.getElementById('btn-area').addEventListener('click', 
triangleResult

)

 

 
