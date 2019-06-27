/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('taaaaaart');

var taartFoto = document.querySelector('#taartfoto');

//bron:https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
var button = document.querySelector('.btnzoek');

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
    dot1.style.display = "none";
    dot2.style.display = "none";
    dot3.style.display = "none";
    dot4.style.display = "none";
    dot5.style.display = "none";
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
    dot1.style.display = "block";
    dot2.style.display = "block";
    dot3.style.display = "block";
    dot4.style.display = "block";
    dot5.style.display = "block";
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
var people = document.querySelector('.people');

var kiesButton = document.querySelector('.kies');

function showText() {
    brilText.style.display = "block";
    brilText.classList.add('on');
    tasText.style.display = "none";
    manText.style.display = "none";
    zusjeText.style.display = "none";
    babyText.style.display = "none";
    people.style.display = "none";
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
    people.style.display = "none";
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
    people.style.display = "block";
    people.classList.add('on');
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
    people.style.display = "none";
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
    people.style.display = "none";
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
    people.classList.remove('on');
    kiesButton.style.display = "none";
    kiesButton.classList.remove('brilknop');
    kiesButton.classList.remove('babyknop');
    kiesButton.classList.remove('zusjeknop');
    kiesButton.classList.remove('tasknop');
    kiesButton.classList.remove('manknop');
    taartFoto.style.zIndex = +1;
}

kiesButton.addEventListener('click', removeText);



var headerEl = document.querySelector('header');

function showElement(){
    var scrolltop = window.pageYOffset;
    if (scrolltop > 800) {
        taartFoto.classList.add('animate');
        headerEl.style.opacity= '0.8';
        btnvideo.style.opacity = "1";

    }
    if (scrolltop < 800) {
        taartFoto.classList.remove('animate');
        headerEl.style.opacity = '1';
        btnvideo.style.opacity = "0";
    }
}

window.addEventListener('scroll', showElement);


//bron: https://sabe.io/tutorials/how-to-create-modal-popup-box
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if(event.target === modal) {
        toggleModal();
    }
}

volgende.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
