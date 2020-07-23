const name = "Savanah"
const sex = "F"
const age = 60
const contribution = 37

const contributionCalculation = age + contribution

const maleCanRetire = sex == "M" && contributionCalculation >= 95
const femaleCanRetire = sex == "F" && contributionCalculation >= 85

if (maleCanRetire || femaleCanRetire) {
  console.log(`${name}, you can retire!`)
} else {
  console.log(`${name}, you can NOT retire yet!`)
}
