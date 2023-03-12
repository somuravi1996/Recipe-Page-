let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let headingElement = document.getElementById("recipeTitle")
headingElement.textContent = recipeObj.title 

let imgElement = document.getElementById("img")
imgElement.setAttribute("src", recipeObj.imgSrc)

let ingredientListContainerElemtent = document.getElementById("ingredientListContainer")



for(let eachItem of recipeObj.ingredients){
    let liElement = document.createElement("li")
    liElement.classList.add("list-items")
    liElement.textContent = eachItem
    ingredientListContainerElemtent.appendChild(liElement)
    console.log(liElement)
}
