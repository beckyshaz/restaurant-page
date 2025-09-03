import firstImg from "./images/antonio-araujo-xyel_GFkqh4-unsplash.jpg";

import secondImg from "./images/davey-gravy-krsKfCC1lYw-unsplash.jpg";

import thirdImg from "./images/iason-raissis-jLxPs1kBmZI-unsplash.jpg";

import fourthImg from "./images/randy-fath-SQ20tWzxXO0-unsplash.jpg";

import lunchImg1 from "./images/bai-z-6_6B22qHo7Q-unsplash.jpg";

import lunchImg2 from "./images/donald-giannatti-6h07PwQ5GEc-unsplash.jpg";

import lunchImg3 from "./images/estonia-incorporated-H87-bsjeIZA-unsplash.jpg";

import lunchImg4 from "./images/jinish-shah-yxZlyvmqORo-unsplash.jpg";

export function loadMenuPage() {

    const menuOuterDiv = document.createElement("div");

    menuOuterDiv.classList = "menu-outer-container";

    const menu = document.createElement("h1");
    
    menu.classList = "menu";

    menu.innerHTML = "Menu";

    //container.innerHTML = "";
    
    const breakfastTitle = document.createElement("h2");

    breakfastTitle.classList = "breakfast-title";
    breakfastTitle.innerHTML = "Breakfast";

    const breakfastDiv = document.createElement("div");
    breakfastDiv.classList = "breakfast-meal-container";

    const firstMealDiv = document.createElement("div");
    const firstMealImg = document.createElement("img");
    firstMealImg.src = firstImg;
    firstMealImg.width = 300;
    firstMealImg.height = 300;
    
    const firstMealDescription = document.createElement("p");
    firstMealDescription.innerHTML = "Hash browns"

    firstMealDiv.append(firstMealImg, firstMealDescription);

    const secondMealDiv = document.createElement("div");
    const secondMealImg = document.createElement("img");
    secondMealImg.src = secondImg;
    secondMealImg.width = 300;
    secondMealImg.height = 300;
    
    const secondMealDescription = document.createElement("p");
    secondMealDescription.innerHTML = "Bagel and Cream Cheese";

    secondMealDiv.append(secondMealImg, secondMealDescription);

    const thirdMealDiv = document.createElement("div");
    const thirdMealImg = document.createElement("img");
    thirdMealImg.src = thirdImg;
    thirdMealImg.width = 300;
    thirdMealImg.height = 300;
    
    const thirdMealDescription = document.createElement("p");
    thirdMealDescription.innerHTML = "chicken and waffles";

    thirdMealDiv.append(thirdMealImg, thirdMealDescription);


    const fourthMealDiv = document.createElement("div");
    const fourthMealImg = document.createElement("img");
    fourthMealImg.src = fourthImg;
    fourthMealImg.width = 300;
    fourthMealImg.height = 300;
    
    const fourthMealDescription = document.createElement("p");
    fourthMealDescription.innerHTML = "Creamed eggs on toast";
    fourthMealDiv.append(fourthMealImg, fourthMealDescription);

    breakfastDiv.append(firstMealDiv, secondMealDiv, thirdMealDiv, fourthMealDiv);

    const lunchTitle = document.createElement("h2");
    lunchTitle.innerHTML = "Lunch";
    lunchTitle.classList = "lunch-title";

    const lunchDiv = document.createElement("div");
    lunchDiv.classList = "lunch-container";


    const firstLunchMealDiv = document.createElement("div");
    firstLunchMealDiv.classList = "first-lunch-meal-container";

    const firstLunchMeal = document.createElement("img");
    firstLunchMeal.src = lunchImg1;
    firstLunchMeal.width = 300;
    firstLunchMeal.height = 300;

    const firstLunchMealDescription = document.createElement("p");
    firstLunchMealDescription.innerHTML = "Chicken-fried steak";

    firstLunchMealDiv.append(firstLunchMeal, firstLunchMealDescription);


    const secondLunchMealDiv = document.createElement("div");
    firstLunchMealDiv.classList = "second-lunch-meal-container";

    const secondLunchMeal = document.createElement("img");
    secondLunchMeal.src = lunchImg2;
    secondLunchMeal.width = 300;
    secondLunchMeal.height = 300;

    const secondLunchMealDescription = document.createElement("p");
    secondLunchMealDescription.innerHTML = "Hamburgers";

    secondLunchMealDiv.append(secondLunchMeal, secondLunchMealDescription);

    const thirdLunchMealDiv = document.createElement("div");
    thirdLunchMealDiv.classList = "first-lunch-meal-container";

    const thirdLunchMeal = document.createElement("img");
    thirdLunchMeal.src = lunchImg3;
    thirdLunchMeal.width = 300;
    thirdLunchMeal.height = 300;

    const thirdLunchMealDescription = document.createElement("p");
    thirdLunchMealDescription.innerHTML = "Cobb salad";

    thirdLunchMealDiv.append(thirdLunchMeal, thirdLunchMealDescription);

    const fourthLunchMealDiv = document.createElement("div");
    fourthLunchMealDiv.classList = "fourth-lunch-meal-container";

    const fourthLunchMeal = document.createElement("img");
    fourthLunchMeal.src = lunchImg4;
    fourthLunchMeal.width = 300;
    fourthLunchMeal.height = 300;

    const fourthLunchMealDescription = document.createElement("p");
    fourthLunchMealDescription.innerHTML = "Chicken nugget";

    fourthLunchMealDiv.append(fourthLunchMeal, fourthLunchMealDescription);


    lunchDiv.append(firstLunchMealDiv, secondLunchMealDiv, thirdLunchMealDiv, fourthLunchMealDiv);

    menuOuterDiv.append(menu, breakfastTitle, breakfastDiv, lunchTitle, lunchDiv);

    const container = document.querySelector("#content");
    container.appendChild(menuOuterDiv);
    

}