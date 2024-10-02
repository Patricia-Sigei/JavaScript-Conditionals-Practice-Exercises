// function to ascertain flight booking eligibility
function eligibility (age, hasPassport, isFlightAvailable){
    if (age >= 18 && age <= 70 && hasPassport && isFlightAvailable){
        return "Booking successful";
    }else{
        return "Booking failed";
    }
}


console.log(eligibility(20, false, true));
console.log(eligibility(20, true, true));