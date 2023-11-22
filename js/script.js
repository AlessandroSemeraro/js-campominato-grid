const button = document.querySelector('button');
console.log(button)

//click event//
button.addEventListener("click", function() {
    
    const mainContentEl=document.querySelector('main section.container');
    console.log(mainContentEl)

    for(let i = 1; i <= 100; i++){
        mainContentEl.appendChild(createSquare());
    }

    //NUMBERS//
    for(let numberSquare = 1; numberSquare <= 100; numberSquare++){
       console.log(numberSquare)
    }
    }); 


//FUNCTION//
function createSquare(){
const newSquareEl = document.createElement('div');

newSquareEl.addEventListener("click", function() {
newSquareEl.classList.toggle('clicked-blue');
})

newSquareEl.classList.add('square');

return newSquareEl
}


