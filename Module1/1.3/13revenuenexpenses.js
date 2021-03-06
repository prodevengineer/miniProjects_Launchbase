const users = [
  {
    name: "Saul",
    revenues: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Mark",
    revenues: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucy",
    revenues: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

function calculateBalanceStatement(revenues,expenses){
  const sumRevenues= sumNumbers(revenues)
  const sumExpenses= sumNumbers(expenses)

  return sumRevenues - sumExpenses
}

function sumNumbers(numbers) {
  let sum=0
  for (let number of numbers){
    sum += sum + number
  }
  return sum
}

for (let user of users){
  const balanceStatement = calculateBalanceStatement(user.revenues,user.expenses)
  if (balanceStatement > 0){
    console.log(`${user.name} has a POSITIVE balance statement of ${balanceStatement.toFixed(2)}`)
  } else {
    console.log(`${user.name} has a NEGATIVE balance statement of ${balanceStatement.toFixed(2)}`)
  }
}

