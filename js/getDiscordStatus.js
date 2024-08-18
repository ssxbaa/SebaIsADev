var sebaId = "1213198625610408046";
var url = "https://api.lanyard.rest/v1/users/" + sebaId;

function fetchAndUpdate() {

    const statusTexts = {
        "online": "online",
        "dnd": "online (dnd)",
        "idle": "idle",
        "offline": "offline"
    };

    fetch(url)

        .then(info => info.json())

        .then(data => {

            const status = data.data.discord_status;
            const descParagraph = document.getElementById("desc");
            descParagraph.innerHTML += `<br>currently <span class="${status}">${statusTexts[status]}</span>`;
            
        })

}

document.addEventListener("DOMContentLoaded", function() {
    fetchAndUpdate();
});
