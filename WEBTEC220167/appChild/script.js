document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const table = document.getElementById("myTable");
  const button = document.createElement("button");

  console.log(name, age);

  button.textContent = "Click me!";
  button.id = "myButton";
  container.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const myRow = table.insertRow();
    const cell1 = myRow.insertCell(0);
    const cell2 = myRow.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = age;

    name.value = "";
    age.value = "";
  });
});
