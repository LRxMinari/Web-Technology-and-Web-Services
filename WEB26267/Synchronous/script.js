//Synchronous
// function brewCoffee() {
//   console.log("Start brewing coffe");
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + 5000);
//   console.log("Coffee is ready");

//   console.log("Ordering coffee");
//   brewCoffee();
//   console.log("Coffee recieved, doing other tasks.");
// }

//Asynchronous
// function brewCoffee() {
//   console.log("Start brewing coffe");
//   setTimeout(() => {
//     console.log("Coffee is ready");
//     callback();
//   }, 3000); //ชงกาแฟใน 3 วินาทีและเรียก callback

//   console.log("Ordering coffee");
//   brewCoffee(() => {
//     console.log("Coffee recieved, doing other tasks.");
//   });
//   console.log("Waiting for coffee, doing other tasks.");
// }

//Asynchronous 2: async - await
function brewCoffee(callback) {
  return new Promise((resolve) => {
    console.log("Start brewing coffe");
    setTimeout(() => {
      console.log("Coffee is ready");
      callback();
    }, 3000); //ชงกาแฟใน 3 วินาทีและเรียก callback
  });
}

async function orderCoffee() {
  console.log("Ordering coffee");
  await brewCoffee();
  console.log("Coffee recieved, doing other tasks.");
}
orderCoffee();
console.log("Waiting for coffee, doing other tasks.");
