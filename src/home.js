import restaurantImg from "./images/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg";

import { loadContacts } from "./contact.js";

import foodIcon1 from "./images/tuva-mathilde-loland-OCLr-Sr-Wko-unsplash.jpg";
import foofIcon2 from "./images/randy-fath-SQ20tWzxXO0-unsplash.jpg";
import foodIcon3 from "./images/iason-raissis-jLxPs1kBmZI-unsplash.jpg";


export function loadHomePage() {


    const container = document.querySelector("#content");

    const headlines = document.createElement("h1");

    headlines.classList = "title";

    headlines.innerHTML = "Welcome to Tublus and Shaz Restaurant";
    
    const image = document.createElement("img");
    image.src = restaurantImg;
    image.width = 400;
    image.height = 400;

    const viewMenuButton = document.createElement("button");
    viewMenuButton.classList = "view-menu";
    viewMenuButton.textContent = "view Menu";


    const description = document.createElement("p");
    description.classList = "description";

    description.innerHTML = `Tublus and Shaz Restaurant is culture based eatery. We believe in farm to fork. 
    This is a place you can relax with family, friends and even acquintances while enjoying 
    the beautiful sceneries that we have like trees and even lakes. We are serving fresh, hot and delicious meals
    everyday. Come taste the difference`;


    const favDishtitle = document.createElement("h1");
    favDishtitle.textContent = "Favourite Dishes";

    const favFoodDiv1 = document.createElement("div");


    const favFoodImage1 = document.createElement("img");
    favFoodImage1.src = foodIcon1;
    favFoodImage1.height = 300;
    favFoodImage1.width = 300;

    const favFoodName1 = document.createElement("p");
    favFoodName1.textContent = "Lusagna and Steak";

    const favFoodPrice = document.createElement("h3");
    favFoodPrice.textContent = "$ 10";

    const favFoodDescription = document.createElement("p");
    favFoodDescription.textContent = "Great meal prepared with traditional ingredients";

    favFoodDiv1.append(favFoodImage1, favFoodName1, favFoodPrice, favFoodDescription);

    const favFoodDiv2 = document.createElement("div");


    const favFoodImage2 = document.createElement("img");
    favFoodImage2.src = foofIcon2;
    favFoodImage2.height = 300;
    favFoodImage2.width = 300;

    const favFoodName2 = document.createElement("p");
    favFoodName2.textContent = "Taco salad";

    const favFoodPrice1 = document.createElement("h3");
    favFoodPrice1.textContent = "$ 15";

    const favFoodDescription1 = document.createElement("p");
    favFoodDescription1.textContent = "Wonderful flavours blended together to make your mouth water";

    favFoodDiv2.append(favFoodImage2,favFoodName2, favFoodPrice1, favFoodDescription1);

    const favFoodDiv3 = document.createElement("div");


    const favFoodImage3 = document.createElement("img");
    favFoodImage3.src = foodIcon3;
    favFoodImage3.height = 300;
    favFoodImage3.width = 300;

    const favFoodName3 = document.createElement("p");
    favFoodName3.textContent = "Macaroni and Cheese";

    const favFoodPrice2 = document.createElement("h3");
    favFoodPrice2.textContent = "$ 9";

    const favFoodDescription2 = document.createElement("p");
    favFoodDescription2.textContent = "This is prepared in a traditional way with traditional ingredients";

    favFoodDiv3.append(favFoodImage3, favFoodName3, favFoodPrice2, favFoodDescription2);


    const favourteDishesMeal = document.createElement("div");

    favourteDishesMeal.append(favFoodDiv1, favFoodDiv2, favFoodDiv3);

    const moreDishesButton = document.createElement("button");
    moreDishesButton.classList = "more-dishes";
    moreDishesButton.textContent = "view All";


    
    const footer = document.createElement("footer");
    footer.textContent = "@tublusandshaz";
    
    const homeDiv = document.createElement("div");
    homeDiv.classList = "home-container";
    homeDiv.append(headlines, image, viewMenuButton, description, favDishtitle,
        favourteDishesMeal, moreDishesButton, footer);

    container.appendChild(homeDiv);

    loadContacts();

}


