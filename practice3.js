// function to evaluate job eligibility
function jobEligibility(age, yearExperience, knowsJavascript){
    if (age > 25 && age < 50 && (yearExperience > 5 || (age < 30 && yearExperience >= 3)) && knowsJavascript){
        return "Eligible for the job"
    }else{
        return "Not eligible"
    }
}

console.log(jobEligibility(65, 5, true))
console.log(jobEligibility(28, 4, true))
console.log(jobEligibility(16, 7, true))