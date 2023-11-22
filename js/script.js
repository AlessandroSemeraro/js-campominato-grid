const button = document.querySelector('button');

const mainContentEl=document.querySelector('main section.container');

//click event//
button.addEventListener("click", function() {

    mainContentEl.innerHTML='';

    for(let i = 1; i <= 100; i++){
        const newSquare = createSquare();
       
        mainContentEl.appendChild(newSquare);

        const contentSquare = i;
        newSquare.innerHTML = contentSquare;
        
        newSquare.addEventListener('click',function(){
        newSquare.classList.toggle('clicked-blue'); 
        console.log(contentSquare);
        }
)}
})
  
//FUNCTION//
function createSquare(){
const newSquareEl = document.createElement('div');
newSquareEl.classList.add('square');
newSquareEl.classList.add('flex-aj-cent');
return newSquareEl
}

