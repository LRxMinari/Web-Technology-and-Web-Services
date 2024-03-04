for (let i = 0; i <= 10; i++) {
  console.log(`count number ${i}`);
}

const numArr = [1, 2, 3, 4, 5];

for (let i = 0; i < numArr.length; i++) {
  console.log(`ยกน้ำหนัก ครั้งที่ ${numArr[i]}`);
}

let count = 0;
while (count < numArr.length) {
  console.log(`count #${numArr[count]}`);
  count++;
}

numArr.forEach(function (num) {
  console.log(`Show num ${num}`);
});

numArr.forEach((num) => console.log(`num => ${num}`));

numArr.forEach((v, i, a) => console.log(`${v},${i},${a}`));

const person = {
  name: "Jame",
  age: 28,
  gender: "male",
};

for (const key in person) {
  console.log(`${key} => ${person[key]}`);
}

for (const num of numArr) {
  console.log(num);
}
