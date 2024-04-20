function copyUsername() {
    var username = "ssxbaa";
    navigator.clipboard.writeText(username).then(function() {
        let div = document.getElementById("alert")
        div.style.display = "block";
        setTimeout(() => div.style.display = "none", 1500)
    });    
}

function openLink(id) {
    switch (id) {
        case "github":
            window.open('https://github.com/ssxbaa'); 
        case "telegram":
            window.open('https://t.me/insgamabile'); 
    }
}