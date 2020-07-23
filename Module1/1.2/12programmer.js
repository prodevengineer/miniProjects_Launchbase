const programmer ={
  name: "Leah",
  age: 27,
  technologies: [
    {skill: "C++", expertise: "Desktop"},
    {skill: "Python", expertise: "Data Science"},
    {skill: "JavaScript", expertise: "Web/Mobile"}
  ]
}

console.log(`The user ${programmer.name} is ${programmer.age} years-old and uses the technology ${programmer.technologies[0].skill} with expertise in ${programmer.technologies[0].expertise}`)