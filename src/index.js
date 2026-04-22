import "./styles.css";
import {createHome} from "./createHome.js";
import {createMenu} from "./createMenu.js";
import {createAbout} from "./createAbout.js";

//initial creation
createHome();

const navListener = (()=> {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", (e) => {
        const trigger = e.target;
        const text = trigger.innerHTML;

        switch(text) {
            case "Home":
                createHome();
                break;
            case "Menu":
                createMenu();
                break;
            case "About":
                createAbout();
                break;
            default:
                console.log("error");
        }
    });
})();

