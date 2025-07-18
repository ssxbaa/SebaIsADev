document.addEventListener("DOMContentLoaded", () =>  {

    document.addEventListener("scroll", () => {

        const notifyDiv = document.querySelector("div.notify");
        const navElement = document.querySelector("nav");

        if (window.scrollY >= 20) {
            notifyDiv.classList.add("fadeout");
        } else {
            notifyDiv.classList.remove("fadeout");
        }

        if (window.scrollY >= 50) {
            navElement.classList.add("scrolled");
        } else {
            navElement.classList.remove("scrolled");
        }

    })

})