//Calculo de IMC ---- BMI Calculation
//Crie um programa para calcular o IMC e o nivel de obesidade de uma pessoa
//Write a code to calculate the BMI and the obesity level of a person.
const name= "Sarah";
const weight= 85;
const height=1.76;

const bmi= weight/(height * height);
let message= ""

if (bmi >= 30){
 message =`${name} you are not overweight`
} else {
 message =` ${name} you are overweight!`
}

console.log(message)

//Calculo de Aposentadoria --- Retirement Calculation
//Crie um programa para calcular a aposentadoria de uma pessoa
//Write a code to calculate a person's retirement.

const name="Mariah";
const sex="F";
const age=50;
const contribution= 25;

const sum= age + contribution;

const femaleRetirement = sex == 'F' && contribution >= 30 && sum >=85
const maleRetirement = sex == 'M' && contribution >= 35 && sum >=95

if (femaleRetirement || maleRetirement) {
    console.log(`${name} you can retire!`)
  } else {
    console.log(`${name} you can not retire yet!`)
  }

  