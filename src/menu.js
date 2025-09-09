import firstImg from "./images/antonio-araujo-xyel_GFkqh4-unsplash.jpg";

import secondImg from "./images/davey-gravy-krsKfCC1lYw-unsplash.jpg";

import thirdImg from "./images/iason-raissis-jLxPs1kBmZI-unsplash.jpg";

import fourthImg from "./images/randy-fath-SQ20tWzxXO0-unsplash.jpg";

import lunchImg1 from "./images/bai-z-6_6B22qHo7Q-unsplash.jpg";

import lunchImg2 from "./images/donald-giannatti-6h07PwQ5GEc-unsplash.jpg";

import lunchImg3 from "./images/estonia-incorporated-H87-bsjeIZA-unsplash.jpg";

import lunchImg4 from "./images/jinish-shah-yxZlyvmqORo-unsplash.jpg";

import dinnerImg1 from "./images/bojitha-wimalasiri-VxM1tevoDlA-unsplash.jpg";

import dinnerImg2 from "./images/jay-nlper-z6dhO2AS9iM-unsplash.jpg";

import dinnerImg3 from "./images/tuva-mathilde-loland-OCLr-Sr-Wko-unsplash.jpg";

import dinnerImg4 from "./images/yoseph-hailu-WUcEKK48JMU-unsplash.jpg";

