/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('taaaaaart');

var taartFoto = document.querySelector('#taartfoto');

//bron:https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
var button = document.querySelector('button:nth-of-type(1)');

function clickScroll() {
    window.scrollTo({
        top: 950,
        behavior: 'smooth'
    });
}

button.addEventListener('click', clickScroll);

var btnvideo = document.querySelector('.video');
var btnfoto = document.querySelector('.foto');
var videoEl = document.querySelector('video');
var volgende = document.querySelector('.btnvolgende');
var vorige = document.querySelector('.btnvorige')

function showVideo() {
    videoEl.style.display = "block";
    videoEl.classList.add('show');
    taartFoto.style.display = "none";
    btnvideo.style.display = "none";
    btnfoto.style.display = "block";
    volgende.classList.add('change');
    vorige.classList.add('change');
}

btnvideo.addEventListener('click', showVideo);

function showFoto() {
    taartFoto.style.display = "block";
    taartFoto.classList.add('show');
    videoEl.style.display = "none";
    btnfoto.style.display = "none";
    btnvideo.style.display = "block";
    volgende.classList.remove('change');
    vorige.classList.remove('change');
}

btnfoto.addEventListener('click', showFoto);


var dot1 = document.querySelector('.dot:nth-of-type(1)');
var dot2 = document.querySelector('.dot:nth-of-type(2)');
var dot3 = document.querySelector('.dot:nth-of-type(3)');
var dot4 = document.querySelector('.dot:nth-of-type(4)');
var dot5 = document.querySelector('.dot:nth-of-type(5)');

var tasText = document.querySelector('.tas');
var brilText = document.querySelector('.zonnebril');
var manText = document.querySelector('.man');
var zusjeText = document.querySelector('.zusje');
var babyText = document.querySelector('.baby');

var kiesButton = document.querySelector('.kies');

function showText() {
    brilText.style.display = "block";
    brilText.classList.add('on');
    tasText.style.display = "none";
    manText.style.display = "none";
    zusjeText.style.display = "none";
    babyText.style.display = "none";
    kiesButton.style.display = "block";
    kiesButton.classList.remove('babyknop');
    kiesButton.classList.remove('zusjeknop');
    kiesButton.classList.remove('tasknop');
    kiesButton.classList.remove('manknop');
    kiesButton.classList.add('brilknop');
    taartFoto.style.zIndex = -1;
}

dot1.addEventListener('click', showText);

function showText2() {
    babyText.style.display = "block";
    babyText.classList.add('on');
    tasText.style.display = "none";
    manText.style.display = "none";
    zusjeText.style.display = "none";
    brilText.style.display = "none";
    kiesButton.style.display = "block";
    kiesButton.classList.remove('brilknop');
    kiesButton.classList.remove('zusjeknop');
    kiesButton.classList.remove('tasknop');
    kiesButton.classList.remove('manknop');
    kiesButton.classList.add('babyknop');
    taartFoto.style.zIndex = -1;
}

dot2.addEventListener('click', showText2);

function showText3() {
    tasText.style.display = "block";
    tasText.classList.add('on');
    babyText.style.display = "none";
    manText.style.display = "none";
    zusjeText.style.display = "none";
    brilText.style.display = "none";
    kiesButton.style.display = "block";
    kiesButton.classList.remove('brilknop');
    kiesButton.classList.remove('babyknop');
    kiesButton.classList.remove('zusjeknop');
    kiesButton.classList.remove('manknop');
    kiesButton.classList.add('tasknop');
    taartFoto.style.zIndex = -1;
}

dot3.addEventListener('click', showText3);

function showText4() {
    zusjeText.style.display = "block";
    zusjeText.classList.add('on');
    babyText.style.display = "none";
    manText.style.display = "none";
    tasText.style.display = "none";
    brilText.style.display = "none";
    kiesButton.style.display = "block";
    kiesButton.classList.remove('brilknop');
    kiesButton.classList.remove('babyknop');
    kiesButton.classList.remove('tasknop');
    kiesButton.classList.remove('manknop');
    kiesButton.classList.add('zusjeknop');
    taartFoto.style.zIndex = -1;
}

dot4.addEventListener('click', showText4);

function showText5() {
    manText.style.display = "block";
    manText.classList.add('on');
    babyText.style.display = "none";
    zusjeText.style.display = "none";
    tasText.style.display = "none";
    brilText.style.display = "none";
    kiesButton.style.display = "block";
    kiesButton.classList.remove('brilknop');
    kiesButton.classList.remove('babyknop');
    kiesButton.classList.remove('zusjeknop');
    kiesButton.classList.remove('tasknop');
    kiesButton.classList.add('manknop');
    taartFoto.style.zIndex = -1;
}

dot5.addEventListener('click', showText5);

function removeText() {
    tasText.classList.remove('on');
    brilText.classList.remove('on');
    manText.classList.remove('on');
    zusjeText.classList.remove('on');
    babyText.classList.remove('on');
    kiesButton.style.display = "none";
    kiesButton.classList.remove('brilknop');
    kiesButton.classList.remove('babyknop');
    kiesButton.classList.remove('zusjeknop');
    kiesButton.classList.remove('tasknop');
    kiesButton.classList.remove('manknop');
    taartFoto.style.zIndex = +1;
}

kiesButton.addEventListener('click', removeText);


//var scrollheight = document.body.scrollHeight; // height of entire document
//var windowheight = window.innerHeight; // height of browser window

function showElement(){
    var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
//    console.log(scrolltop);
//    var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100;
//    console.log(scrollamount);
    if (scrolltop > 800) {
        taartFoto.classList.add('animate');
    }
    if (scrolltop < 800) {
        taartFoto.classList.remove('animate');
    }
}

window.addEventListener('scroll', showElement);


//bron: https://stackoverflow.com/questions/22018136/how-do-i-detect-if-something-is-being-clicked-in-javascript-without-using-jque
//var elementIsClicked = false; // declare the variable that tracks the state
//function clickHandler(){ // declare a function that updates the state
//  elementIsClicked = true;
//}
//
//console.log(clickHandler);
//
//dot1.addEventListener('click', clickHandler);
//dot2.addEventListener('click', clickHandler);
//dot3.addEventListener('click', clickHandler);
//dot4.addEventListener('click', clickHandler);
//dot5.addEventListener('click', clickHandler);
//
//var element = document.getElementById('myElement'); // grab a reference to your element
//element.addEventListener('click', clickHandler); // associate the function above with the click event
//
//
//// check if the element has been clicked every 2 seconds:
//function isElementClicked (){
//  console.log(elementIsClicked ? 'CLICKED' : 'NOT');
//}
//setInterval(isElementClicked, 2000);
