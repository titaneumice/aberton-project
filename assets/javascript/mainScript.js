import "./myClasses.js";
import { chProfile } from "./myClasses.js";

function mainLoop() {
    const example = "I was put up to this by Java.";
    const me = new chProfile("Titan");

    document.getElementById("dynaText").innerHTML = me.getName() + ": " + example;
    document.getElementById("demo").innerHTML = "Date : " + Date();
}
setInterval(mainLoop(), 1000);
mainLoop();