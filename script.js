let birthDay = prompt("When is your birthday? (type as MM-DD)");
let birthDay25 = "2025-" + birthDay + "T00:00:00-04:00";
const bDay = new Date (birthDay25);
console.log(bDay);

const currentDate = new Date;
currentDate.setHours(0, 0, 0, 0);
 console.log(currentDate); // Example: "Wed Sep 24 2025"

if (bDay < currentDate) {
    alert("It was already your birthday this year!")
}
else if (bDay > currentDate){
    alert("It hasn't been your birthday this year yet!")
}
else (bDay == currentDate){ 
    alert("Happy Birthday!")
};