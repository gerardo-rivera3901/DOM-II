// Your code goes here
console.log('test')

// mouseover Listener
const nav = document.querySelector('nav')
function mouseOver(event) {
    event.target.style.color = '#C6DEA6'
}
nav.addEventListener('mouseover', mouseOver)

// keydown Listener
const keydown = document.querySelector('body')
function keyPress(event) {
    event.target.style.background = 'orange'
    event.target.style.transition = '0.5s'
}
keydown.addEventListener('keydown', keyPress)

// keyup Listener
const keyup = document.querySelector('body')
function keyFly(event) {
    event.target.style.background = '#A8D0DB'
    event.target.style.transition = '0.5s'
}
keyup.addEventListener('keyup', keyFly)

// auxClick Listener
const auxClick = document.querySelector('body')
function otherClick(event) {
    event.target.style.color = 'red'
    event.target.style.transition = '0.5s'
}
auxClick.addEventListener('auxclick', otherClick)

// click Listener
const click = document.querySelector('body')
function regClick(event) {
    event.target.style.color = '#29BF12'
    event.target.style.transition = '0.5s'
}
click.addEventListener('click', regClick)


// resize Listener
// const resize = document.querySelector('')


// scroll Listener
// const scroll = document.querySelector('')


// load Listener
const load = document.querySelector('body')
function loadSizes(event) {
    event.target.style.color = 'yellow'
}
load.addEventListener('load', loadSizes)

// dblclick Listener
const navBG = document.querySelector('.main-navigation')
function doubleClick(event) {
    event.target.style.background = '#218380'
    event.target.style.transition = '0.5s'
}
navBG.addEventListener('dblclick', doubleClick)

// // drag / drop Listener
// const dragdrop = document.querySelector('')
