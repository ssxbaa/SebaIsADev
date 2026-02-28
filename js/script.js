import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.7.2/+esm";
import "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";

const SEBA_ID = 1213198625610408046n;
const API_URL = `https://api.lanyard.rest/v1/users/${SEBA_ID}`;

function startTyping() {

    new Typed('#typing', {
        strings: ["developer", "student", "freelancer"],
        typeSpeed: 75,
        backSpeed: 50,
        loop: true,
        showCursor: false
    });

}

function setAge() {

    const birthDate = "2008-06-06";

    const birthDateObj = DateTime.fromISO(birthDate, { zone: "Europe/Rome" });
    const todayObj = DateTime.now().setZone("Europe/Rome");

    let age = todayObj.year - birthDateObj.year;

    if (
        todayObj.month < birthDateObj.month ||
        (todayObj.month === birthDateObj.month && todayObj.day < birthDateObj.day)
    ) age--;

    document.querySelector("span#age").textContent = age;

}

async function setPfp() {

    const req = await fetch(API_URL);
    const dataJSON = await req.json();

    let avatarID = dataJSON.data.discord_user.avatar;

    const avatarURL = `https://cdn.discordapp.com/avatars/${SEBA_ID}/${avatarID}.png?size=256`;

    document.querySelector("img#pfp").src = avatarURL;
    
}

window.onload = () => {
    startTyping();
    setAge();
    setPfp();
};