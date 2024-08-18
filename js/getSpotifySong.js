var sebaId = "1213198625610408046";
var url = "https://api.lanyard.rest/v1/users/" + sebaId;

function pushSpotifySong() {

    const spotifyDiv = document.getElementsByClassName("spotify")[0];
    const imgDiv = document.getElementsByClassName("spoti-img")[0];
    const textDiv = document.getElementsByClassName("spoti-text")[0];
    const controls = `<i class="bi bi-skip-start-fill"></i> <i class="bi bi-play-circle-fill"></i> <i class="bi bi-skip-end-fill"></i>`;


    fetch(url)

        .then(info => info.json())

        .then(data => {

            if (data.data.discord_status === "offline") return;
            if (!data.data.listening_to_spotify) return;
            const song = data.data.spotify.song;
            const artist = data.data.spotify.artist;
            const coverUrl = data.data.spotify.album_art_url;
            const songUrl = `https://open.spotify.com/intl-en/track/${data.data.spotify.track_id}`;

            let cover = document.createElement("img");
            cover.src = coverUrl;
            cover.draggable = false;
            imgDiv.appendChild(cover);

            let text = document.createElement("p");
            text.innerHTML = `<span><a href="${songUrl}" target="_blank"><b>${song}</b></a></span></b><br>` +
                             `by <b><span>${artist}</span></b> <br>` +
                             `<span class="controls">${controls}</span>`;

            textDiv.appendChild(text)
            spotifyDiv.style.display = "flex";

        })

}

document.addEventListener("DOMContentLoaded", function() {
    pushSpotifySong();
});
