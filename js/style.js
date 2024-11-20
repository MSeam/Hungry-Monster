function findFood(foodName) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then((res) => res.json())
    .then((data) => {
      const arrayOfFood = data.meals;
      if (arrayOfFood) {
        arrayOfFood.forEach((meal) => {
          showFood(meal);
        });
      } else {
        alert("Food not available.");
      }
    })
    .catch((error) => alert("Error fetching data."));
}

const showFood = (eachMeal) => {
  const foodSector = document.getElementById("food-sector");
  const foodDiv = document.createElement("div");
  foodDiv.className = "food";
  const info = `<img onclick="display('${eachMeal.idMeal}')" class="food-img" src="${eachMeal.strMealThumb}" alt="">
                  <h2 onclick="display('${eachMeal.idMeal}')" class="food-name">${eachMeal.strMeal}</h2>`;
  foodDiv.innerHTML = info;
  foodSector.appendChild(foodDiv);
};

document.getElementById("search-btn").addEventListener("click", function () {
  const food = document.getElementById("meal-name-input").value.trim();
  if (food === "") {
    alert("Invalid Input");
  } else {
    findFood(food);
  }
  document.getElementById("meal-name-input").value = "";
  document.getElementById("food-sector").innerText = "";
});
