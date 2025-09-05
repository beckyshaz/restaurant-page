export function loadAboutUsPage() {
    const container = document.querySelector("#content");
    const aboutUsDiv = document.createElement("div");
    aboutUsDiv.classList = "about-container";
    const aboutUsTitle = document.createElement("h1");
    aboutUsTitle.innerHTML = "About Us";
    const bold = document.createElement("strong");
    bold.textContent = "Tublus And Shaz Restaurant";


    aboutUsDiv.append(
         aboutUsTitle,
        "Welcome to ", bold ," ,where every dish tells a story!",
        document.createElement("br"),
        "We are passionate about serving fresh, delicious, and lovingly prepared meals that bring people together.",
        document.createElement("br"),
        "Our menu combines local flavors with a modern twist, using only the finest ingredients to create an unforgettable dining experience.",
        document.createElement("br"),
        document.createElement("br"),
        "Whether you're here for a casual lunch, a cozy dinner, or a special celebration, our goal is to make every moment feel warm, welcoming, and memorable.",
        document.createElement("br"),
        document.createElement("br"),

        "At ",bold.cloneNode(true), " ,good food is just the beginning — we believe in creating a place where friends and family gather to share laughter, conversation, and happiness over every meal."
    );
    container.appendChild(aboutUsDiv);
}