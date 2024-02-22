const aone = document.getElementById('aone').childNodes;
console.log(aone);
for (a of aone){
    a.addEventListener('click', changeBgColor)
}

function changeBgColor(){
    let seat = document.getElementById('a');
    seat.style.background = '#1DD100';

}