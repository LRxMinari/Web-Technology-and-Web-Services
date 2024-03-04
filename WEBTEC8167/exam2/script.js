const account1 = {
  owner: "Prayutth Snow",
  user: "yuth",
  psw: "1111",
};
const account2 = {
  owner: "Lisa Lazoo",
  user: "lisa",
  psw: "abcd",
};

const accounts = [account1, account2];
//ใช้คำสั่ง find หา lis แล้วค่อยหาตาม username

const btnLogin = document.querySelector(".login_btn");
const inputLoginUser = document.querySelector(".login_input--user");
const inputLoginPsw = document.querySelector(".login_input--psw");
const IbIWelcome = document.querySelector(".welcome");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const user = inputLoginUser.value;
  const psw = inputLoginPsw.value;

  currentAcc = accounts.find((acc) => acc.user === user);
  if (currentAcc.psw === psw) {
    IbIWelcome.textContent = `ยินดีต้อนรับ ${user}`;
    inputLoginUser.value = "";
    inputLoginPsw.value = "";
  }

  // console.log(currentAcc);

  // if (user === "admin" && psw === "1234") {
  // 	IbIWelcome.textContent = `ยินดีต้อนรับ ${user}`;
  // 	// ให้ clear input: user,input: psw
  // 	inputLoginUser.value = "";
  // 	inputLoginPsw.value = "";
  // }
});
