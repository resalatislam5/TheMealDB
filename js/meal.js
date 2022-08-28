const loadMeal = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    console.log(meals)
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
const loadSearch = () =>{
    fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => console.log(data))
}


loadMeal();