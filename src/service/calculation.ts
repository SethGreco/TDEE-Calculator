
// "BMR": "66 + (13.7 X weight in kg) + (5 x height in cm) – (6.8 x age in yrs)"  MALE
//Women BMR = 655 + (9.6 X weight in kg) + (1.8 x height in cm) – (4.7 x age in yrs)
export const calculateBMR = (gender: string, weight: number, feet: number, inches: number, age: number, activeLevel: string): number => {
  let lbs = convertWeight(weight, gender)
  let cm = getHeight(feet, inches, gender)
  let yrs = getAge(age, gender)
  let genderAddRate!: number;
  if (gender === "male"){
    genderAddRate = 66
  }else if (gender === "female"){
    genderAddRate = 665
  }
  return (genderAddRate + lbs + cm - yrs)
}


// convert feet to inches or into cm
function getHeight(feet: number, inches: number, gender: string){
  if (gender === "female"){
    return 1.8 * (((feet * 12) + inches) * 2.54)
  }
  return 5 * (((feet * 12) + inches) * 2.54)
}

function convertWeight (weight: number, gender: string): number{
  // convert kg to lbs
  if (gender === "female"){
    return 9.6 * (weight / 2.2) 
  }
  return 13.7 * (weight / 2.2)
}

function getAge(age: number, gender: string): number{
  if (gender === "female"){
    return 4.7 * age 
  }
  return 6.8 * age
}

export const  activityLevel =(bmr: number, active: string): number => {
//   Sedentary (little to no exercise + work a desk job) = 1.2
// Lightly Active (light exercise 1-3 days / week) = 1.375
// Moderately Active (moderate exercise 3-5 days / week) = 1.55
// Very Active (heavy exercise 6-7 days / week) = 1.725
// Extremely Active (very heavy exercise, hard labor job, training 2x / day) = 1.9
let multiplier;
if (active.toLowerCase() === "sedentary"){
  multiplier = 1.2
}else if(active.toLowerCase() === "lightly") {
  multiplier = 1.375
}else if(active.toLowerCase() === "moderatley"){
  multiplier = 1.55
}else if(active.toLowerCase() === "very active"){
  multiplier = 1.725
}else{
  multiplier = 1.9
}
return bmr * multiplier;
}