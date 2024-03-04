document.addEventListener("DOMContentLoaded", function () {
  let openCart = document.querySelector(".cart-container");
  let closeCart = document.querySelector(".closeCart");
  let closeButton = document.querySelector(".closeButton");

  if (openCart) {
    openCart.addEventListener("click", () => {
      document.body.classList.add("active");
    });
  }

  if (closeCart) {
    closeCart.addEventListener("click", () => {
      document.body.classList.remove("active");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      document.body.classList.remove("active");
    });
  }

  fetchMealData();
});

let listCard = document.querySelector(".listCard");
let quantity = document.querySelector(".quantity");
let total = document.querySelector(".total");
let cart = [];
let meals = [];

function fetchMealData() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      meals = data.meals;
      displayMealData(meals);
    })
    .catch((error) => console.error("Error fetching meal data:", error));
}

function getMealDetails(mealId) {
  const detailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  return fetch(detailsUrl)
    .then((response) => response.json())
    .then((data) => data.meals[0])
    .catch((error) => console.error("Error fetching meal details:", error));
}

function displayMealData(meals) {
  const mealListContainer = document.getElementById("mealList");
  const mealListHTML = meals
    .map(
      (meal) => `
    <div>
      <p>${meal.strMeal}</p>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p>Price: $${getRandomPrice()}</p>
      <button onclick="addToCart('${meal.strMeal}')">Add to Cart</button>
      <button onclick="showMealDetails('${meal.idMeal}')">Details</button>
    </div>
  `
    )
    .join("");
  mealListContainer.innerHTML = mealListHTML;
}

function showMealDetails(mealId) {
  const mealDetailsText = document.getElementById("mealDetailsText");

  getMealDetails(mealId)
    .then((meal) => {
      mealDetailsText.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="details-image" />
        <p>${meal.strInstructions}</p>
      `;

      document.querySelector(".details-overlay").style.display = "block";
      document.querySelector(".meal-details").style.display = "block";
    })
    .catch((error) => console.error("Error fetching meal details:", error));
}

function hideMealDetails() {
  document.querySelector(".details-overlay").style.display = "none";
  document.querySelector(".meal-details").style.display = "none";
}

function getRandomPrice() {
  return (Math.random() * (50 - 10) + 10).toFixed(2);
}

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(mealName) {
  let existingMeal = cart.find((item) => item.name === mealName);

  if (existingMeal) {
    existingMeal.quantity++;
  } else {
    cart.push({ name: mealName, quantity: 1 });
  }

  console.log(cart);

  saveCartToLocalStorage();

  reloadCard();

  console.log(localStorage.getItem("cart"));
}

function reloadCard() {
  listCard.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((meal) => {
    const mealInfo = getMealInfo(meal.name);

    if (mealInfo) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${mealInfo.strMealThumb}" alt="${mealInfo.strMeal}" />
        ${mealInfo.strMeal} 
        <button onclick="changeQuantity('${mealInfo.strMeal}', -1)">-</button>
        ${meal.quantity}
        <button onclick="changeQuantity('${mealInfo.strMeal}', 1)">+</button>
      `;
      listCard.appendChild(listItem);

      totalPrice += meal.quantity * getRandomPrice();
    }
  });

  total.innerText = totalPrice.toFixed(2);
  quantity.innerText = cart.reduce((total, meal) => total + meal.quantity, 0);
}

function getMealInfo(mealName) {
  return meals.find((meal) => meal.strMeal === mealName);
}

function checkout() {
  alert("Checkout Successful!");
  clearCart();

  console.log(localStorage.getItem("cart"));
}

function closeCart() {
  document.body.classList.remove("active");
}

function clearCart() {
  cart = [];
  reloadCard();
}

function changeQuantity(mealName, change) {
  let existingMeal = cart.find((item) => item.name === mealName);

  if (existingMeal) {
    existingMeal.quantity += change;

    if (existingMeal.quantity <= 0) {
      cart = cart.filter((item) => item.name !== mealName);
    }
  }

  reloadCard();
}
