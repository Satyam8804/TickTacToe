let box = document.querySelectorAll('.box')
let chance = document.querySelector('.chance')
let result = document.querySelector('.result')
let reset = document.querySelector('.reset')
let line = document.querySelector('.line')
box = Array.from(box)

let currentPlayer = "X"


function checkForWinner(currentPlayer){
    let winningCombinations = [
        [0,1,2,0,-125,0],
        [3,4,5,0,0,0],
        [6,7,8,0,125,0],
        [0,3,6,-125,0,90],
        [1,4,7,0,0,90],
        [2,5,8,0,125,90],
        [0,4,8,0,0,45],
        [2,4,6,0,0,135]
    ]
    winningCombinations.forEach(e=>{
        if((box[e[0]].innerText == box[e[1]].innerText) && (box[e[1]].innerText== box[e[2]].innerText) && (box[e[1]].innerText!="") ){
            document.querySelector('.result').innerText = "Winner : " + currentPlayer;
            // isGameOver = true;
            document.querySelector(".line").style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width ="450px"
            
        }
        
    })
   
   
}

// function highlightCells(combination){
//     combination.forEach(function (idx){
//         box[idx].classList.add("highlight")
        
//     })
// }
// function removeHighlightedCells(combination){
//     combination.forEach(function (idx){
//         box[idx].classList.remove("highlight")
        
//     })
// }

box.forEach(function(box){
    box.addEventListener('click',function(){
        if(box.innerText.trim() !="") return
        box.innerText = currentPlayer;
        
        checkForWinner(currentPlayer)
        
        
        currentPlayer = currentPlayer == "X" ?"O" :"X"
        chance.innerText = "Chance : " + currentPlayer
    })
})

reset.addEventListener('click',function(combination){
    let boxTexts = document.querySelectorAll('.box');
    Array.from(boxTexts).forEach(element =>{
       
        element.innerText= ""
        
    })
    // removeHighlightedCells(combination)
    currentPlayer="X"
    chance.innerText = "Chance : " + currentPlayer
    result.innerText=""
    line.style.width = "0"
    
    

})

