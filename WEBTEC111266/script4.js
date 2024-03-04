const data = [
  { id: 1, value: 10 },
  { id: 2, value: 5 },
  { id: 3, value: 9 },
  { id: 4, value: 12 },
  { id: 5, value: 6 },
];

//สร้าง arr ที่มีแต่ value จากนั้นให้กรอกเฉพาะค่าที่ หารด้วย 3 ลงตัว แล้วจึงหาผลรวมของผลที่ได้

const arr = data.map((item) => item.value);
console.log(arr);

const mod3 = arr.filter((value) => value % 3 === 0);
console.log(mod3);

const sunMod3 = mod3.reduce((acc, cur) => acc + cur, 0);
console.log(sunMod3);

const result = data
  .map((item) => item.value)
  .filter((value) => value % 3 === 0)
  .reduce((acc, cur) => acc + cur);

console.log(`result => ${result}`);
