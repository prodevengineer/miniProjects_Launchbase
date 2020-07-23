const user = {
  name: "Diego",
  company:{
    name: "Rocketseat",
    colour: "purple",
    focus: "programming",
    address: {
      street: "Rua Guilherme Gembala",
      number: 260
    }
  } 
}

console.log(`The company ${user.company.name} is located at ${user.company.address.number} ${user.company.address.street}`)


// pt-br: console.log(`A empresa ${user.company.name} esta localizada na ${user.company.address.street}, ${user.company.address.number}`)

//another way of writing the console.log:
// console.log("A empresa " + `${user.company.name}` + " esta localizada na " + `${user.company.address.street}` + "," + `${user.company.address.number}` )