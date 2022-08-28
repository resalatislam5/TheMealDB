const loadMeal = (search) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML =``;
    for (const meal of meals) {
        const {strMeal,strMealThumb,strInstructions} = meal
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML =`
        <div class="card w-11/12 bg-base-100 shadow-xl bg-yellow-700 text-white">
        <figure><img src="${strMealThumb}" class="h-96 w-full" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${strMeal}</h2>
          <p>${strInstructions.slice(0,200)}...</p>
          <div class="card-actions justify-end">
            <button class="btn bg-yellow-600 border-0">Buy Now</button>
          </div>
        </div>
      </div> 
        `
        mealContainer.appendChild(mealDiv)
    }
};

const DisplaySearch = search =>{
    const searchFlied = document.getElementById('search-flied')
    const searchValue = searchFlied.value;
    loadMeal(searchValue);
    searchFlied.value = '';
    console.log(searchValue)
}

loadMeal('fish');