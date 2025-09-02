import restaurantImg from "./images/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg";


export function loadHomePage() {


    const container = document.querySelector("#content");

    const headlines = document.createElement("h1");

    headlines.classList = "title";

    headlines.innerHTML = "Welcome to Tublus and Shaz Restaurant";
    
    const image = document.createElement("img");
    image.src = restaurantImg;
    image.width = 400;
    image.height = 400;

    const description = document.createElement("p");
    description.classList = "description";

    description.innerHTML = `Tublus and Shaz Restaurant is culture based eatery. We believe in farm to fork. 
    This is a place you can relax with family, friends and even acquintances while enjoying 
    the beautiful sceneries that we have like trees and even lakes. We are serving fresh, hot and delicious meals
    everyday. Come taste the difference`;

    container.appendChild(headlines);
    container.appendChild(image);
    container.appendChild(description);

}


