document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regisForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const interests = Array.from(
      form.querySelectorAll('input[name="interests"]:checked')
    ).map((checkbox) => checkbox.value);
    const country = form.elements["country"].value;

    resultDiv.innerHTML = `<p>Name: ${name}</p><p>Gender: ${gender}</p><p>Interests: ${interests}</p><p>Country: ${country}</p>`;
  });
});
