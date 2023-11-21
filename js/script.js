const button = document.querySelector('button');
console.log(button)



//click event//
button.addEventListener("click", function() {
    
    const mainContentEl=document.querySelector('main section.container');
    console.log(mainContentEl)

    for(let i = 0; i <= 99; i++){
        mainContentEl.appendChild(createSquare());
    }   
}); 

//FUNCTION//
function createSquare(){
    const newSquareEl = document.createElement('div');
    newSquareEl.classList.add('square');
    return newSquareEl
}