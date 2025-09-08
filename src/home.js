import restaurantImg from "./images/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg";

//import { loadContacts } from "./contact.js";

import { loadMenuPage } from "./menu";

import foodIcon1 from "./images/tuva-mathilde-loland-OCLr-Sr-Wko-unsplash.jpg";
import foofIcon2 from "./images/randy-fath-SQ20tWzxXO0-unsplash.jpg";
import foodIcon3 from "./images/iason-raissis-jLxPs1kBmZI-unsplash.jpg";


import locationIcon from "./images/location-dot-solid-full.svg";
import phoneIcon from "./images/phone-volume-solid-full.svg";
import emailIcon from "./images/square-envelope-solid-full.svg";


export function loadHomePage() {


    const container = document.querySelector("#content");

    const name = document.createElement("h1");

    name.classList = "title";

    name.textContent = "Welcome to Tublus and Shaz Restaurant.";
    //name.style.whiteSpace = "pre-line";

    const tag = document.createElement("em");
    tag.classList = "tagline";
    tag.innerHTML = "Where your taste buds meets great Vibes!";
    
    const heroSection = document.createElement("div");
    heroSection.className = "hero-section";
    heroSection.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${restaurantImg})`;
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
    heroSection.style.height = "90vh";
    heroSection.style.color = "white";
   
    

    const viewMenuButton = document.createElement("button");
    viewMenuButton.classList = "view-menu";
    viewMenuButton.textContent = "View Menu";


    const description = document.createElement("p");
    description.classList = "description";

    description.innerHTML = `Tublus and Shaz Restaurant is culture based eatery. We believe in farm to fork. 
    This is a place you can relax with family, friends and even acquintances while enjoying 
    the beautiful sceneries that we have like trees and even lakes. We are serving fresh, hot and delicious meals
    everyday. Come taste the difference`;

    const header = document.querySelector("header");


    heroSection.append(header, name, tag, description, viewMenuButton);


    const location = document.createElement("img");
    location.src = locationIcon;
    location.width = 40;
    location.height = 40;

    const locateText = document.createElement("a");
    locateText.innerHTML = "Locate Us";

    const homelocationDiv = document.createElement("div");
    homelocationDiv.className = "home-location-div";
    homelocationDiv.append(location, locateText);
    
    const phone = document.createElement("img");
    phone.src = phoneIcon;
    
    phone.height = 40;
    phone.width = 40;

    const phoneText = document.createElement("a");
    phoneText.innerHTML = "Call Us";

    const homePhoneDiv = document.createElement("div");
    homePhoneDiv.className = "home-phone-div";
    homePhoneDiv.append(phone, phoneText);
    
    
    const email = document.createElement("img");
    email.src = emailIcon;
    email.height = 40;
    email.width = 40;

    const emailText = document.createElement("a");
    emailText.innerHTML = "Email Us";

    const homeEmailDiv = document.createElement("div");
    homeEmailDiv.className = "home-email-div";
    homeEmailDiv.append(email, emailText);

    const homeContactDiv = document.createElement("div");
    homeContactDiv.className = "home-contact-div";
    homeContactDiv.append(homePhoneDiv, homeEmailDiv, homelocationDiv);

    
    const hoursTitle = document.createElement("h2");
    
    hoursTitle.innerHTML = "Business Hours";
    hoursTitle.className = "business-hours";

    const workingHours1 = document.createElement("div");
    workingHours1.className = "biz-hours";
    const day1 = document.createElement("p");
    day1.innerHTML = "Everyday";


    const workingTime = document.createElement("p");
    
    workingTime.innerHTML = "12:00 AM - 11:00 PM";

    workingHours1.append(day1, workingTime);

    const weekendHours = document.createElement("div");
    weekendHours.className = "biz-hours";

    const workingTime0 = document.createElement("p");
    workingTime0.innerHTML = "Weekend";

    const hoursTme = document.createElement("p");
    hoursTme.innerHTML = "12: 00AM - 3:00PM";

    weekendHours.append(workingTime0, hoursTme);


    const workingHours2 = document.createElement("div");
    workingHours2.classList = "biz-hours lunch";
    const day2 = document.createElement("p");

    day2.innerHTML = "Lunch";

    const workingTime1 = document.createElement("p");
    workingTime1.innerHTML = "10:00 AM - 4:00 PM";

    workingHours2.append(day2, workingTime1);

    const workingHours3 = document.createElement("div");
    workingHours3.classList = "biz-hours dinner";
    const day3 = document.createElement("p");
    day3.innerHTML = "Dinner";

    const workingTime2 = document.createElement("p");
    workingTime2.innerHTML = "6:00 PM - 11:00 PM";

    workingHours3.append(day3, workingTime2);

    const hoursDiv = document.createElement("div");

    hoursDiv.append(hoursTitle, workingHours1, weekendHours, workingHours2, workingHours3);

    const homeAbout = document.createElement("div");
    homeAbout.className = "home-about";
    homeAbout.innerHTML = `<em class=about-emphasy>What we offer your taste buds</em>
    <p> At <em class=restaurant-name>Tublus And Shaz Restaurant</em> we take pride in offering a diverse and dynamic and unique menu that
    satisfies both adventurous food lovers and those who enjoy classic flavors.</p>
    <p>Indulge in our delicious roasted pork extravaganza done over a charcoal pit preserving all the  magnificent flavours</p>
    `;

    const homeAboutHoursDiv = document.createElement("div");
    homeAboutHoursDiv.className = "home-about-hours-div";

    homeAboutHoursDiv.append(hoursDiv, homeAbout);


    const favDishtitle = document.createElement("div");
    favDishtitle.classList = "fav-dishes-title";
    favDishtitle.innerHTML = `<h1>Favourite Dishes</h1>`;

    const favFoodDiv1 = document.createElement("div");
    favFoodDiv1.className = "fave-food";


    const favFoodImage1 = document.createElement("img");
    favFoodImage1.src = foodIcon1;
    favFoodImage1.height = 300;
    favFoodImage1.width = 300;

    const favFoodName1 = document.createElement("p");
    favFoodName1.textContent = "Lusagna and Steak";

    const favFoodPrice = document.createElement("h3");
    favFoodPrice.textContent = "$ 10";


    favFoodDiv1.append(favFoodImage1, favFoodName1, favFoodPrice);

    const favFoodDiv2 = document.createElement("div");
    favFoodDiv2.classList = "fave-food";


    const favFoodImage2 = document.createElement("img");
    favFoodImage2.src = foofIcon2;
    favFoodImage2.height = 300;
    favFoodImage2.width = 300;

    const favFoodName2 = document.createElement("p");
    favFoodName2.textContent = "Taco salad";

    const favFoodPrice1 = document.createElement("h3");
    favFoodPrice1.textContent = "$ 15";

    favFoodDiv2.append(favFoodImage2,favFoodName2, favFoodPrice1);

    const favFoodDiv3 = document.createElement("div");
    favFoodDiv3.className = "fave-food";


    const favFoodImage3 = document.createElement("img");
    favFoodImage3.src = foodIcon3;
    favFoodImage3.height = 300;
    favFoodImage3.width = 300;

    const favFoodName3 = document.createElement("p");
    favFoodName3.textContent = "Macaroni and Cheese";

    const favFoodPrice2 = document.createElement("h3");
    favFoodPrice2.textContent = "$ 9";

    favFoodDiv3.append(favFoodImage3, favFoodName3, favFoodPrice2);

    const favourteDishesMeal = document.createElement("div");
    favourteDishesMeal.className = "favourite-container";

    favourteDishesMeal.append(favFoodDiv1, favFoodDiv2, favFoodDiv3);
    

    const moreDishesButton = document.createElement("button");
    moreDishesButton.classList = "more-dishes";
    moreDishesButton.textContent = "view All";

    //moreDishesButton.addEventListener("click", );


    const favouriteDishesOuterDiv = document.createElement("div");
    favouriteDishesOuterDiv.className = "favourite-dish-outer-div";

    favouriteDishesOuterDiv.append(favourteDishesMeal, moreDishesButton);

    const footer = document.createElement("footer");
    footer.innerHTML = `<h3>@tublusandshaz</h3>`;
    
    const homeDiv = document.createElement("div");
    homeDiv.classList = "home-container";
    homeDiv.append(heroSection, homeContactDiv, homeAboutHoursDiv, favDishtitle,
        favouriteDishesOuterDiv,  footer);

    container.appendChild(homeDiv);

}


