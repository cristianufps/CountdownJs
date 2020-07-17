
console.log('Cargo');
var countdown = document.getElementById("countdown");

var initialValue = countdown.innerHTML;

setInterval(function (){
    initialValue = initialValue > 0 ? initialValue -1 : 0;
    countdown.innerHTML = initialValue;

}, 1000);

