const users = [
  {name:"Charles", technologies: ["HTML", "CSS"]},
  {name:"Jasmine", technologies: ["JavaScript", "CSS"]},
  {name:"Tula", technologies: ["HTML", "CSS"]}
]

function checkCssUse (users) {
  for (let technology of users.technologies) {
    if (technology == "CSS"){
      return true
    }
  }
  return false 
}

for (let i=0; i < users.length; i++) {
  const work = checkCssUse(users[i])
  if (work) {
    console.log(`${users[i].name} works with CSS`)
  }  
}

//Another way:
// for (let i in users) {
//   const work = checkCssUse(users[i])
//   if (work) {
//     console.log(`${users[i].name} works with CSS`)
//   }  
// }