export function loadMenuPage() {

   //const heroSection = document.querySelector(".hero-section");

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
    breakfastDiv.classList = "breakfast-container";

    const firstMealDiv = document.createElement("div");
    firstMealDiv.className = "meal-div";
    const firstMealImg = document.createElement("img");
    firstMealImg.src = firstImg;
    firstMealImg.width = 300;
    firstMealImg.height = 300;

    const price1 = document.createElement("h3");
    price1.textContent = "$ 10";
    
    const firstMealDescription = document.createElement("p");
    firstMealDescription.innerHTML = "Hash browns"

    firstMealDiv.append(firstMealImg, firstMealDescription, price1);

    const secondMealDiv = document.createElement("div");
    secondMealDiv.className = "meal-div";
    const secondMealImg = document.createElement("img");
    secondMealImg.src = secondImg;
    secondMealImg.width = 300;
    secondMealImg.height = 300;
    
    const price2 = document.createElement("h3");
    price2.textContent = "$ 10";

    const secondMealDescription = document.createElement("p");
    secondMealDescription.innerHTML = "Bagel and Cream Cheese";

    secondMealDiv.append(secondMealImg, secondMealDescription, price2);

    const thirdMealDiv = document.createElement("div");
    thirdMealDiv.classList = "meal-div";
    const thirdMealImg = document.createElement("img");
    thirdMealImg.src = thirdImg;
    thirdMealImg.width = 300;
    thirdMealImg.height = 300;
    
    const price3 = document.createElement("h3");
    price3.textContent = "$ 15";

    const thirdMealDescription = document.createElement("p");
    thirdMealDescription.innerHTML = "chicken and waffles";

    thirdMealDiv.append(thirdMealImg, thirdMealDescription, price3);


    const fourthMealDiv = document.createElement("div");
    fourthMealDiv.className = "meal-div";
    const fourthMealImg = document.createElement("img");
    fourthMealImg.src = fourthImg;
    fourthMealImg.width = 300;
    fourthMealImg.height = 300;
    
    const price4 = document.createElement("h3");
    price4.textContent = "$ 11";

    const fourthMealDescription = document.createElement("p");
    fourthMealDescription.innerHTML = "Creamed eggs on toast";
    fourthMealDiv.append(fourthMealImg, fourthMealDescription, price4);

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

    const price5 = document.createElement("h3");
    price5.textContent = "$ 12";

    const firstLunchMealDescription = document.createElement("p");
    firstLunchMealDescription.innerHTML = "Chicken-fried steak";

    firstLunchMealDiv.append(firstLunchMeal, firstLunchMealDescription, price5);


    const secondLunchMealDiv = document.createElement("div");
    firstLunchMealDiv.classList = "second-lunch-meal-container";

    const secondLunchMeal = document.createElement("img");
    secondLunchMeal.src = lunchImg2;
    secondLunchMeal.width = 300;
    secondLunchMeal.height = 300;

    const price6 = document.createElement("h3");
    price6.textContent = "$ 9";

    const secondLunchMealDescription = document.createElement("p");
    secondLunchMealDescription.innerHTML = "Hamburgers";

    secondLunchMealDiv.append(secondLunchMeal, secondLunchMealDescription, price6);

    const thirdLunchMealDiv = document.createElement("div");
    thirdLunchMealDiv.classList = "first-lunch-meal-container";

    const thirdLunchMeal = document.createElement("img");
    thirdLunchMeal.src = lunchImg3;
    thirdLunchMeal.width = 300;
    thirdLunchMeal.height = 300;

    const price7 = document.createElement("h3");
    price7.textContent = "$ 15";

    const thirdLunchMealDescription = document.createElement("p");
    thirdLunchMealDescription.innerHTML = "Cobb salad";

    thirdLunchMealDiv.append(thirdLunchMeal, thirdLunchMealDescription, price7);

    const fourthLunchMealDiv = document.createElement("div");
    fourthLunchMealDiv.classList = "fourth-lunch-meal-container";

    const fourthLunchMeal = document.createElement("img");
    fourthLunchMeal.src = lunchImg4;
    fourthLunchMeal.width = 300;
    fourthLunchMeal.height = 300;

    const price8 = document.createElement("h3");
    price8.textContent = "$ 5";

    const fourthLunchMealDescription = document.createElement("p");
    fourthLunchMealDescription.innerHTML = "Chicken nugget";

    fourthLunchMealDiv.append(fourthLunchMeal, fourthLunchMealDescription, price8);


    lunchDiv.append(firstLunchMealDiv, secondLunchMealDiv, thirdLunchMealDiv, fourthLunchMealDiv);

    const dinnerTitle = document.createElement("h2");
    dinnerTitle.innerHTML = "Dinner";
    dinnerTitle.classList = "dinner-title";

    const dinnerDiv = document.createElement("div");
    dinnerDiv.classList = "dinner-container";


    const firstDinnerMealDiv = document.createElement("div");
    firstDinnerMealDiv.classList = "first-dinner-meal-container";

    const firstDinnerMeal = document.createElement("img");
    firstDinnerMeal.src = dinnerImg1;
    firstDinnerMeal.width = 300;
    firstDinnerMeal.height = 300;

    const price9 = document.createElement("h3");
    price9.textContent = "$ 3";

    const firstDinnerMealDescription = document.createElement("p");
    firstDinnerMealDescription.innerHTML = "Corn on the cob and Crubs";

    firstDinnerMealDiv.append(firstDinnerMeal, firstDinnerMealDescription, price9);


    const secondDinnerMealDiv = document.createElement("div");
    secondDinnerMealDiv.classList = "second-dinner-meal-container";

    const secondDinnerMeal = document.createElement("img");
    secondDinnerMeal.src = dinnerImg2;
    secondDinnerMeal.width = 300;
    secondDinnerMeal.height = 300;

    const price10 = document.createElement("h3");
    price10.textContent = "$ 10";

    const secondDinnerMealDescription = document.createElement("p");
    secondDinnerMealDescription.innerHTML = "Pasta";

    secondDinnerMealDiv.append(secondDinnerMeal, secondDinnerMealDescription, price10);

    const thirdDinnerMealDiv = document.createElement("div");
    thirdDinnerMealDiv.classList = "third-dinner-meal-container";

    const thirdDinnerMeal = document.createElement("img");
    thirdDinnerMeal.src = dinnerImg3;
    thirdDinnerMeal.width = 300;
    thirdDinnerMeal.height = 300;

    const price11 = document.createElement("h3");
    price11.textContent = "$ 4";

    const thirdDinnerMealDescription = document.createElement("p");
    thirdDinnerMealDescription.innerHTML = "Chicken and Damplings";

    thirdDinnerMealDiv.append(thirdDinnerMeal, thirdDinnerMealDescription, price11);

    const fourthDinnerMealDiv = document.createElement("div");
    fourthDinnerMealDiv.classList = "fourth-dinner-meal-container";

    const fourthDinnerMeal = document.createElement("img");
    fourthDinnerMeal.src = dinnerImg4;
    fourthDinnerMeal.width = 300;
    fourthDinnerMeal.height = 300;

    const price12= document.createElement("h3");
    price12.textContent = "$ 2";

    const fourthDinnerMealDescription = document.createElement("p");
    fourthDinnerMealDescription.innerHTML = "Brunswick stew";

    fourthDinnerMealDiv.append(fourthDinnerMeal, fourthDinnerMealDescription, price12);


    dinnerDiv.append(firstDinnerMealDiv, secondDinnerMealDiv, thirdDinnerMealDiv, fourthDinnerMealDiv);


    menuOuterDiv.append(menu, breakfastTitle, breakfastDiv, lunchTitle, lunchDiv, dinnerTitle, dinnerDiv);

    const container = document.querySelector("#content");
    container.appendChild(menuOuterDiv);
    

}