document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;

    resultDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
  });
});
