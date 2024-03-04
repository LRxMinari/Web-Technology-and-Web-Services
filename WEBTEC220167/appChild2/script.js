const container = document.getElementById("container");
const img = document.createElement("img");

img.src = "menflower.jpg";
img.alt = "Men Flower";

container.appendChild(img);

const fruits = ["Apple", "Banana", "Mango", "Strawberry", "Orange"];

const fruitsList = document.getElementById("fruitsList");

fruits.forEach((fruits) => {
  const li = document.createElement("li");
  li.textContent = fruits;
  fruitsList.appendChild(li);
});
