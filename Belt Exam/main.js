function empty(cart){
    alert('Your cart is empty!')
}

function dismiss(dismiss){
    dismiss = document.querySelector('#message')
    dismiss = dismiss.remove()
}

function setNewImage(){
    document.getElementById("original").src= "Images/succulents-1.jpg"

}

function setOldImage(){
    document.getElementById("original").src= "Images/succulents-2.jpg"
}