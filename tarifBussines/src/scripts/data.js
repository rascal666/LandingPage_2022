const dom = document.querySelector('.js-body')
import anime from 'animejs/lib/anime.es.js'
import WOW from './wow'


let currentData = new Date();
const month = currentData.getMonth() + 1
let data = currentData.getDate() + '0' + month + '22'

new WOW().init();

anime({
    targets: '.rascal',
    translateX: 270,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
});



dom.innerHTML = dom.innerHTML.replace(/curData/gi, data)

