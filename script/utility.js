

const allButton = document.getElementsByClassName("w-1/5");

for(let i = 0 ; i<allButton.length; i++){
const button = allButton[i];
button.addEventListener('click',function(){
    console.log('clicked');
    button.classList.add('jsButton');
    const seatName = button.innerText;
    // show seat name in right side ===
    const spanSeatName = document.getElementById('seat-name').innerText = seatName;

    // (- total seat)===
    let totalSeat = parseInt(document.getElementById("total-seat").innerText);
    let updatedTotalSeat =  totalSeat -=1 ;
    // totalSeat= updatedTotalSeat;

    let changedTotalSeat =document.getElementById("total-seat").innerText= updatedTotalSeat;

 
  
    // booked seat here ===

    let bookedSeat =parseInt( document.getElementById('booked-seat').innerText);
let updatedBookedSeat = bookedSeat += 1;
let changedBookedSeat = document.getElementById('booked-seat').innerText=updatedBookedSeat;

if(bookedSeat === 5){
    alert('do not book any more seat')
    button.classList.remove('jsButton')

}


    



    

})

}




