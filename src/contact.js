import clockIcon from  "./images/unlock-keyhole-solid-full.svg";
import locationIcon from "./images/location-dot-solid-full.svg";
import phoneIcon from "./images/phone-volume-solid-full.svg";
import emailIcon from "./images/square-envelope-solid-full.svg";

export function loadContacts() {
    const container = document.querySelector("#content");
    const contactatitle = document.createElement("h1");
    contactatitle.textContent = "Contact Us";    let contactDiv = document.createElement("div");
    const strong1 = document.createElement("strong");
    strong1.textContent = "Find Us At: ";
    const strong2 = document.createElement("strong");
    strong2.textContent = "Call/Text Us: "
    const strong3 = document.createElement("strong");
    strong3.textContent = "Email Us: "
    const strong4 = document.createElement("strong");
    strong4.textContent = "When We Are Open:";

    const location = document.createElement("img");
    location.src = locationIcon;
    location.width = 80;
    location.height = 80;

    const phone = document.createElement("img");
    phone.src = phoneIcon;
    phone.height = 80;
    phone.width = 80;


    const email = document.createElement("img");
    email.src = emailIcon;
    email.height = 80;
    email.width = 80;

    const timeAndDate = document.createElement("img");
    timeAndDate.src = clockIcon;
    timeAndDate.height = 80;
    timeAndDate.width = 80;

    const locationDiv = document.createElement("div");
    locationDiv.classList = "location";
    locationDiv.append(location , strong1 , "[Biashara Street, Nairobi, Kenya]",);

    const phoneDiv = document.createElement("div");
    phoneDiv.classList = "phone";
    phoneDiv.append(phone , strong2 , "+[254] [0700000090]",);

    const emailDiv = document.createElement("div");
    emailDiv.classList = "email";
    emailDiv.append( email , strong3 , "[tublusandshaz@gmail.com]",)

    const timeDiv = document.createElement("div");
    timeDiv.classList = "time-date";
    timeDiv.append( 
        timeAndDate , strong4 ,
        document.createElement("br"),
         "Mon - Fri: 7:00AM - 10:00PM",
        document.createElement("br"),
        "Sat – Sun: 9:00 AM – 11:00 PM"
    );

    contactDiv.append(
        contactatitle, 
        locationDiv,
        document.createElement("br"),
        phoneDiv,
        document.createElement("br"),
        emailDiv,
        document.createElement("br"),
        timeDiv,
       

    )
    container.appendChild(contactDiv);
}