const recipes = [
    {
        name: "Avocado Toast",
        dietType: "Vegetarian",
        mealType: "Breakfast",
        ingredients: ["Avocado", "Bread", "Salt", "Pepper"],
        instructions: "Toast the bread, mash the avocado, spread on toast, season with salt and pepper."
    },
    {
        name: "Vegan Smoothie",
        dietType: "Vegan",
        mealType: "Breakfast",
        ingredients: ["Banana", "Spinach", "Almond Milk", "Chia Seeds"],
        instructions: "Blend all ingredients until smooth."
    },
    {
        name: "Chicken Salad",
        dietType: "Keto",
        mealType: "Lunch",
        ingredients: ["Chicken Breast", "Lettuce", "Cucumber", "Avocado", "Olive Oil"],
        instructions: "Grill the chicken, mix with vegetables, and drizzle with olive oil."
    },
    {
        name: "Quinoa Salad",
        dietType: "Gluten-Free",
        mealType: "Lunch",
        ingredients: ["Quinoa", "Tomato", "Cucumber", "Feta Cheese", "Olive Oil"],
        instructions: "Cook quinoa, mix with vegetables and feta, and drizzle with olive oil."
    },
    {
        name: "Baked Salmon",
        dietType: "Keto",
        mealType: "Dinner",
        ingredients: ["Salmon", "Lemon", "Garlic", "Olive Oil"],
        instructions: "Bake salmon with lemon, garlic, and olive oil at 375°F for 20 minutes."
    },
    {
        name: "Stuffed Bell Peppers",
        dietType: "Vegetarian",
        mealType: "Dinner",
        ingredients: ["Bell Peppers", "Rice", "Black Beans", "Corn", "Cheese"],
        instructions: "Stuff peppers with rice, beans, corn, and cheese; bake at 375°F for 25 minutes."
    },
    {
        name: "Vegan Tacos",
        dietType: "Vegan",
        mealType: "Dinner",
        ingredients: ["Tortillas", "Black Beans", "Corn", "Avocado", "Salsa"],
        instructions: "Fill tortillas with beans, corn, avocado, and salsa."
    },
    {
        name: "Fruit Salad",
        dietType: "Vegan",
        mealType: "Snack",
        ingredients: ["Strawberries", "Blueberries", "Kiwi", "Orange"],
        instructions: "Mix all fruits together."
    },
    {
        name: "Protein Bars",
        dietType: "Gluten-Free",
        mealType: "Snack",
        ingredients: ["Oats", "Peanut Butter", "Honey", "Protein Powder"],
        instructions: "Mix all ingredients, press into a pan, and refrigerate until set."
    },
    {
        name: "Greek Yogurt Parfait",
        dietType: "Vegetarian",
        mealType: "Snack",
        ingredients: ["Greek Yogurt", "Granola", "Honey", "Berries"],
        instructions: "Layer yogurt, granola, and berries in a glass; drizzle with honey."
    },
    {
        name: "Chocolate Protein Avocado Brownies",
        dietType: "Vegetarian",
        mealType: "Snack",
        ingredients: ["Dark Chocolate",
            "Ripe Avocado", "Coconut Sugar", "Vanila Extract", "Egg", "Cocoa Powder", "Almond Meal", "Protein Powder", "Salt"
        ],
        instructions: "Melt the chocolate. Process avocados, coconut sugar, and vanila extract. Add the rest of ingredients and Mix well. Bake at 350F for 35 minutes. "
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const nutritionForm = document.getElementById('nutritionForm');
    const dietTypeSelect = document.getElementById('dietType');
    const mealTypeSelect = document.getElementById('mealType');
    const recipeList = document.getElementById('recipeList');

    nutritionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const dietTypeFilter = dietTypeSelect.value;
        const mealTypeFilter = mealTypeSelect.value;

        const filteredRecipes = filterRecipes(recipes, dietTypeFilter, mealTypeFilter);
        displayRecipes(filteredRecipes);
    });

    function filterRecipes(recipes, dietType, mealType) {
        return recipes.filter(recipe => {
            if (dietType !== 'All' && recipe.dietType !== dietType) {
                return false;
            }
            if (mealType !== 'All' && recipe.mealType !== mealType) {
                return false;
            }
            return true;
        });
    }

    function displayRecipes(recipes) {
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <h2>${recipe.name}</h2>
                <p><span class="bold">Diet Type:</span> ${recipe.dietType}</p>
                <p><span class="bold">Meal Type:</span> ${recipe.mealType}</p>
                <p><span class="bold">Ingredients:</span> ${recipe.ingredients.join(', ')}</p>
                <p><span class="bold">Instructions:</span> ${recipe.instructions}</p>
            `;
            recipeList.appendChild(recipeItem);
        });
    }

    displayRecipes(recipes);
});
