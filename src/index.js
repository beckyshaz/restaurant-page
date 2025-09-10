console.log("Sharon's restaurant page is awsome");

import "./style.css";

import { loadHomePage } from "./home";

import { loadMenuPage } from "./menu";

import { loadAboutUsPage } from "./about";

import { loadContacts } from "./contact";

const container = document.querySelector("#content");
container.innerHTML = "";
loadHomePage();

const buttons = document.querySelectorAll("button");

function buttonClickTracker(event) {
    
    if (event.target.classList.contains("home")) {
        container.innerHTML = "";
        loadHomePage();
    }
    else if (event.target.className === "menu-button") {
        container.innerHTML = "";
        loadMenuPage();
    }
    else if (event.target.className === "about") {
        container.innerHTML = "";
        loadAboutUsPage();
    }
    else if (event.target.className === "contact") {
        container.innerHTML = "";
        loadContacts();
    }

}

buttons.forEach(button => {
   button.addEventListener("click", buttonClickTracker);
});
