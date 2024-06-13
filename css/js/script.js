function redirect(id) {

    const links = {
        "gh": "https://github.com/ssxbaa",
        "tg": "https://t.me/Insgamabile",
        "proj": "projects.html",
        "home": "index.html"

    }

    const page = links[id];

    if (page !== "projects.html" && page !== "index.html") {
        window.open(page)
    } else {
        window.location.href = page;
    }

}

function openProj(id) {

    const links = {
        "brawljs": "https://github.com/ssxbaa/BrawlJS",
        "ezdiscordbot": "https://github.com/ssxbaa/EzDiscordBot",
    }

    const page = links[id];

    if (page) {
        window.open(page)
    } else {
        var container = document.getElementById("main")

        var dialog = document.createElement('dialog');
        dialog.style.zIndex = '1 !important';
        dialog.setAttribute('open', '');
        dialog.innerHTML = '<h4>The project isn\'t public (yet)!</h4>';

        container.appendChild(dialog);

        setTimeout(function() {
            container.removeChild(dialog);
        }, 2000);
    }

}

function copyUsername() {

    var username = "ssxbaa";
    navigator.clipboard.writeText(username).then(function() {

        var container = document.getElementById("main")

        var dialog = document.createElement('dialog');
        dialog.style.zIndex = '1 !important';
        dialog.setAttribute('open', '');
        dialog.innerHTML = '<h4>I copied the username!</h4>';

        container.appendChild(dialog);

        setTimeout(function() {
            container.removeChild(dialog);
        }, 2000);

    });   

}