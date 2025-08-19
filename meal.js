const mealPlans = {
  student: [
    {
      name: "Oats with Nuts",
      img: "oats with nuts.jpg",
      calories: "150",
      benefits: "Brain fuel, energy boost, high fiber",
      do: "✅ Add walnuts or almonds",
      dont: "❌ Avoid skipping breakfast"
    },
    {
      name: "Banana",
      img: "bananas.jpg",
      calories: "105",
      benefits: "Mood lifter, potassium rich",
      do: "✅ Eat before exams or classes",
      dont: "❌ Don’t overeat"
    }
  ],
  gym: [
    {
      name: "Boiled Eggs",
      img: "boiled eggs.jpg",
      calories: "70",
      benefits: "High protein, muscle repair",
      do: "✅ 2–3 eggs post-workout",
      dont: "❌ Avoid oily frying"
    },
    {
      name: "Paneer & Veg Stir Fry",
      img: "paneer and veg stir fry.jpg",
      calories: "200",
      benefits: "Protein + vitamins",
      do: "✅ Use olive oil",
      dont: "❌ Avoid processed sauces"
    }
  ],
  yoga: [
    {
      name: "Fruit Bowl",
      img: "fruit bowl.jpg",
      calories: "120",
      benefits: "Detox, hydration, antioxidants",
      do: "✅ Add berries or citrus fruits",
      dont: "❌ Avoid packaged juice"
    },
    {
      name: "Green Smoothie",
      img: "green smoothie.jpg",
      calories: "90",
      benefits: "Soothing, fiber-rich",
      do: "✅ Use spinach or kale",
      dont: "❌ No added sugar"
    }
  ],
  deskjob: [
    {
      name: "Brown Rice + Dal",
      img: "brown rice with dal.jpg",
      calories: "250",
      benefits: "Balanced carbs and protein",
      do: "✅ Add salad",
      dont: "❌ Avoid heavy fried sides"
    },
    {
      name: "Buttermilk",
      img: "buttermilk.jpg",
      calories: "50",
      benefits: "Keeps you fresh and calm",
      do: "✅ Sip post lunch",
      dont: "❌ Don’t drink chilled"
    }
  ],
  recovery: [
    {
      name: "Moong Khichdi",
      img: "moong khichadi.jpg",
      calories: "180",
      benefits: "Easy to digest, immunity boost",
      do: "✅ Add ghee",
      dont: "❌ Avoid spicy foods"
    },
    {
      name: "Coconut Water",
      img: "coconut water.jpg",
      calories: "45",
      benefits: "Hydration, minerals",
      do: "✅ Drink in morning",
      dont: "❌ Avoid artificial ones"
    }
  ]
};

function loadMealPlan() {
  const routine = document.getElementById("routine").value;
  const mealSection = document.getElementById("customMealPlan");
  mealSection.innerHTML = "";

  if (!routine || !mealPlans[routine]) return;

  // Save selected routine to localStorage
  localStorage.setItem("userRoutine", routine);

  mealPlans[routine].forEach(food => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${food.img}" alt="${food.name}" />
      <h3>${food.name}</h3>
      <p><strong>Calories:</strong> ${food.calories}</p>
      <p><strong>Benefits:</strong> ${food.benefits}</p>
      <ul>
        <li class="do">${food.do}</li>
        <li class="dont">${food.dont}</li>
      </ul>
    `;
    mealSection.appendChild(card);
  });
}

// Auto-load saved routine on page load
window.onload = function () {
  const saved = localStorage.getItem("userRoutine");
  if (saved) {
    document.getElementById("routine").value = saved;
    loadMealPlan();
  }
};
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


