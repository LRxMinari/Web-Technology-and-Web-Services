const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkPassword(password, confirm);
  checkUsername(6, 10);
});

const checkPassword = (password, confirm) => {
  if (password !== confirm) {
    showErrMessage("รหัสผ่านไม่ตรงกัน", confirm);
  } else {
    showSuccessBorder(confirm);
  }
};

const showErrMessage = (message) => {
  const formControl = confirm.parentElement;
  formControl.className = "frmDiv error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccessBorder = (input) => {
  const formControl = input.parentElement;
  formControl.className = "frmDiv success";
};

const checkUsername = (min, max) => {
  if (username.value.length < min) {
    showErrMessage(`ชื่อผู้ใช้ต้องมากกว่า ${min} ตัวอักษร`, username);
  } else if (username.value.length > max) {
    showErrMessage(`ชื่อผู้ใช้ต้องohvpกว่า ${max} ตัวอักษร`, username);
  }
};
