import firstImg from "./images/antonio-araujo-xyel_GFkqh4-unsplash.jpg";

import secondImg from "./images/davey-gravy-krsKfCC1lYw-unsplash.jpg";

import thirdImg from "./images/iason-raissis-jLxPs1kBmZI-unsplash.jpg";

import fourthImg from "./images/randy-fath-SQ20tWzxXO0-unsplash.jpg"

export function loadMenuPage() {
    const menu = document.createElement("h1");
    
    menu.classList = "menu";

    menu.innerHTML = "Menu";
    
    const container = document.querySelector("#content");

    //container.innerHTML = "";
    
    const breakfast = document.createElement("h2");

    breakfast.classList = "breakfast";
    breakfast.innerHTML = "Breakfast";

    const breakfastDiv = document.createElement("div");

    const firstMealDiv = document.createElement("div");
    const firstMealImg = document.createElement("img");
    firstMealImg.src = firstImg;
    firstMealImg.width = 200;
    firstMealImg.height = 200;
    
    const firstMealDescription = document.createElement("h1");
    firstMealDescription.innerHTML = "rouse"

    firstMealDiv.append(firstMealImg, firstMealDescription);
    breakfastDiv.appendChild(firstMealDiv);
    const secondMealDiv = document.createElement("div");
    const thirdMealDiv = document.createElement("div");

    const fourthMealDiv = document.createElement("div");

    container.appendChild(menu);
    container.appendChild(breakfast);
    container.appendChild(breakfastDiv);

}