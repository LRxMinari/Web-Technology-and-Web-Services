let machineNumber = Math.ceil(Math.random() * 21);
let score = 10;
let highscore = 0;

console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "ว้าา!! แพ้อีกละ";

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 15;
// document.addEventListener("DOMContentLoaded", () => {
// 	const btnCheck = document.querySelector(".btn check");

// 	btnCheck.addEventListener("click", () => {
// 		console.log("click");
// 	});
// });

// const btnCheck = document.querySelector(".btn check");

// btnCheck.addEventListener("click", () => {});
console.log("AnsNumber : " + machineNumber);

document.querySelector(".check").addEventListener("click", () => {
  //รับค่า userNumber ไปเทียบกับ machineNumber มี 3 ทางเลือก สูงไป ต่ำไป ถูุกต้อง
  //ถ้าทายผิด ให้บอกไป แล้วลด score ลงไป
  const userNumber = Number(document.querySelector(".guess").value);
  console.log(userNumber);
  if (score > 0) {
    if (userNumber != machineNumber) {
      if (userNumber > 21) {
        document.querySelector(".message").textContent =
          "นี่!! อย่าใส่เลขเกิน 21 นะ😡";
      } else if (userNumber < 1) {
        document.querySelector(".message").textContent =
          "นี่!! ใส่เลขให้มากกว่า 1 หน่อยน้า😥";
      } else if (userNumber > machineNumber) {
        document.querySelector(".message").textContent =
          "ว้าา!! ใส่เลขเยอะเกินไปนะ😔";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (userNumber < machineNumber) {
        document.querySelector(".message").textContent =
          "ว้าา!! ใส่เลขน้อยเกินไปนะ😔";
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      document.querySelector(".message").textContent =
        "เย้!! ทายถูกแล้ว เก่งมักๆ👍🏻 ";
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".secret").textContent = machineNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  } else {
    document.querySelector(".message").textContent =
      "แงง😭 แพ้แล้วน้าลองทายใหม่✌🏻";
  }
});
document.querySelector(".restart").addEventListener("click", () => {
  score = 10;
  machineNumber = Math.ceil(Math.random() * 21);
  console.log("AnsNumber : " + machineNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "เอ้า! ทายมา";
  document.querySelector(".secret").textContent = "?";
});
