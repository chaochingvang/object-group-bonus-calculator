$(document).ready(jqReady);
function jqReady() {
  console.log('jquery ready');
  $('#button').on('click', displayBonus);
}

function displayBonus() {
  let outputText = loopEmployees(employees);
  console.log(outputText);

  let outputEl = $('#individualBonusCaluculation');   //outputEl is set to ul element with ID
  outputEl.empty();   //empties element
  for (let i in outputText) {
    outputEl.append(`<ul><li>${outputText[i].name}</li> <li>${outputText[i].bonusPercentage}%</li> <li>$${outputText[i].totalCompensation}</li> <li>$${outputText[i].totalBonus}</li > </ul>`);    //output onto DOM
  }
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function calculateBonusPercentage(employee) {
  let totalBonusPercent = 0;

  // checking annual salary if over 65k, -1%
  if (employee.annualSalary > 65000) {
    totalBonusPercent -= 1;
  }
  // console.log(totalBonusPercent);

  // checking employeeNumber if 4 digits, +5%
  if (employee.employeeNumber.length === 4) {
    totalBonusPercent += 5;
  }
  // console.log(totalBonusPercent);

  // not checking if rating = 2, because it has no change on bonus%
  // checking employeeRating, if 3, +4%
  if (employee.reviewRating === 3) {
    totalBonusPercent += 4;
  }
  // checking employeeRating, if 4, +6%
  else if (employee.reviewRating === 4) {
    totalBonusPercent += 6;
  }
  // checking employeeRating, if 5, +10%
  else if (employee.reviewRating === 5) {
    totalBonusPercent += 10;
  }
  // console.log(totalBonusPercent);

  // calculating bonusPercentage
  if (totalBonusPercent > 13) {
    totalBonusPercent = 13;
  }
  else if (totalBonusPercent < 0) {
    totalBonusPercent = 0;
  }
  return totalBonusPercent;
  // console.log(totalBonusPercent);
}


function employeeBonusList(employeeObject) {
  let totalBonusVariable = employeeObject.annualSalary * (calculateBonusPercentage(employeeObject) / 100);
  let newObject = {
    name: employeeObject.name,
    bonusPercentage: calculateBonusPercentage(employeeObject),
    totalCompensation: Number(employeeObject.annualSalary) + totalBonusVariable,
    totalBonus: totalBonusVariable
  }
  console.log('in employeebonus function');
  return newObject;
}

// employeeBonusList(employees[2]);
function loopEmployees(employeeArray) {
  let loopArray = [];
  for (let i in employeeArray) {
    console.log(employeeBonusList(employeeArray[i]));
    loopArray.push(employeeBonusList(employeeArray[i]));
    // loopArray.push(employeeArray[i]);
  }
  return loopArray;
}

console.log(loopEmployees(employees));

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
