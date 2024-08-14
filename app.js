let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".new");
let msg = document.querySelector("p");

let playerO = true;

const resetgame =()=>{
    playerO = true;
    enable();
    msg.innerHTML="";
}
const winpatterns=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

const disable =()=>{
    for(box of boxes){
        box.disabled= true;
    }
}

const enable =()=>{
    for(box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
       if(playerO){
        box.innerText = "O";
        playerO = false;
       }
       else{
        box.innerText = "X";
        playerO = true;
       }
       box.disabled= true;

    showresult();
    })
})
const winner=(winner)=>{
    msg.innerHTML = `<h1>Congratulations the winner is ${winner}!</h1>`
    disable();
}

const showresult=()=>{
 for(let pattern of winpatterns){
    pos1 = boxes[pattern[0]].innerText;
    pos2 = boxes[pattern[1]].innerText;
    pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            winner(pos1)
        }
    }
 }
}

newbtn.addEventListener("click", resetgame);
