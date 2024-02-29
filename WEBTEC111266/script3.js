const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbers = [9, 10, 11, 12];
let sumFor = 0;
let sumForEach = 0;
let sumForIn = 0;
let sumForOf = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 == 0) {
    sumFor = sumFor + numbers[i];
  }
}

numbers.forEach(function (i) {
  if (i % 3 == 0) {
    sumForEach = sumForEach + i;
  }
});

for (const i in numbers) {
  if (numbers[i] % 3 == 0) {
    sumForIn = sumForIn + numbers[i];
  }
}

for (const i of numbers) {
  if (i % 3 == 0) {
    sumForOf = sumForOf + i;
  }
}

console.log(
  `sumFor : ${sumFor}, sumForEach : ${sumForEach}, sumForIn : ${sumForIn}, sumForOf : ${sumForOf}`
);

// Map, Reduce, Sort, Filter
//ให้สร้าง  sqrNumbers ที่เอาแต่ละค่าใน numbers มายกกำลังสอง

// const sqrNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
// 	sqrNumbers[i] = numbers[i] * numbers[i];
// 	// sqrNumbers.push(numbers[i] * numbers[i]);
// }

const sqrNumbers = numbers.map((num) => {
  return num * num;
});

//หาผลรวมของ numbers

// let sum = 0;
// const sumNum = numbers.map((num) => {
// 	sum = sum + num;
// });

// console.log(sum);

const sumNum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumNum);

console.log(sqrNumbers.reduce((acc, cur) => acc + cur));

const rndNumber = [1, 2, 4, 9, 5, 6, 3, 8, 7];

const sortedNum = rndNumber.sort((a, b) => a - b);

console.log(sortedNum);

const evenNum = sortedNum.filter((num) => num % 2 === 0);

console.log(evenNum);
