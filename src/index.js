console.log("Sharon's restaurant page is awsome");

import "./style.css";

import { loadHomePage } from "./home";

import { loadMenuPage } from "./menu";

import { loadAboutUsPage } from "./about";

import { loadContacts } from "./contact";

const buttons = document.querySelectorAll("button");

function buttonClickTracker(event) {
    
    if (event.target.classList.contains("home")) {
        const container = document.querySelector("#content");
        container.innerHTML = "";
        loadHomePage();
    }
    else if (event.target.className === "menu") {
        const container = document.querySelector("#content");
        container.innerHTML = "";
        loadMenuPage();
    }
    else if (event.target.className === "about") {
        const container = document.querySelector("#content");
        container.innerHTML = "";
        loadAboutUsPage();
    }
    else if (event.target.className === "contact") {
        const container = document.querySelector("#content");
        container.innerHTML = "";
        loadContacts();
    }

}

buttons.forEach(button => {
   button.addEventListener("click", buttonClickTracker);
});


//loadHomePage();
//loadMenuPage();
//loadAboutUsPage();
//loadContacts();