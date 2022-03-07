
var likes = 9

function clickHandler(){
    likes++
    var h3 = document.querySelector("#first_likes")
    h3.innerText = likes + " likes"
    console.log(likes)
}

var likes1 = 12
function click1Handler(){
    likes1++
    var h3 = document.querySelector("#second_likes")
    h3.innerText = likes1 + " likes"
}

var likes3 = 9
function click2Handler(){
    
    likes3++
    var h3 = document.querySelector("#third_likes")
    h3.innerText = likes3 + " likes"
    console.log(likes3)
}