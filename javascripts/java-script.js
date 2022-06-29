$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")

let modal_window = document.getElementById("modal-window")
let modal_img = document.getElementById("modal-window-image")
let modal_name = document.getElementById("modal-window-name")
let modal_description = document.getElementById("modal-window-description")
let modal_price = document.getElementById("modal-window-price")
let modal_button = document.getElementById("modal-window-button")
let congrats = document.getElementById("congrats")
modal_button.onclick = function () {
    modal_window.style.display = "none"
    congrats.style.opacity = "1"
    congrats.animate(
        [
            { opacity: 1},
            { opacity: 0}
        ], {
            duration: 3000,
        }
    ).play()
    congrats.style.opacity = "0" 
}


box1.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
box2.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}

dog.onclick = function() {
    modal_window.style.display = "block"
    modal_img.src = this.children[0].src
    modal_name.innerHTML = "Dog"
    modal_price.innerHTML = "250$"
    modal_description.innerHTML = this.children[0].alt
}
