const meals = {
  monday: [
    { time: "Breakfast", food: "Oats with banana & almonds" },
    { time: "Lunch", food: "Brown rice, dal, mixed veg curry" },
    { time: "Dinner", food: "Chapati with paneer sabzi" }
  ],
  tuesday: [
    { time: "Breakfast", food: "Boiled eggs & whole grain toast" },
    { time: "Lunch", food: "Quinoa, rajma, cucumber salad" },
    { time: "Dinner", food: "Vegetable soup and grilled sandwich" }
  ],
  wednesday: [
    { time: "Breakfast", food: "Fruit smoothie + chia seeds" },
    { time: "Lunch", food: "Chapati, spinach dal, carrot salad" },
    { time: "Dinner", food: "Grilled tofu and mixed veggie bowl" }
  ],
  thursday: [
    { time: "Breakfast", food: "Poha with peanuts and lemon" },
    { time: "Lunch", food: "Jeera rice, chole, beetroot salad" },
    { time: "Dinner", food: "Millet roti and pumpkin sabzi" }
  ],
  friday: [
    { time: "Breakfast", food: "Upma with coconut chutney" },
    { time: "Lunch", food: "Khichdi and curd" },
    { time: "Dinner", food: "Pasta with sautéed vegetables" }
  ],
  saturday: [
    { time: "Breakfast", food: "Paratha with curd and pickle" },
    { time: "Lunch", food: "Rice, sambhar, cabbage poriyal" },
    { time: "Dinner", food: "Moong dal chilla with green chutney" }
  ],
  sunday: [
    { time: "Breakfast", food: "Idli with sambhar and chutney" },
    { time: "Lunch", food: "Biryani with cucumber raita" },
    { time: "Dinner", food: "Tomato soup and garlic bread" }
  ]
};

function loadMealForDay() {
  const selectedDay = document.getElementById("day-select").value;
  const display = document.getElementById("meal-display");
  display.innerHTML = "";

  if (!selectedDay || !meals[selectedDay]) {
    display.innerHTML = "<p>Please select a valid day.</p>";
    return;
  }

  meals[selectedDay].forEach((meal) => {
    const card = document.createElement("div");
    card.className = "meal-card";
    card.innerHTML = `
      <h3>${meal.time}</h3>
      <p>${meal.food}</p>
    `;
    display.appendChild(card);
  });
}

