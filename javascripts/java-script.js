
$(function() {
$('.marquee').marquee({
duration: 10000,
startVisible: true,
duplicated: true
});
});
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
let box10 = document.getElementById("box10")
let box11 = document.getElementById("box11")
let box12 = document.getElementById("box12")

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
            duration: 1000,
        }
    ).play()
    congrats.style.opacity = "0"
}


box1.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "1200 РУБ"

    modal_description.innerHTML = "Белая футболка"//this.children[0].alt
}
box2.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "Розовые домашние тапки для фанатов HOME PUNK"//this.children[0].alt
}
box3.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "1200 РУБ"

    modal_description.innerHTML = "Футболка собака"//this.children[0].alt
}
box4.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "1200 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
box5.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "Черное худи для фанатов HOME PUNK"//this.children[0].alt
}
box6.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
box7.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
box8.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "1500 РУБ"

    modal_description.innerHTML = "Печатное издания журнала о пространстве дома для фестивали Home Punk Live Season"//this.children[0].alt
}
box9.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
box10.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
box11.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
box12.onclick = function() {

    modal_window.style.display = "block"
    modal_img.src = this.children[0].src

    modal_price.innerHTML = "400 РУБ"

    modal_description.innerHTML = "футболка"//this.children[0].alt
}
let card = document.getElementById("card")
let hidden = 0



document.addEventListener('click', function (e) {
    let target = e.target;
    let its = target === card || card.contains(target);
    if(!its && !hidden){
        card.style.display = "none"
        hidden = 1
    }
    else {
        if(card.style.display === "flex"){
            hidden = 0
        }
    }
});
cat.onclick = function () {
    card.style.display = "flex"
}
