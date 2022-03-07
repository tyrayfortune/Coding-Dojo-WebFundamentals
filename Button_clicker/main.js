function logme(event) {
    if(event.innerHTML == "Login"){
        event.innerHTML = "Logout"
    }
    else{
        event.innerHTML = "Login"
    }
}

function dissapear(gone){
    gone.remove()
}

function like(like){
    alert('Ninja was liked')
}