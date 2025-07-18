function scrollToSection(id) {

    if (id == "#") return window.scrollTo(0, 0);

    document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            // block: 'center',
    });

}

function redirect(link) {
    window.open(link);
}