const users = [
  {
    name:"Charles",
    technologies: ["HTML", " CSS"]
  },
  {
    name:"Jasmine",
    technologies: ["JavaScript", " CSS"]
  },
  {
    name:"Tula",
    technologies: ["HTML", " CSS"]
  }
]

function printSentence (users) {
  for (let i=0; i < users.length; i++) {
    console.log(`${users[i].name} works with ${users[i].technologies}`)
  }
}
printSentence (users)