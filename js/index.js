// Your code goes here
console.log('test')

// mouseover Listener
const nav = document.querySelector('nav')
function mouseOver(event) {
    event.target.style.color = '#C6DEA6'
    event.target.style.transition = '0.5s'
}
nav.addEventListener('mouseover', mouseOver)

// mouseout Listener
const mouseout = document.querySelector('nav')
function mouseOut(event) {
    event.target.style.color = 'purple'
    event.target.style.transition = '0.5s'
}
mouseout.addEventListener('mouseout', mouseOut)

// mouseenter Listener
const mouseenter = document.querySelector('footer')
function footBG(event) {
    event.target.style.background = 'purple'
    event.target.style.transition = '0.5s'
}
mouseenter.addEventListener('mouseenter', footBG)

// mouseleave Listener
const mouseleave = document.querySelector('footer')
function footBG2(event) {
    event.target.style.background = 'brown'
    event.target.style.transition = '0.5s'
}
mouseleave.addEventListener('mouseleave', footBG2)

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

// wheel Listener
const wheel = document.querySelector('img')
function scrollSize(event) {
    event.target.style.height = '60vh'
}
wheel.addEventListener('wheel', scrollSize)

// dblclick Listener
const navBG = document.querySelector('.main-navigation')
function doubleClick(event) {
    event.target.style.background = '#218380'
    event.target.style.transition = '0.5s'
}
navBG.addEventListener('dblclick', doubleClick)

// // select Listener
const select = document.querySelector('body')
function bodyBG(event) {
    event.target.style.background = 'blue'
    event.target.style.transition = '0.5s'
}
select.addEventListener('select', bodyBG)