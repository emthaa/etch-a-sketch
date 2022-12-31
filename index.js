let white = true;

function makeBoard(size){
let board = document.querySelector('#board');
let squares = document.querySelectorAll(".square");
squares.forEach((square) => square.remove());
board.style.gridTemplateColumns = `repeat(${size},1fr)`;
board.style.gridTemplateRows = `repeat(${size},1fr)`;
amountOfSquare = size*size
for(let i =0;i<amountOfSquare;i++){
    console.log('made one square')
    let square = document.createElement('div');
    square.addEventListener ("mouseover",() =>{
        square.style.border = '.5px solid black';
        square.style.backgroundColor = '#202020'
    });
    square.classList.add('square');
    square.style.backgroundColor = 'lightgray';
    square.style.border = '.5px solid gray';
    board.insertAdjacentElement('beforeend',square);
}

}


makeBoard(16);
//var jobValue = document.getElementById('txtJob').value



function changeSize(input){
    if (input>=2 && input<=100){
        let newBoard = makeBoard(input);
        return newBoard;
    }else{
        console.log('square error');
    }
    
}




function resetSquares(size){
    console.log('squares reset');


    makeBoard(size);
}


let slider = document.querySelector('.slider');
let sliderOutput = document.querySelector('.output');
let clearButton = document.querySelector('#clearButton');
sliderOutput.innerHTML = slider.value + 'x' + slider.value;
//add some styling 
slider.addEventListener('input',function(){
    sliderOutput.innerHTML = slider.value + 'x' + slider.value;
    makeBoard(slider.value);
},false);

clearButton.addEventListener('click',function(){
    makeBoard(slider.value);
},false);
