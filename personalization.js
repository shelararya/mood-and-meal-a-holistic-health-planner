document.addEventListener("DOMContentLoaded", () => {
  const mealListDiv = document.getElementById("meal-list");

  const meals = [
    { name: "Veg Sandwich", price: 80, calories: 200, protein: 8, carbs: 25 },
    { name: "Oatmeal with Fruits", price: 150, calories: 250, protein: 8, carbs: 45 },
    { name: "Grilled Chicken Salad", price: 400, calories: 350, protein: 30, carbs: 20 },
    { name: "Pasta Primavera", price: 600, calories: 450, protein: 20, carbs: 60 },
    { name: "Steak with Veggies", price: 1800, calories: 600, protein: 50, carbs: 10 },
    { name: "Fruit Smoothie", price: 120, calories: 200, protein: 5, carbs: 40 },
    { name: "Lentil Soup", price: 90, calories: 180, protein: 12, carbs: 25 }
  ];

  function displayMeals(list, container) {
    container.innerHTML = "";
    if(list.length === 0) {
      container.innerHTML = "<p>No meals match the criteria.</p>";
      return;
    }
    list.forEach(meal => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal-card");
      mealDiv.innerHTML = `
        <h3>${meal.name}</h3>
        <p>Price: ${meal.price}</p>
        <p>Calories: ${meal.calories}</p>
        <p>Protein: ${meal.protein}g</p>
        <p>Carbs: ${meal.carbs}g</p>
      `;
      container.appendChild(mealDiv);
    });
  }

  // Budget-based meals
  document.getElementById("show-budget-meals").addEventListener("click", () => {
    const budget = parseInt(document.getElementById("budget-select").value);
    const budgetMeals = meals.filter(meal => meal.price <= budget);
    displayMeals(budgetMeals, document.getElementById("budget-meal-output"));
  });
});